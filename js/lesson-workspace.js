/* Classroom controls. Positions belong to the current student, never to the book. */
(function () {
  'use strict';
  const { h, Store, LS, allItems } = Core;
  window.LessonWorkspace = function (lesson, body, requested) {
    const items = allItems(lesson.id);
    const cards = [...body.querySelectorAll('.ex')];
    const positions = Store.data().positions || {};
    const saved = positions[lesson.id];
    let index = Math.max(0, items.findIndex(it => it.id === (requested || saved)));
    let focus = !!LS.get('singleExercise', false) && !(requested || '').startsWith('@');
    let disposed = false;
    const exercise = h('select', { class: 'inp', 'aria-label': 'Выбрать упражнение' });
    const label = it => (it.source === 'added' ? (it.title || 'Дополнительное задание') : 'Ex. ' + it.num + ' · p.' + it.page);
    items.forEach(it => exercise.append(h('option', { value: it.id }, label(it))));
    const lessons = h('select', { class: 'inp', 'aria-label': 'Выбрать урок', onchange: e => { location.hash = '#/lesson/' + e.target.value; } });
    BOOK.units.forEach(u => lessons.append(h('optgroup', { label: 'Unit ' + u.num + ' · ' + u.title }, u.lessons.map(id => h('option', { value: id, selected: id === lesson.id || null }, LESSONS[id].code + ' · ' + LESSONS[id].title)))));
    const status = h('span', { class: 'workspace-status', role: 'status', 'aria-live': 'polite' });
    const prev = h('button', { class: 'btn ghost', onclick: () => select(index - 1, true) }, '← Назад');
    const next = h('button', { class: 'btn primary', onclick: () => select(index + 1, true) }, 'Далее →');
    const one = h('button', { class: 'btn ghost', 'aria-pressed': String(focus), onclick: () => { focus = !focus; LS.set('singleExercise', focus); select(index, true); } }, 'Одно задание');
    const quiet = h('button', { class: 'btn ghost', 'aria-pressed': String(LS.get('quietView', true)), onclick: () => {
      const on = !LS.get('quietView', true); LS.set('quietView', on);
      document.documentElement.classList.toggle('quiet-view', on); quiet.setAttribute('aria-pressed', String(on));
    } }, 'Спокойный вид');
    const panel = h('nav', { class: 'lesson-workspace', 'aria-label': 'Панель занятия' },
      h('div', { class: 'workspace-selects' }, h('label', null, 'Урок', lessons), h('label', null, 'Упражнение', exercise)),
      h('div', { class: 'workspace-actions' }, prev, next, one, quiet, status));
    function paint() {
      const done = !!Store.ex(items[index].id).done;
      status.textContent = (index + 1) + ' / ' + items.length + (done ? ' · выполнено' : ' · в работе');
      [...exercise.options].forEach((o, i) => { o.textContent = (Store.ex(items[i].id).done ? '✓ ' : '') + label(items[i]); });
    }
    function select(i, scroll, remember = true) {
      if (disposed || !items.length) return;
      index = Math.max(0, Math.min(items.length - 1, i));
      exercise.value = items[index].id;
      one.setAttribute('aria-pressed', String(focus));
      body.classList.toggle('single-exercise', focus);
      cards.forEach(c => c.classList.toggle('workspace-active', c.dataset.id === items[index].id));
      [...body.children].forEach(s => s.classList.toggle('workspace-section', !!s.querySelector('.workspace-active')));
      prev.disabled = index === 0; next.disabled = index === items.length - 1;
      if (remember) {
        const d = Store.data(); (d.positions || (d.positions = {}))[lesson.id] = items[index].id;
        Store.setLast('#/lesson/' + lesson.id + '/' + items[index].id);
      }
      body.dispatchEvent(new CustomEvent('workspace-selection', { detail: { id: items[index].id, page: items[index].source === 'added' ? null : items[index].page } }));
      document.dispatchEvent(new CustomEvent('lesson-item-selected', {detail:{lesson:lesson.id,id:items[index].id,listen:items[index].type==='listen'}}));
      paint();
      if (scroll) {
        // Update the link without rerendering the lesson or interrupting audio.
        history.replaceState(null, '', '#/lesson/' + lesson.id + '/' + items[index].id);
        const card = cards.find(c => c.dataset.id === items[index].id);
        if (card) { card.scrollIntoView({ block: 'start' }); card.tabIndex = -1; card.focus({ preventScroll: true }); }
      }
    }
    exercise.onchange = () => select(items.findIndex(it => it.id === exercise.value), true);
    const track = e => {
      const card = e.target.closest('.ex'); if (!card) return;
      const i = items.findIndex(it => it.id === card.dataset.id);
      if (i >= 0 && i !== index) select(i, false);
    };
    body.addEventListener('focusin', track); body.addEventListener('pointerdown', track);
    const progress = () => paint(); document.addEventListener('progress-changed', progress);
    select(index, false, !requested || !requested.startsWith('@'));
    return { panel, resume: !requested && saved ? saved : null, destroy() {
      disposed = true; body.removeEventListener('focusin', track); body.removeEventListener('pointerdown', track);
      document.removeEventListener('progress-changed', progress);
    } };
  };
})();
