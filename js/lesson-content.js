/* User-owned source text and illustrations are imported locally as structured blocks. */
(function () {
  'use strict';
  const { h } = Core;
  const originals = new Map();
  const index = () => Object.values(LESSONS).filter(l => l.unit === 'u1').flatMap(l => l.sections.flatMap(s => s.items));
  function apply(records) {
    const items = index();
    for (const record of records || []) {
      const it = items.find(x => x.id === record.id); if (!it) continue;
      const target = it.inner || it;
      if (!originals.has(it.id)) originals.set(it.id, JSON.parse(JSON.stringify(target)));
      const original = originals.get(it.id);
      if (record.templates && !original.paras) { it.privateBlocks = undefined; continue; }
      if (record.templates) {
        const fields = (original.paras || []).flat().filter(s => s && typeof s === 'object' && (s.a != null || s.open || s.n));
        const used = [];
        const paras = record.templates.map(text => text.split(/(\[\[\d+\]\])/g).filter(Boolean).map(part => {
          const m = /^\[\[(\d+)\]\]$/.exec(part);
          if (!m) return part;
          const i = Number(m[1]); if (!fields[i]) throw new Error('Не найдено поле ' + it.id + '/' + i);
          used.push(i); return Object.assign({}, fields[i]);
        }));
        if (used.length !== fields.length || new Set(used).size !== fields.length) throw new Error('Число полей не совпало: ' + it.id);
        target.paras = paras; target.numbered = record.templates.length > 1;
      }
      if (record.questions) {
        if (!original.questions || original.questions.length !== record.questions.length) throw new Error('Число вопросов не совпало: ' + it.id);
        target.questions = original.questions.map((q, i) => Object.assign({}, q, record.questions[i]));
      }
      if (record.optionsLabels) { if (!original.options || original.options.length !== record.optionsLabels.length) throw new Error('Число вариантов не совпало: ' + it.id); target.options = record.optionsLabels; }
      if (record.leftLabels && target.type === 'match') { if (record.leftLabels.length !== target.answers.length) throw new Error('Число пар не совпало: ' + it.id); target.left = record.leftLabels; }
      if (record.rightLabels && target.type === 'match') { target.right = record.rightLabels; target.rightShort = record.rightLabels; }
      it.privateBlocks = record.blocks || [];
    }
  }
  function render(it) {
    if (!it.privateBlocks || !it.privateBlocks.length) return null;
    const urls = [];
    const el = h('div', { class: 'exercise-material' }, it.privateBlocks.map(block => {
      if (block.kind === 'image') {
        const url = URL.createObjectURL(block.blob); urls.push(url);
        return h('figure', { class: 'exercise-figure', 'data-answer-row': Number.isInteger(block.answerRow) ? block.answerRow : null }, h('img', { src: url, alt: block.alt || 'Иллюстрация к заданию', loading: 'lazy' }), block.caption ? h('figcaption', null, block.caption) : null);
      }
      return h(block.kind === 'quote' ? 'blockquote' : 'section', { class: 'reading-passage' }, block.title ? h('h3', null, block.title) : null,
        String(block.text || '').split(/\n\n/).map(text => h('p', null, text.split(/(\b[A-Za-z]+\b)/g).map(word => { const found = (block.words || []).includes(word.toLowerCase()) && (window.VOCAB || []).find(v=>v.w.toLowerCase()===word.toLowerCase()); return found ? h('button',{type:'button',class:'read-word','aria-label':word+' — показать перевод',onclick:()=>Core.toast(found.w+' — '+found.ru)},word) : word; }))));
    }));
    el._dispose = () => urls.forEach(url => URL.revokeObjectURL(url));
    return el;
  }
  window.LessonContent = { apply, render };
})();
