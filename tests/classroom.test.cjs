const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
function runtime(applyCorrections = true) {
  const data = new Map();
  const context = { Blob, File, atob, localStorage: {
    getItem: key => data.get(key) ?? null,
    setItem: (key, value) => data.set(key, String(value)),
    removeItem: key => data.delete(key)
  } };
  context.window = context; vm.createContext(context);
  for (const file of ['core.js', 'data-unit1.js', 'data-unit2.js', 'data-unit3.js', 'data-corrections.js', 'audiolib.js', 'materials.js']) {
    if (file === 'data-corrections.js' && !applyCorrections) continue;
    vm.runInContext(fs.readFileSync(path.join(root, 'js', file), 'utf8'), context);
  }
  return context;
}
test('student answers and lesson positions survive storage reload and remain separate', () => {
  const { Core } = runtime();
  const a = Core.Profiles.ensure();
  Core.Store.saveState('u11-3', ['honest']);
  Core.Store.data().positions = { 'u1-1': 'u11-3' };
  Core.Store.setLast('#/lesson/u1-1/u11-3');
  const b = Core.Profiles.add('Second student');
  assert.notEqual(a.id, b.id);
  assert.equal(Core.Store.data().positions, undefined);
  assert.equal(Core.Store.data().ex['u11-3'], undefined);
  Core.Profiles.switchTo(a.id);
  Core.Store._id = null;
  assert.equal(Core.Store.data().positions['u1-1'], 'u11-3');
  assert.equal(Core.Store.data().ex['u11-3'].state[0], 'honest');
  assert.equal(Core.Store.data().last, '#/lesson/u1-1/u11-3');
});
test('actual original audio filenames resolve without losing three-digit track numbers', () => {
  const { AudioLib } = runtime();
  assert.equal(AudioLib.trackOf('4064835_Panoramic_A2_audio_track_02.mp3'), '02');
  assert.equal(AudioLib.trackOf('4064835_Panoramic_A2_audio_track_100.mp3'), '100');
  assert.equal(AudioLib.trackOf('04.mp3'), '04');
  assert.equal(AudioLib.trackOf('notes.txt'), null);
});
test('all registered lessons have unique exercises for safe navigation and persistence', () => {
  const { BOOK, LESSONS, Core } = runtime();
  const ids = new Set(); let count = 0;
  for (const unit of BOOK.units) for (const id of unit.lessons) {
    assert.ok(LESSONS[id], id);
    const items = Core.allItems(id); assert.ok(items.length, id);
    for (const item of items) {
      assert.ok(item.id, id); assert.ok(!ids.has(item.id), item.id);
      ids.add(item.id); count++;
    }
  }
  assert.equal(count, 335);
});

test('known listening key rejects the opposite answer', () => {
  const { Core } = runtime();
  const item = Core.allItems('u1-1').find(it => it.id === 'u11-7');
  assert.equal(item.inner.paras[1][1].a, 'loud');
  assert.equal(Core.matches('quiet', [item.inner.paras[1][1].a]), false);
});
test('sentence builders preserve every word of the accepted source answer', () => {
  const { Core } = runtime();
  for (const lesson of ['u1-wb','u3-wb']) for (const it of Core.allItems(lesson)) {
    if (it.type !== 'sentence') continue;
    for (const row of it.items) {
      const words = row.answers[0].replace(/([?!.,])/g, ' $1').trim().split(/\s+/);
      const clean = xs => [...xs].map(x=>x.toLowerCase()).filter(x=>!/[?!.,]/.test(x)).sort().join('|');
      assert.equal(clean(row.tokens), clean(words));
    }
  }
});
test('published exercise keys have valid choices and matching indices', () => {
  const { LESSONS } = runtime();
  function check(it) {
    for (const para of it.paras || []) for (const seg of para) {
      if (seg && seg.sel && seg.a != null) for (const a of [].concat(seg.a)) assert.ok(seg.sel.includes(a), JSON.stringify(seg));
    }
    for (const q of it.questions || []) if (q.options && q.a != null) assert.ok(Number.isInteger(q.a) && q.a >= 0 && q.a < q.options.length);
    if (it.type === 'match') for (const a of it.answers) assert.ok(a >= 0 && a < it.right.length);
    if (it.inner) check(it.inner);
  }
  for (const l of Object.values(LESSONS)) for (const s of l.sections) for (const it of s.items) check(it);
});
test('malformed private packs are rejected before any writes', () => {
  const { MaterialLib } = runtime();
  assert.throws(() => MaterialLib.validate({format:'another-format',pages:[],audio:[]}));
  assert.throws(() => MaterialLib.validate({format:'panoramic-local-materials/v1',pages:[{page:0,mime:'image/jpeg',data:''}],audio:[]}));
  assert.throws(() => MaterialLib.validate({format:'panoramic-local-materials/v1',pages:[{page:12,mime:'text/html',data:''}],audio:[]}));
});

test('Module 1 corrections do not alter Module 2 or Module 3 content', () => {
  const before = runtime(false), after = runtime();
  for (const id of Object.keys(before.LESSONS).filter(id => /^u[23]-/.test(id))) assert.equal(JSON.stringify(after.LESSONS[id]), JSON.stringify(before.LESSONS[id]), id);
});
test('reviewed Module 1 keys match independent Teacher Guide regressions', () => {
  const { Core } = runtime();
  const item = id => Object.values(runtime().LESSONS).flatMap(l=>l.sections.flatMap(s=>s.items)).find(it=>it.id===id);
  const fields = id => { const it = item(id); return (it.inner||it).paras.flat().filter(s=>s&&typeof s==='object'&&s.a!=null); };
  assert.ok(Core.matches('also',fields('u16-2')[3].a));
  assert.equal(Core.matches('both',fields('u16-2')[3].a),false);
  assert.ok(Core.matches('has not got',fields('u16-4')[5].a));
  assert.equal(Core.matches('has got',fields('u16-4')[5].a),false);
  assert.ok(Core.matches('blond',fields('u1wb-v6')[7].a));
  assert.equal(fields('u13-7')[1].a,'blond');
  assert.equal(fields('u13-7')[12].a,'wavy');
});
test('private content cannot target other modules', () => {
  const { MaterialLib } = runtime();
  assert.throws(() => MaterialLib.validate({format:'panoramic-local-materials/v2',pages:[],audio:[],exercises:[{id:'u2o-2',blocks:[]}]}));
});

test('have got contractions do not accept is got or has tall', () => {
 const {Core} = runtime();
 assert.equal(Core.matches('is got',['has got','’s got']),false);
 assert.equal(Core.matches('he is got a dog',['he’s got a dog']),false);
 assert.equal(Core.matches('he has tall',['he’s tall']),false);
 assert.equal(Core.matches('he has got a dog',['he’s got a dog']),true);
 assert.equal(Core.matches('’s',['has','’s']),true);
 assert.equal(Core.matches('is',['has','’s']),false);
 assert.equal(Core.matches('’s',['is','’s']),true);
});
