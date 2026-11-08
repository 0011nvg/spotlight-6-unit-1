(function () {
  'use strict';
  const { h, matches, Store, shuffle } = Core;
  function SentenceBuilder(it) {
    const rows = [];
    const save = () => Store.saveState(it.id, rows.map(r => r.input.value));
    const join = tokens => tokens.join(' ').replace(/\s+([?!.,])/g, '$1');
    const el = h('div', { class: 'sentence-builder' }, h('p', { class: 'muted small' }, 'Нажимай на слова или перетаскивай их в строку. Нажми выбранное слово, чтобы вернуть его. Можно также напечатать предложение.'),
      it.items.map((item, ri) => {
        const tokens = shuffle(item.tokens), chosen = [];
        const input = h('input', { class: 'inp', 'aria-label': 'Sentence ' + (ri + 1), autocomplete: 'off', spellcheck: false });
        const bank = h('div', { class: 'sentence-bank', 'aria-label': 'Слова предложения ' + (ri + 1) });
        const target = h('div', { class: 'sentence-target', 'aria-label': 'Порядок слов ' + (ri + 1) });
        function move(token, position = chosen.length) {
          if (!Number.isInteger(token) || token < 0 || token >= tokens.length) return;
          const old = chosen.indexOf(token); if (old >= 0) { chosen.splice(old, 1); if (old < position) position--; }
          chosen.splice(position, 0, token); input.value = join(chosen.map(i => tokens[i])); input.classList.remove('ok', 'bad'); paint(); save();
        }
        function drag(event, token) { event.dataTransfer.setData('text/plain', JSON.stringify({exercise:it.id,row:ri,token})); }
        function dropped(event, position) {
          event.preventDefault(); event.stopPropagation();
          try { const data = JSON.parse(event.dataTransfer.getData('text/plain')); if (data.exercise === it.id && data.row === ri) move(data.token, position); } catch (_) {}
        }
        function paint() {
          bank.replaceChildren(...tokens.map((word, i) => h('button', { class: 'word-tile', disabled: chosen.includes(i) || null, draggable: true,
            onclick: () => move(i), ondragstart: e => drag(e, i) }, word)));
          target.replaceChildren(...chosen.map((token, position) => h('button', { class: 'word-tile selected', draggable: true,
            'aria-label': tokens[token] + ' — вернуть в набор',
            onclick: () => { chosen.splice(position, 1); input.value = join(chosen.map(i => tokens[i])); paint(); save(); },
            ondragstart: e => drag(e, token),
            ondragover: e => e.preventDefault(), ondrop: e => dropped(e, position)
          }, tokens[token])));
          if (!chosen.length) target.append(h('span', { class: 'muted' }, 'Собери предложение здесь'));
        }
        target.ondragover = e => e.preventDefault(); target.ondrop = e => dropped(e, chosen.length);
        function restore(text) {
          input.value = text || ''; chosen.length = 0;
          const words = (text || '').replace(/([?!.,])/g, ' $1').trim().split(/\s+/);
          words.forEach(w => { const i = tokens.findIndex((t, j) => t.toLowerCase() === w.toLowerCase() && !chosen.includes(j)); if (i >= 0) chosen.push(i); });
          paint();
        }
        input.oninput = () => { input.classList.remove('ok', 'bad'); restore(input.value); save(); };
        const row = { input, item, restore, ok: false }; rows.push(row); paint();
        return h('section', { class: 'sentence-row' }, h('b', null, String(ri + 1)), bank, target, input);
      }));
    return { el,
      check() { let score = 0; rows.forEach(r => { r.ok = matches(r.input.value, r.item.answers); score += Number(r.ok); r.input.classList.toggle('ok', r.ok); r.input.classList.toggle('bad', !r.ok); r.input.setAttribute('aria-invalid', String(!r.ok)); }); return {score, max: rows.length}; },
      reset() { rows.forEach(r => { r.restore(''); r.input.classList.remove('ok','bad'); }); },
      retry() { rows.forEach(r => { if (!r.ok) { r.restore(''); r.input.classList.remove('bad'); } }); save(); },
      setState(state) { if (Array.isArray(state)) rows.forEach((r, i) => r.restore(state[i] || '')); },
      key() { rows.forEach(r => r.restore(r.item.answers[0])); }
    };
  }
  Exercises.register('sentence', SentenceBuilder);
})();
