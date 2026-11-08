/* Built-in Module 1 materials load from the site; optional local imports remain supported. */
(function () {
  'use strict';
  const { h, toast } = Core;
  let opened;
  function db() {
    if (!opened) opened = new Promise((resolve, reject) => {
      const request = indexedDB.open('panoramic-materials', 2);
      request.onupgradeneeded = () => { for (const name of ['pages','exercises']) if (!request.result.objectStoreNames.contains(name)) request.result.createObjectStore(name); };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => { opened = null; reject(request.error); };
    });
    return opened;
  }
  async function transaction(mode, operation, store = 'pages') {
    const database = await db();
    return new Promise((resolve, reject) => {
      const tx = database.transaction(store, mode);
      const result = operation(tx.objectStore(store));
      tx.oncomplete = () => resolve(result && result.result);
      tx.onabort = tx.onerror = () => reject(tx.error || new Error('Не удалось сохранить страницы'));
    });
  }
  function decode(data, mime) {
    if (typeof data !== 'string' || !/^[A-Za-z0-9+/]*={0,2}$/.test(data)) throw new Error('Повреждены данные файла');
    const raw = atob(data), bytes = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
    return new Blob([bytes], { type: mime });
  }
  function validate(pack) {
    if (!pack || !['panoramic-local-materials/v1','panoramic-local-materials/v2'].includes(pack.format) || !Array.isArray(pack.pages) || !Array.isArray(pack.audio)) throw new Error('Нужен пакет Panoramic A2 формата v1');
    if (pack.pages.length > 300 || pack.audio.length > 200) throw new Error('Слишком много файлов в пакете');
    const seen = new Set();
    const pages = pack.pages.map(p => {
      if (!Number.isInteger(p.page) || p.page < 1 || p.page > 300 || seen.has(p.page) || !['image/jpeg', 'image/png'].includes(p.mime)) throw new Error('Неверная или повторная страница');
      seen.add(p.page); return { page: p.page, blob: decode(p.data, p.mime) };
    });
    const audio = pack.audio.map(a => {
      if (typeof a.name !== 'string' || !/\.mp3$/i.test(a.name) || !AudioLib.trackOf(a.name)) throw new Error('Неверное имя аудиофайла');
      return new File([decode(a.data, 'audio/mpeg')], a.name, { type: 'audio/mpeg' });
    });
    const exercises = (pack.exercises || []).map(record => {
      if (!record || typeof record.id !== 'string' || !/^u1[a-z0-9-]*$/.test(record.id)) throw new Error('Пакет должен содержать только Module 1');
      const clean = {id:record.id,blocks:[]};
      for (const b of record.blocks || []) {
        if (!b || !['text','quote','image'].includes(b.kind)) throw new Error('Неверный блок упражнения');
        if (b.kind === 'image') {
          if (!['image/jpeg','image/png'].includes(b.mime)) throw new Error('Неверный формат изображения');
          clean.blocks.push({kind:'image',blob:decode(b.data,b.mime),alt:String(b.alt||''),caption:String(b.caption||''),answerRow:Number.isInteger(b.answerRow) ? b.answerRow : null});
        } else clean.blocks.push({kind:b.kind,title:String(b.title||''),text:String(b.text||''),words:Array.isArray(b.words) ? b.words.map(String) : []});
      }
      if (record.templates) { if (!Array.isArray(record.templates) || record.templates.some(t=>typeof t !== 'string')) throw new Error('Неверные строки задания'); clean.templates = record.templates; }
      if (record.questions) { clean.questions = record.questions.map(q => { if (typeof q.q !== 'string' || !Array.isArray(q.options) || q.options.some(o=>typeof o !== 'string')) throw new Error('Неверный вопрос'); return {q:q.q,options:q.options}; }); }
      if (record.optionsLabels) { if (!Array.isArray(record.optionsLabels) || record.optionsLabels.some(x=>typeof x!=='string')) throw new Error('Неверные варианты'); clean.optionsLabels = record.optionsLabels; }
      if (record.leftLabels) clean.leftLabels = record.leftLabels.map(String);
      if (record.rightLabels) clean.rightLabels = record.rightLabels.map(String);
      return clean;
    });
    return { pages, audio, exercises };
  }
  const builtInPages = [11,12,13,14,15,16,17,18,19,20,132,133,156,157,158,159,160,161];
  const MaterialLib = {
    async loadBuiltIn() {
      const response = await fetch('assets/module1/content.json?v=1');
      if (!response.ok) throw new Error('Не удалось загрузить материалы Module 1');
      LessonContent.apply(validate(await response.json()).exercises);
    },
    validate,
    exercises() { return transaction('readonly', s => s.getAll(), 'exercises').then(v => v || []); },
    get(page) {
      if (builtInPages.includes(Number(page))) return fetch('assets/module1/page-' + Number(page) + '.jpg').then(r => { if (!r.ok) throw new Error('Страница недоступна'); return r.blob(); });
      return transaction('readonly', s => s.get(Number(page)));
    },
    list() { return transaction('readonly', s => s.getAllKeys()).catch(() => []).then(v => [...new Set([...builtInPages,...(v || [])])]); },
    async import(file) {
      if (file.size > 350 * 1024 * 1024) throw new Error('Пакет больше 350 МБ');
      const { pages, audio, exercises } = validate(JSON.parse(await file.text()));
      await transaction('readwrite', s => { pages.forEach(p => s.put(p.blob, p.page)); });
      if (exercises.length) await transaction('readwrite', s => { exercises.forEach(e => s.put(e, e.id)); }, 'exercises');
      if (window.LessonContent && exercises.length) LessonContent.apply(exercises);
      document.dispatchEvent(new CustomEvent('materials-changed'));
      // The stores are independent. Keep successfully imported pages if audio storage fails.
      try { await AudioLib.add(audio); }
      catch (_) { throw new Error('Страницы сохранены, но для аудио не хватило места. Подключите MP3 отдельно в Audio.'); }
      if (exercises.length) document.dispatchEvent(new CustomEvent('course-content-changed'));
      return { pages: pages.length, audio: audio.length };
    },
    pick() {
      return new Promise((resolve, reject) => {
        const input = h('input', { type: 'file', accept: '.json,application/json', hidden: true });
        document.body.append(input);
        input.oncancel = () => { input.remove(); resolve(null); };
        input.onchange = () => {
          const file = input.files[0]; input.remove();
          if (!file) return resolve(null);
          this.import(file).then(resolve, reject);
        };
        input.click();
      });
    },
    clear() { return transaction('readwrite', s => s.clear()).then(() => document.dispatchEvent(new CustomEvent('materials-changed'))); }
  };
  async function importMaterials(button) {
    button.disabled = true; const label = button.textContent;
    button.textContent = 'Подключение…';
    try {
      const result = await MaterialLib.pick();
      if (result) toast('Подключено страниц: ' + result.pages + ', аудиотреков: ' + result.audio);
    } catch (e) { toast(e.message || 'Не удалось подключить материалы', 'bad'); }
    finally { button.disabled = false; button.textContent = label; }
  }
  function SourceReader(lesson, first) {
    const pages = [...new Set(Core.allItems(lesson.id).map(it => Number(it.page)).filter(Number.isFinite))];
    if (/-(gr)$/.test(lesson.id) && pages[0]) pages.unshift(pages[0] - 1);
    let page = Number(first || pages[0]), url, generation = 0, disposed = false;
    const title = h('b', null, 'Учебник рядом');
    const select = h('select', { class: 'inp', 'aria-label': 'Страница оригинала', onchange: e => show(Number(e.target.value)) });
    pages.forEach(p => select.append(h('option', { value: p }, 'p. ' + p)));
    const content = h('div', { class: 'source-content' });
    const zoom = h('button', { class: 'btn ghost sm', disabled: true, onclick: () => {
      if (!url) return;
      const close = h('button', { class: 'btn primary', onclick: () => dialog.close() }, 'Закрыть');
      const dialog = h('dialog', { class: 'source-dialog', 'aria-label': 'Оригинал · страница ' + page }, h('div', { class: 'source-dialog-head' }, h('b', null, 'Panoramic A2 · p.' + page), close), h('img', { src: url, alt: 'Текст и иллюстрации оригинальной страницы ' + page }));
      dialog.onclose = () => dialog.remove(); document.body.append(dialog); dialog.showModal();
    } }, 'Увеличить');
    const root = h('aside', { class: 'source-pane', 'aria-label': 'Оригинальные учебные материалы' }, h('div', { class: 'source-head' }, title, select, zoom), content);
    async function show(p) {
      page = p; select.value = String(p); const ticket = ++generation;
      try {
        const blob = await MaterialLib.get(p);
        if (disposed || ticket !== generation) return;
        if (url) URL.revokeObjectURL(url); url = null; content.replaceChildren(); zoom.disabled = !blob;
        if (blob) {
          url = URL.createObjectURL(blob);
          content.append(h('img', { src: url, alt: 'Panoramic A2, p.' + p + ': оригинальные тексты и иллюстрации. Ответьте в карточке задания.', decoding: 'async' }));
        } else {
          const button = h('button', { class: 'btn primary', onclick: () => importMaterials(button) }, 'Подключить материалы');
          content.append(h('div', { class: 'source-empty' }, h('span', { class: 'eyebrow' }, 'Panoramic A2 · p.' + p), h('h3', null, 'Текст и картинки — рядом с заданием'), h('p', null, 'Подключите локальный пакет страниц и аудио. Он сохранится только в этом браузере. Или работайте по своей книге.'), button, h('a', { href: '#/materials' }, 'Как это работает')));
        }
      } catch (_) {
        if (!disposed && ticket === generation) content.replaceChildren(h('p', { class: 'source-empty' }, 'Браузер не разрешил доступ к материалам. Используйте книгу или подключите пакет в другом браузере.'));
      }
    }
    const changed = () => show(page);
    const exerciseChanged = e => { if (e.detail.page) show(Number(e.detail.page)); };
    document.addEventListener('materials-changed', changed);
    root.addEventListener('exercise-page', exerciseChanged);
    show(page);
    return { el: root, show, destroy() {
      disposed = true; generation++;
      document.removeEventListener('materials-changed', changed);
      document.querySelectorAll('.source-dialog').forEach(d => d.close());
      if (url) URL.revokeObjectURL(url);
    } };
  }
  function MaterialsPage() {
    return h('div', {class:'page materials-page'}, h('div',{class:'eyebrow'},'Ваш учебный комплект'),
      h('h1',null,'Материалы для занятия'),
      h('section',{class:'tcard'},h('h2',null,'Module 1 подключён автоматически'),
        h('p',null,'Тексты и иллюстрации загружаются вместе с сайтом. Все 13 оригинальных аудиозаписей доступны прямо в заданиях — выбирать и загружать файлы не нужно.'),
        h('p',null,'Для загрузки материалов требуется интернет. Полные страницы доступны в свёрнутом справочнике Teacher Mode. Ответы сохраняются отдельно в этом браузере.'),
        h('a',{class:'btn primary',href:'#/lesson/u1-1'},'Начать занятие')));
  }
  window.MaterialLib = MaterialLib; window.SourceReader = SourceReader; window.MaterialsPage = MaterialsPage;
})();
