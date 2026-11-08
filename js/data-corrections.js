/* Reviewed corrections. Page numbers refer to the supplied original edition. */
(function () {
  'use strict';
  const find = id => Object.values(LESSONS).flatMap(l => l.sections.flatMap(s => s.items)).find(it => it.id === id);
  const A = (...a) => ({ a });
  const S = (options, a) => ({ sel: options, a });
  const verified = {};
  function review(id, source) { verified[id] = source; }
  const opener = find('u1o-2');
  opener.inner = { type: 'multi', options: ['swimming', 'fishing', 'food', 'swimming pools', 'friends', 'swimming competitions', 'teaching', 'summer holidays'], answers: [0, 1, 4, 6] };
  opener.instruction = 'Track 01. Which things are important to David? Select the four things you hear.';
  opener.tutorNote = 'Ключ: 1, 2, 5, 7. Teacher’s Guide, печатная с.34.';
  opener.stateVersion = 2; review(opener.id, 'Teacher’s Guide p.34');
  const listen = find('u11-7'); listen.inner.paras[1][1].a = 'loud';
  listen.tutorNote = 'Ключ: shy, loud, outgoing. Teacher’s Guide p.35; оригинал Student Book p.13.';
  review(listen.id, 'Teacher’s Guide p.35');
  const pets = find('u15-2');
  pets.inner = { type: 'mcq', questions: ['B','C','A','C','B','C','B','A'].map((a,i)=>({q:String(i+1),options:['A','B','C'],a:'ABC'.indexOf(a)})) };
  pets.tutorNote = 'Ключ сверен с Teacher’s Guide p.39.'; pets.stateVersion = 3;
  review(pets.id, 'Teacher’s Guide p.39');
  const numbers = find('u15-3');
  numbers.inner = { type: 'gaps', numbered: true, paras: [[A('25'), ' per cent'], [A('8'), ' and a half million dogs'], [A('8'), ' million cats']] };
  numbers.tutorNote = 'Ключ: 25, 8, 8 (Teacher’s Guide p.39).'; numbers.stateVersion = 2;
  review(numbers.id, 'Teacher’s Guide p.39');
  // The supplied folder now includes the Workbook audio that the old data marked absent.
  for (const l of Object.values(LESSONS)) for (const s of l.sections) for (const it of s.items) {
    if (l.unit === 'u1' && it.audio && it.audio.track && /^(89|9[0-8])(?:[–-]\d+)?$/.test(it.audio.track)) delete it.audio.note;
  }
  find('u1wb-rv6').audio = { track: '92' };
  // Original photo is supplied by the private reader; remove the unrelated substitute illustration.
  find('u1o-0').html = '<p><b>Useful words:</b> swim in the sea · fish · underwater · goggles · a swimming club · bring people together</p>';
  for (const id of ['u11-2','u11-4','u11-5','u11-6','u11-9','u11-10','u11-11']) review(id, 'Teacher’s Guide pp.34–35');
  for (const id of ['u1wb-8']) {
    const it = find(id);
    it.items = it.paras.map(p => {
      const answers = p.find(seg => seg && seg.a).a;
      return { answers, tokens: answers[0].replace(/([?!.,])/g, ' $1').trim().split(/\s+/) };
    });
    it.type = 'sentence';
    review(id, 'Original Workbook pp.157 / 169: word order');
  }
  // Workbook primary keys checked against Teacher's Guide printed pp.119–122.
  const fields = it => (it.inner || it).paras.flat().filter(seg => seg && typeof seg === 'object' && seg.a != null);
  find('u1wb-v6').paras[7][1].a = ['blond'];
  fields(find('u1wb-r3'))[3].a.push('Good ideas.');
  fields(find('u1wb-rv2'))[5].a = ['outgoing'];
  fields(find('u1wb-rv2'))[6].a = ['friendly'];
  find('u1wb-8').items[2].answers.push('What days are your favourite?');
  find('u1wb-rv3').inner = {type:'gaps',numbered:true,paras:[
    ['Ex. 3: ', A('International Friendship Day', 'Friendship Day', 'International Friends Day', 'Friends Day')],
    ['Ex. 4 · 1 ', A('30th July', '30 July', 'It’s 30th July', 'It is 30th July')],
    ['Ex. 4 · 2 ', A('He’s caring', 'He is caring', 'caring')], ['Ex. 4 · 3 ', A('two', '2')],
    ['Ex. 4 · 4 ', A('loud people or places')], ['Ex. 4 · 5 ', A('their school grades', 'Kieran’s friends’ school grades', 'school grades')]]};
  find('u1wb-rv3').stateVersion = 2;
  delete find('u1wb-w7').model;
  find('u1wb-w7').prompts = ['Does Yuan agree with the quote? Explain using her post.'];
  find('u1wb-w7').tutorNote = 'Нет. Согласно ключу (TG p.120), Yuan не согласна: она разная в школе, дома и с друзьями.';
  for (const sec of LESSONS['u1-wb'].sections) for (const it of sec.items) review(it.id, 'Primary key / teacher-assessed task: TG pp.119–120');
  fields(find('u16-2'))[3].a = ['also'];
  fields(find('u16-4'))[5].a = ['hasn’t got','has not got'];
  fields(find('u13-7'))[1].a = 'blond';
  fields(find('u13-7'))[2].a = 'short';
  fields(find('u13-7'))[8].a = 'straight';
  fields(find('u13-7'))[12].a = 'wavy';
  fields(find('u13-7'))[14].a = 'medium-length';
  find('u13-7').tutorNote = 'Ключи описания четырёх фотографий сверены с Teacher’s Guide p.37.';
  const matching = find('u12-3'); matching.inner = {type:'match',left:['1','2','3','4','5'],right:'ABCDEFGH'.split(''),rightShort:'ABCDEFGH'.split(''),answers:[3,0,4,1,6]}; matching.stateVersion = 2;
  const degree = fields(find('u12-4')); ['quite','a bit','very','quite','really','very','really','very'].forEach((a,i)=>degree[i].a=[a]);
  const revision = find('u13-13'); revision.type = 'writing'; revision.min = 60; revision.max = 100; revision.checks = false; revision.stateVersion = 2;
  const self = find('u1wb-sa'); self.type = 'discuss'; self.prompts = self.cando; delete self.cando; self.stateVersion = 2;
  for (const l of Object.values(LESSONS).filter(l=>l.unit==='u1')) for (const sec of l.sections) for (const it of sec.items) {
    if (it.source !== 'added') review(it.id, /-wb$/.test(l.id) ? 'Teacher’s Guide pp.119–120' : /-gr$/.test(l.id) ? 'Teacher’s Guide p.115' : 'Teacher’s Guide pp.34–39');
  }
  find('u14-2').studentPrompt = 'What have Eddie and Dani got in common?';
  find('u13-12').referenceAnswer = 'u13-11';
  find('u13-13').draftFrom = 'u13-11';
  find('u13-14').referenceAnswer = 'u13-11';
  find('u1wb-w13').referenceAnswer = 'u1wb-w12';
  const phrase = find('u13-10'); phrase.left = ['Phrase 1','Phrase 2','Phrase 3','Phrase 4','Phrase 5','Phrase 6','Phrase 7']; phrase.answers = [0,0,0,1,2,2,3]; phrase.stateVersion = 2;
  window.MODULE1_CONTEXT_IDS = ["u1o-0", "u1o-2", "u1o-3", "u11-1", "u11-2", "u11-3", "u11-4", "u11-5", "u11-7", "u11-9", "u11-10", "u11-11", "u12-1", "u12-3", "u12-4", "u12-7", "u12-8", "u12-9", "u12-10", "u12-11", "u12-12", "u13-1", "u13-2", "u13-6", "u13-10", "u13-14", "u13-3", "u13-4", "u13-5", "u13-7", "u13-8", "u13-9", "u13-11", "u14-2", "u14-3", "u14-5", "u14-4", "u15-2", "u15-4", "u16-1", "u16-6", "u16-2", "u16-3", "u16-4", "u16-5", "u1g-2", "u1g-4", "u1g-6", "u15-1", "u15-5", "u1wb-1", "u1wb-2a", "u1wb-2b", "u1wb-2c", "u1wb-2d", "u1wb-2e", "u1wb-3", "u1wb-4", "u1wb-5", "u1wb-6", "u1wb-7", "u1wb-9", "u1wb-10", "u1wb-11", "u1wb-v2", "u1wb-v3", "u1wb-v5", "u1wb-v6", "u1wb-r1", "u1wb-r2", "u1wb-r3", "u1wb-rvp", "u1wb-rv1", "u1wb-rv2", "u1wb-rv3", "u1wb-rv5", "u1wb-rv6", "u1wb-med", "u1wb-w7", "u1wb-w8", "u1wb-w9", "u1wb-w10", "u1wb-w12", "u11-8", "u1g-3", "u1wb-v1", "u15-3", "u12-6"];
  find('u1wb-r3').maxAnswerWords = 4;
  find('u1wb-rv3').maxAnswerWords = 4;
  find('u1o-0').instruction = 'Look at David’s photo. Where is he? What is he doing? What can you see around him?';
  find('u1wb-v6').instruction = 'Complete the words in Claudia’s blog. The first letters are shown in brackets.';
  window.CONTENT_REVIEW = verified;
})();
