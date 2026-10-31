/* ========== AUDIO LIBRARY (local, per browser) ==========
   Аудио учебника НЕ лежит в репозитории: преподаватель один раз выбирает
   свои mp3-файлы, они сохраняются в IndexedDB этого браузера.
   Номер трека берётся из имени файла: «…track_04.mp3», «04.mp3», «Track 4.mp3». */
(function () {
  'use strict';
  const DB = 'a2-audio', ST = 'tracks';
  const urls = {};
  let dbp = null;
  function db() {
    if (dbp) return dbp;
    dbp = new Promise((res, rej) => {
      if (!window.indexedDB) return rej(new Error('no idb'));
      const r = indexedDB.open(DB, 1);
      r.onupgradeneeded = () => r.result.createObjectStore(ST);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    return dbp;
  }
  function tx(mode, fn) {
    return db().then(d => new Promise((res, rej) => {
      const t = d.transaction(ST, mode); const s = t.objectStore(ST); const out = fn(s);
      t.oncomplete = () => res(out && 'result' in out ? out.result : undefined);
      t.onerror = () => rej(t.error);
    }));
  }
  const pad = n => String(parseInt(n, 10)).padStart(2, '0');
  function trackOf(name) {
    const base = name.replace(/\.[a-z0-9]+$/i, '');
    let m = base.match(/track[\s_-]*0*(\d{1,3})/i) || base.match(/^0*(\d{1,3})$/) || base.match(/(\d{1,3})\D*$/);
    return m ? pad(m[1]) : null;
  }
  const listeners = [];
  const AudioLib = {
    trackOf,
    get(track) {
      track = pad(track);
      if (urls[track]) return Promise.resolve(urls[track]);
      return tx('readonly', s => s.get(track)).then(b => { if (!b) return null; urls[track] = URL.createObjectURL(b); return urls[track]; }).catch(() => null);
    },
    list() { return tx('readonly', s => s.getAllKeys()).then(k => (k || []).sort()).catch(() => []); },
    add(files) {
      const ok = [], skip = [];
      const jobs = Array.from(files).map(f => {
        const t = trackOf(f.name);
        if (!t || !/audio|mpeg|mp3|m4a|wav|ogg/i.test(f.type + f.name)) { skip.push(f.name); return null; }
        ok.push(t); delete urls[t];
        return tx('readwrite', s => s.put(f, t));
      });
      return Promise.all(jobs).then(() => { listeners.forEach(fn => fn()); return { ok: ok.sort(), skip }; });
    },
    clear() { Object.keys(urls).forEach(k => { URL.revokeObjectURL(urls[k]); delete urls[k]; }); return tx('readwrite', s => s.clear()).then(() => listeners.forEach(fn => fn())); },
    onChange(fn) { listeners.push(fn); },
    pick() {
      return new Promise(res => {
        const i = document.createElement('input');
        i.type = 'file'; i.accept = 'audio/*,.mp3'; i.multiple = true;
        i.onchange = () => AudioLib.add(i.files).then(res);
        i.click();
      });
    }
  };
  window.AudioLib = AudioLib;
})();
