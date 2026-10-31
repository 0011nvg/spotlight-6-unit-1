/* =========================================================
   PANORAMIC A2 · UNIT 3 "Daily life"
   Student Book pp.31–40 · Grammar Practice p.137 · Workbook pp.168–173
   Формат «лист ответов»: тексты учебника не копируются — ученик работает по книге.
   ========================================================= */
BOOK.units.push({
  id: 'u3', num: 3, title: 'Daily life', pages: '31–40 · 137 · 168–173',
  skills: [
    ['Listening', 'Recognising and understanding contrast linking words'], ['Reading', 'Recognising linking words for addition'],
    ['Writing', 'Punctuation and capital letters'], ['Speaking', 'Describing a place'],
    ['Grammar', 'there is / there are; Present simple; Adverbs and expressions of frequency'],
    ['Vocabulary', 'Rooms in a house; Furniture; Chores']
  ],
  lessons: ['u3-opener', 'u3-1', 'u3-2', 'u3-3', 'u3-4', 'u3-5', 'u3-6', 'u3-gr', 'u3-wb'],
  pending: []
});

(function () {
  const A = (...a) => ({ a });
  const S = (opts, a) => ({ sel: opts, a });
  const N = () => ({ n: 1 });
  const AB = ['A', 'B'], ABC = ['A', 'B', 'C'], ABCD = ['A', 'B', 'C', 'D'];
  const TF = ['T', 'F'];
  const AUDIO = t => ({ track: t });
  const sels = (opts, keys) => keys.map(k => ['', S(opts, k)]);
  const ins = keys => keys.map(k => ['', A(...[].concat(k))]);
  const ROOMS = ['attic', 'basement', 'bathroom', 'bedroom', 'dining room', 'downstairs', 'hall', 'kitchen', 'living room', 'study', 'toilet', 'upstairs'];
  const FREQ = ['always', 'usually', 'often', 'sometimes', 'hardly ever', 'never'];

  /* ---------------- OPENER · p.31 ---------------- */
  LESSONS['u3-opener'] = {
    id: 'u3-opener', unit: 'u3', code: '3.0', title: 'Daily life', kicker: 'Unit opener', pages: '31', accent: 'yellow', time: '15–20 min',
    goal: 'Talk about routines and rest.',
    sections: [{ id: 'book', title: 'Textbook exercises · p.31', items: [
      { id: 'u3o-1', page: 31, num: '1', tags: ['THINK'], type: 'multi', core: true, free: true, answers: [], instruction: 'Tick the routines you have. Discuss them with your tutor.',
        options: ['a homework routine', 'an exercise routine', 'a chores routine', 'a morning routine'] },
      { id: 'u3o-2', page: 31, num: '2', tags: ['WATCH', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('19'),
        instruction: 'Track 19. Choose the correct alternative (1–4).',
        inner: { type: 'gaps', numbered: true, answers: null, paras: [['', N()], ['', N()], ['', N()], ['', N()]] },
        tutorNote: 'Трек 19 в присланном комплекте не было — ученик выбирает вариант, преподаватель проверяет по записи.' },
      { id: 'u3o-3', page: 31, num: '3', tags: ['SPEAK'], type: 'discuss', core: true, instruction: 'How important is rest to you? Is your bedtime the same every day? Why or why not?' }
    ]}]
  };

  /* ---------------- 3.1 LISTENING · A student house · pp.32–33 ---------------- */
  LESSONS['u3-1'] = {
    id: 'u3-1', unit: 'u3', code: '3.1', title: 'A student house', kicker: 'Listening', pages: '32–33', accent: 'blue', time: '2 × 45 min',
    goal: 'Rooms in a house. there is / there are, some / any. Contrast linkers but / however.',
    split: 'Занятие 1: упр. 1–8. Занятие 2: упр. 9–12, Viewpoints.',
    sections: [
      { id: 'warm', title: 'Warm-up', items: [
        { id: 'u31-1', page: 32, num: '1', tags: ['THINK'], type: 'discuss', core: true, instruction: 'Look at the advert. Are there shared student houses in your country? Are they a good idea? Why or why not?' }
      ]},
      { id: 'book', title: 'Textbook exercises · pp.32–33', items: [
        { id: 'u31-2', page: 32, num: '2', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Read the property details. Label the floor plan (1–12) with the highlighted words.',
          numbered: true, paras: ROOMS.length && [['', S(ROOMS, 'basement')], ['', S(ROOMS, 'downstairs')], ['', S(ROOMS, 'upstairs')], ['', S(ROOMS, 'attic')], ['', S(ROOMS, 'hall')], ['', S(ROOMS, 'living room')],
            ['', S(ROOMS, 'study')], ['', S(ROOMS, 'kitchen')], ['', S(ROOMS, 'dining room')], ['', S(ROOMS, 'toilet')], ['', S(ROOMS, 'bedroom')], ['', S(ROOMS, 'bathroom')]],
          hint: '2 и 3 — лестницы: вниз в подвал и вверх на второй этаж.', links: [['See Vocabulary p.170', 'u3-wb', 'u3wb-v1']] },
        { id: 'u31-3', page: 32, num: '3', tags: ['SPEAK'], type: 'discuss', core: true, instruction: 'Draw a floor plan of your home (real or dream) and label the rooms. Compare with your tutor.' },
        { id: 'u31-4', page: 32, num: '4', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Grammar in context: there is / there are. Match rules 1–4 to A–D.', numbered: true,
          paras: sels(ABCD, ['C', 'A', 'B', 'D']), links: [['Grammar Practice p.137', 'u3-gr', 'u3g-1'], ['Grammar Use p.168', 'u3-wb', 'u3wb-1']] },
        { id: 'u31-5', page: 32, num: '5', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Complete Zac and Mum’s conversation with the correct form of there is / there are (1–8).', numbered: true,
          paras: ins([['There’s', 'There is'], 'Are there', ['there aren’t', 'there are not'], 'are there', 'There are', 'Is there', ['There isn’t', 'There is not', 'There’s not'], 'There are']) },
        { id: 'u31-6', page: 33, num: '6', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Choose the correct alternative.', numbered: true,
          explanation: 'GET IT RIGHT! some — в утверждениях (мн. ч. и неисчисляемые); any — в отрицаниях и вопросах.',
          paras: [['', S(['some', 'any'], 'some')], ['', S(['an', 'any'], 'an')], ['', S(['some', 'a'], 'a')], ['', S(['some', 'any'], 'any')], ['', S(['a', 'any'], 'a')], ['', S(['some', 'any'], 'any')]] },
        { id: 'u31-7', page: 33, num: '7', tags: ['SPEAK'], type: 'discuss', core: true, instruction: 'Describe your home. Use there is / there are and some / any. What have your homes got in common?' },
        { id: 'u31-8', page: 33, num: '8', tags: ['PRONUNCIATION'], type: 'listen', core: true, audio: AUDIO('20'),
          boxes: [{ title: 'PRONUNCIATION · Linking', html: '<p>We link the <i>s</i> in <i>there’s a</i> and the second <i>r</i> in <i>there are</i>: /ðeəzə/, /ðeərə/.</p>' }],
          instruction: 'Track 20. Listen. Then read the conversation in Ex. 5 aloud with your tutor.', inner: { type: 'open', questions: ['Read Ex. 5 aloud. Link there’s a / there are.'] } },
        { id: 'u31-9', page: 33, num: '9', tags: ['LISTEN'], type: 'listen', core: true, audio: AUDIO('21'),
          instruction: 'Track 21. Amelie describes Zac’s new house. True (T), false (F) or not given (NG)?',
          inner: { type: 'gaps', numbered: true, answers: null, paras: [['', N()], ['', N()], ['', N()], ['', N()]] }, tutorNote: 'Трек 21 в комплекте не было — проверка преподавателем.' },
        { id: 'u31-10', page: 33, num: '10', tags: ['P', 'I', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('21'),
          instruction: 'Track 21 again. Write one or two words, or a number, or a time (1–6).',
          inner: { type: 'gaps', numbered: true, answers: null, paras: [['', N()], ['', N()], ['', N()], ['', N()], ['', N()], ['', N()]] } },
        { id: 'u31-vp', page: 33, num: 'VP', tags: ['VIEWPOINTS'], type: 'discuss', core: true, instruction: 'What is the right age to leave home? Why?' },
        { id: 'u31-11', page: 33, num: '11', tags: ['SKILL'], type: 'gaps', core: true, instruction: 'Match contrasting ideas 1–4 to A–D. Then choose but or however.',
          boxes: [{ title: 'LISTENING SKILL · Contrast linking words', html: '<p><b>but</b> goes in the middle of a sentence. <b>However</b> usually goes at the beginning, with a comma after it.</p>' }],
          noNums: true, paras: [['**1** → ', S(ABCD, 'B'), ' ', S(['but', 'However,'], 'However,')], ['**2** → ', S(ABCD, 'A'), ' ', S(['but', 'However,'], 'but')], ['**3** → ', S(ABCD, 'D'), ' ', S(['but', 'However,'], 'but')], ['**4** → ', S(ABCD, 'C'), ' ', S(['but', 'However,'], 'However,')]],
          hint: 'Предложение кончается точкой → However. Запятой → but.' },
        { id: 'u31-12', page: 33, num: '12', tags: ['COMMUNICATION'], type: 'discuss', core: true, instruction: 'One of you is Zac, the other is Amelie. Discuss the house, giving different opinions. Use but and however.' }
      ]},
      { id: 'oge', title: 'OGE Practice — Exam Skills', items: [
        { id: 'u31-oge1', source: 'added', oge: 'builder', type: 'gaps', core: false, title: 'Exam Skills Builder · Grammar transformation',
          instruction: 'Change the word in capitals so that it fits the gap.', ogeNote: 'Авторское задание в формате ОГЭ. Не из банка ФИПИ.', heading: 'Our new flat', numbered: true,
          paras: [['There ', A('are'), ' three bedrooms in our new flat. — BE'], ['My sister ', A('has'), ' got the biggest one. — HAVE'], ['There ', A('isn’t', 'is not'), ' a garden, but there is a balcony. — NOT BE'],
            ['Dad ', A('cooks'), ' dinner every evening. — COOK'], ['We ', A('don’t', 'do not'), ' watch TV in the kitchen. — NOT DO'], ['It is ', A('bigger'), ' than our old flat. — BIG']] }
      ]},
      { id: 'review', title: 'Lesson review', items: [
        { id: 'u31-r', source: 'added', type: 'review', core: true, cando: ['I can name 12 rooms and places in a house.', 'I can use there is / there are with some / any.', 'I can connect ideas with but and however.'] }
      ]}
    ]
  };

  /* ---------------- 3.2 READING · We live on a boat · pp.34–35 ---------------- */
  const FURN = ['armchair', 'bookcase', 'carpet', 'cooker', 'fridge', 'lamp', 'sink', 'sofa', 'washing machine'];
  LESSONS['u3-2'] = {
    id: 'u3-2', unit: 'u3', code: '3.2', title: 'We live on a boat', kicker: 'Reading', pages: '34–35', accent: 'pink', time: '2 × 45 min', sdg: '11 Sustainable cities and communities',
    goal: 'Furniture. Linking words for addition. Present simple.',
    sections: [
      { id: 'warm', title: 'Warm-up', items: [
        { id: 'u32-1', page: 34, num: '1', tags: ['CITIZENSHIP', 'THINK'], type: 'discuss', core: true, instruction: 'What makes a house a home?' }
      ]},
      { id: 'book', title: 'Textbook exercises · pp.34–35', items: [
        { id: 'u32-2', page: 34, num: '2', tags: ['READ', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('22'),
          instruction: 'Track 22. Why do you think some people live on houseboats? Read and listen to check.',
          inner: { type: 'open', questions: ['Why do people live on houseboats?'], key: ['Homes in Hong Kong are small and expensive; a houseboat doesn’t cost a lot and has a lot of space.'] } },
        { id: 'u32-3', page: 34, num: '3', tags: ['I', 'READ'], type: 'gaps', core: true, instruction: 'True (T) or false (F)? Then write the first four words of the sentence that supports your answer.', numbered: true,
          paras: [['', S(TF, 'T'), ' ', A('Some people sleep with')], ['', S(TF, 'T'), ' ', A('It doesn’t cost a')], ['', S(TF, 'F'), ' ', A('In addition, it’s quiet,', 'In addition it’s quiet')],
            ['', S(TF, 'T'), ' ', A('It doesn’t cost a', 'I love our boat,', 'Our living room is also', 'I love our boat')], ['', S(TF, 'F'), ' ', A('However, a lot of', 'However a lot of')]],
          tutorNote: 'Пункт 4: принимаются три опорных предложения (a lot of space / big kitchen / big living room).' },
        { id: 'u32-4', page: 34, num: '4', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Match the words to 1–9 in the pictures.', bank: FURN, uniqueBank: true, numbered: true,
          paras: ins(['lamp', 'sofa', 'bookcase', 'armchair', 'carpet', 'washing machine', 'cooker', 'sink', 'fridge']), links: [['See Vocabulary p.170', 'u3-wb', 'u3wb-v3']] },
        { id: 'u32-5', page: 34, num: '5', tags: ['SPEAK'], type: 'discuss', core: true, instruction: 'Talk about what there is and isn’t in the different rooms in your house.' },
        { id: 'u32-6', page: 35, num: '6', tags: ['SKILL'], type: 'gaps', core: true, instruction: 'Read the Reading skill. Choose the correct alternative (1–5).',
          boxes: [{ title: 'READING SKILL · Linking words for addition', html: '<p><b>also</b> (after be, between have and got, before other verbs) · <b>In addition,</b> (start of a sentence) · <b>and</b>, <b>as well as</b> (two ideas in one sentence).</p>' }],
          numbered: true, paras: [['', S(['And', 'As well as', 'In addition'], 'In addition')], ['', S(['also', 'as well as', 'in addition'], 'as well as')], ['', S(['also', 'and', 'in addition'], 'also')], ['', S(['also', 'as well as', 'and'], 'and')], ['', S(['also', 'and', 'as well as'], 'also')]] },
        { id: 'u32-7', page: 35, num: '7', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Grammar in context: Present simple. Label the example sentences routine, habit or fact.', noNums: true,
          paras: [['Mum spends a lot of time in there. ', S(['routine', 'habit', 'fact'], 'habit')], ['I walk to school every day. ', S(['routine', 'habit', 'fact'], 'routine')], ['It doesn’t cost a lot of money. ', S(['routine', 'habit', 'fact'], 'fact')], ['Most families don’t live on houseboats. ', S(['routine', 'habit', 'fact'], 'fact')]],
          links: [['Grammar Practice p.137', 'u3-gr', 'u3g-3'], ['Grammar Use pp.168–169', 'u3-wb', 'u3wb-5']] },
        { id: 'u32-8', page: 35, num: '8', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Complete Anthony’s conversation with the words in the box (1–11).',
          bank: ['doesn’t want', 'don’t spend', 'do they like', 'do you do', 'go', 'invite', 'live', 'love', 'play', 'watches', 'works'], uniqueBank: true, numbered: true,
          paras: ins(['live', 'go', 'works', ['Do they like', 'do they like'], 'love', 'doesn’t want', 'do you do', 'watches', 'play', 'invite', 'don’t spend']) },
        { id: 'u32-9', page: 35, num: '9', type: 'gaps', core: true, instruction: 'Complete your questions to Anthony’s parents (1–4).', numbered: true,
          paras: [['Why ', A('do you live'), ' on a boat?'], ['', A('Does Anthony like', 'Does he like'), ' the boat?'], ['Where ', A('do you relax'), ' in the evenings?'], ['What ', A('does Anthony do', 'does he do'), ' after school?']] },
        { id: 'u32-10', page: 35, num: '10', tags: ['MEDIATION', 'WRITE'], type: 'writing', core: true, min: 25, max: 50, checks: false, instruction: 'Imagine you live on a houseboat with your family. Write a short blog post (30 words) about the boat and your life on it.' },
        { id: 'u32-vp', page: 35, num: 'VP', tags: ['VIEWPOINTS'], type: 'discuss', core: true, instruction: '“There’s no place like home.” What does a happy home mean for you?' }
      ]},
      { id: 'review', title: 'Lesson review', items: [
        { id: 'u32-r', source: 'added', type: 'review', core: true, cando: ['I can name 9 pieces of furniture.', 'I can use also, and, as well as, in addition.', 'I can talk about routines, habits and facts in the Present simple.'] }
      ]}
    ]
  };

  /* ---------------- 3.3 WRITING · How often do you do chores? · pp.36–37 ---------------- */
  LESSONS['u3-3'] = {
    id: 'u3-3', unit: 'u3', code: '3.3', title: 'How often do you do chores?', kicker: 'Writing', pages: '36–37', accent: 'yellow', time: '2 × 45 min', sdg: '10 Reduced inequalities',
    goal: 'Chores. Adverbs and expressions of frequency. Punctuation and capital letters. Write a survey report.',
    split: 'Занятие 1: упр. 1–7. Занятие 2: упр. 8–13.',
    sections: [
      { id: 'warm', title: 'Warm-up', items: [
        { id: 'u33-1', page: 36, num: '1', tags: ['THINK'], type: 'discuss', core: true, instruction: 'Look at the pictures of chores. How do they make you feel?' }
      ]},
      { id: 'book', title: 'Textbook exercises · pp.36–37', items: [
        { id: 'u33-2', page: 36, num: '2', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Match chores 1–9 in Lena’s mum’s list to pictures A–I.', noNums: true,
          paras: [['**1** vacuum the carpet ', S('ABCDEFGHI'.split(''), 'C')], ['**2** empty the rubbish bin ', S('ABCDEFGHI'.split(''), 'B')], ['**3** do the washing-up ', S('ABCDEFGHI'.split(''), 'D')], ['**4** go to the supermarket ', S('ABCDEFGHI'.split(''), 'E')],
            ['**5** cook dinner ', S('ABCDEFGHI'.split(''), 'I')], ['**6** clean the bathroom ', S('ABCDEFGHI'.split(''), 'G')], ['**7** make your bed ', S('ABCDEFGHI'.split(''), 'H')], ['**8** fold your clothes ', S('ABCDEFGHI'.split(''), 'A')], ['**9** tidy your room ', S('ABCDEFGHI'.split(''), 'F')]],
          links: [['See Vocabulary p.170', 'u3-wb', 'u3wb-v4']] },
        { id: 'u33-3', page: 36, num: '3', type: 'gaps', core: true, instruction: 'Look at Lena’s bar graph. Answer the questions.', numbered: true,
          paras: [['', A('10', 'ten', 'ten people')], ['', A('tidy your room', 'tidy their room', 'tidy their rooms', 'tidying the room')], ['', A('vacuum the carpet', 'vacuuming', 'vacuum')]] },
        { id: 'u33-4', page: 36, num: '4', type: 'gaps', core: true, instruction: 'Look at the bar graph again. Complete Lena’s report with the correct numbers (1–5).', numbered: true,
          paras: ins([['3', 'three'], ['8', 'eight'], ['6', 'six'], ['4', 'four'], ['1', 'one']]) },
        { id: 'u33-idiom', page: 36, num: 'ID', tags: ['VOCABULARY'], type: 'mcq', core: true, instruction: 'Incredible idiom: once in a blue moon means…', questions: [{ q: 'once in a blue moon', options: ['A very rarely', 'B when the moon is blue'], a: 0 }] },
        { id: 'u33-vp', page: 36, num: 'VP', tags: ['VIEWPOINTS'], type: 'multi', core: true, free: true, answers: [], instruction: 'Which chores in Ex. 1 do you do?',
          options: ['vacuum the carpet', 'empty the rubbish bin', 'do the washing-up', 'go to the supermarket', 'cook dinner', 'clean the bathroom', 'make your bed', 'fold your clothes', 'tidy your room'] },
        { id: 'u33-5', page: 37, num: '5', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Grammar in context: complete the chart (100% → 0%) with the six adverbs of frequency.', numbered: true,
          bank: FREQ, uniqueBank: true, paras: ins(FREQ), links: [['Grammar Practice p.137', 'u3-gr', 'u3g-5'], ['Grammar Use p.169', 'u3-wb', 'u3wb-9']] },
        { id: 'u33-6', page: 37, num: '6', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Choose the correct alternative (1–4).', numbered: true,
          paras: [['', S(['sometimes', 'never'], 'never')], ['', S(['never', 'usually'], 'usually')], ['', S(['hardly ever', 'often'], 'hardly ever')], ['', S(['hardly ever', 'usually'], 'usually')]] },
        { id: 'u33-7', page: 37, num: '7', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Replace the bold phrases with an expression of frequency (1–5).', numbered: true,
          paras: ins([['once a week', 'every week'], 'every day', 'twice a day', 'three times a week', ['once a year', 'every year']]) },
        { id: 'u33-8', page: 37, num: '8', tags: ['SKILL'], type: 'gaps', core: true, instruction: 'Read the Writing skill. Rewrite the sentences with correct punctuation and capital letters.',
          boxes: [{ title: 'WRITING SKILL · Punctuation and capital letters', html: '<p>Full stop (.) at the end of statements · commas (,) in lists · exclamation marks (!) for emphasis · capital letters: start of a sentence, <i>I</i>, days, months, names of people and places.</p>' }],
          numbered: true, paras: [['', A('Every Saturday, Simon tidies his room, makes his bed and folds his clothes.', 'Every Saturday Simon tidies his room, makes his bed and folds his clothes.', 'Every Saturday, Simon tidies his room, makes his bed, and folds his clothes.')],
            ['', A('Some students never cook a meal. I think that’s terrible!', 'Some students never cook a meal. I think that’s terrible.', 'Some students never cook a meal! I think that’s terrible!')]],
          tutorNote: 'Регистр здесь важен, но автопроверка регистр не учитывает — проверьте заглавные буквы глазами.' },
        { id: 'u33-9', page: 37, num: '9', tags: ['SPEAK'], type: 'discuss', core: true, instruction: 'Do a mini-survey: choose four chores and ask 5–10 people (family, friends) how often they do them. Draw a bar graph.',
          adapted: 'В учебнике — опрос в группе. У нас — опрос дома или среди друзей как домашнее задание.' },
        { id: 'u33-10', page: 37, num: '10', type: 'multi', core: true, instruction: 'Which Key phrases does Lena use in her report? Tap them.',
          options: ['My survey is about…', 'There are … people in the survey.', 'Their answers explain…', 'The results for…', 'My survey shows that…', 'Also, it shows that…', 'Finally, it shows that…'], answers: [0, 1, 2, 3, 4, 5, 6],
          explanation: 'Лена использует все ключевые фразы.' },
        { id: 'u33-11', page: 37, num: '11', tags: ['WRITE'], type: 'writing', core: true, min: 100, max: 140, instruction: 'Write a report about your survey (about 120 words).',
          plan: ['Paragraph 1: introduction', 'Paragraph 2: the survey results', 'Paragraph 3: summary'] },
        { id: 'u33-12', page: 37, num: '12', tags: ['CHECK & REFLECT'], type: 'checklist', core: true, instruction: 'Check your report.', items: ['Did I use punctuation and capital letters correctly?', 'Did I use adverbs and expressions of frequency?'] },
        { id: 'u33-13', page: 37, num: '13', tags: ['MEDIATION'], type: 'discuss', core: true, instruction: 'Study your tutor’s graph and report. Summarise the questions and results.' }
      ]},
      { id: 'review', title: 'Lesson review', items: [
        { id: 'u33-r', source: 'added', type: 'review', core: true, cando: ['I can name 9 chores.', 'I can put always / usually / often / sometimes / hardly ever / never in order.', 'I can use capital letters and punctuation correctly.'] }
      ]}
    ]
  };

  /* ---------------- 3.4 SPEAKING · My ideal home · p.38 ---------------- */
  LESSONS['u3-4'] = {
    id: 'u3-4', unit: 'u3', code: '3.4', title: 'My ideal home', kicker: 'Speaking', pages: '38', accent: 'blue', time: '45 min',
    goal: 'Describe a place: have got, there is / are, strong adjectives, prepositions of place.',
    sections: [
      { id: 'book', title: 'Textbook exercises · p.38', items: [
        { id: 'u34-1', page: 38, num: '1', tags: ['THINK'], type: 'gaps', core: true, instruction: 'Imagine you’re a celebrity. Make notes.', noNums: true,
          paras: [['My name: ', { open: true }], ['Why I’m famous: ', { open: true }], ['My home: ', { open: true }]] },
        { id: 'u34-2', page: 38, num: '2', tags: ['WATCH', 'LISTEN', 'READ'], type: 'listen', core: true, audio: AUDIO('23'),
          instruction: 'Track 23 (or read Eddie’s presentation on p.38). Which room does he hardly ever use?',
          inner: { type: 'gaps', paras: [['He hardly ever uses the ', A('kitchen'), '.']] } },
        { id: 'u34-3', page: 38, num: '3', tags: ['WATCH', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('23'),
          instruction: 'Track 23 again. Complete the sentences with the missing words.', numbered: true,
          inner: { type: 'gaps', numbered: true, paras: [['', A('outside', 'next to', 'behind')], ['', A('basement')], ['', A('armchairs', 'an armchair')], ['', A('five'), ' · ', A('five', 'their own')]] },
          tutorNote: 'Пункт 1 зависит от формулировки на слух (outside / next to) — обе приняты.' },
        { id: 'u34-4', page: 38, num: '4', tags: ['SKILL'], type: 'discuss', core: true, instruction: 'Read the Speaking skill. Use some of the phrases to describe your dream home from Ex. 1.',
          boxes: [{ title: 'SPEAKING SKILL · Describing a place', html: '<p>have got / there is / there are · strong adjectives: <i>massive, enormous, beautiful, amazing</i> · prepositions: <i>next to, opposite, behind, in, on, in front of</i>.</p>' }] },
        { id: 'u34-5', page: 38, num: '5', tags: ['KEY PHRASES'], type: 'gaps', core: true, instruction: 'Find the Key phrases in Eddie’s presentation. Mark each: list rooms (L), introduce (I) or end (E).', noNums: true,
          paras: [['Hi! I’m… and I’m a… ', S(['L', 'I', 'E'], 'I')], ['I’d like to tell you about… ', S(['L', 'I', 'E'], 'I')], ['When you go (outside), you see… ', S(['L', 'I', 'E'], 'L')], ['Next, I want to talk about… ', S(['L', 'I', 'E'], 'L')],
            ['Thank you for listening to my presentation. ', S(['L', 'I', 'E'], 'E')], ['Have you got any questions? ', S(['L', 'I', 'E'], 'E')]] },
        { id: 'u34-6', page: 38, num: '6', tags: ['EMPLOYABILITY', 'SPEAK'], type: 'discuss', core: true, instruction: 'Give a presentation about your dream home. Draw a floor plan or find photos. Invite questions.' }
      ]},
      { id: 'review', title: 'Lesson review', items: [
        { id: 'u34-r', source: 'added', type: 'review', core: true, cando: ['I can describe a home with there is / are and have got.', 'I can use strong adjectives and prepositions of place.', 'I can start and finish a presentation.'] }
      ]}
    ]
  };

  /* ---------------- 3.5 CULTURE · Lazy teenagers? · p.39 ---------------- */
  LESSONS['u3-5'] = {
    id: 'u3-5', unit: 'u3', code: '3.5', title: 'Lazy teenagers?', kicker: 'Culture', pages: '39', accent: 'orange', time: '45 min',
    goal: 'Teenagers and chores in the UK.',
    sections: [{ id: 'book', title: 'Textbook exercises · p.39', items: [
      { id: 'u35-1', page: 39, num: '1', tags: ['THINK'], type: 'discuss', core: true, instruction: 'How many chores can you think of in a minute? How often do you do them? Rank yourself from 1 (very good at) to 5 (very bad at).' },
      { id: 'u35-2', page: 39, num: '2', tags: ['WATCH', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('24'), instruction: 'Track 24. Answer the questions.',
        inner: { type: 'open', questions: ['Which chores on your list does Millie do?', 'Does she do any chores that aren’t on your list?', 'Do you think Millie is lazy? Why or why not?'] } },
      { id: 'u35-3', page: 39, num: '3', tags: ['WATCH', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('24'), instruction: 'Track 24 again. Choose A, B or C (1–6).',
        inner: { type: 'gaps', numbered: true, answers: null, paras: [1, 2, 3, 4, 5, 6].map(() => ['', N()]) }, tutorNote: 'Трек 24 в комплекте не было — проверка преподавателем.' },
      { id: 'u35-4', page: 39, num: '4', type: 'gaps', core: true, instruction: 'Complete the summary with the words (1–9).',
        bank: ['bed', 'cooker', 'does', 'downstairs', 'love', 'makes', 'studies', 'takes', 'upstairs'], uniqueBank: true, numbered: true,
        paras: ins(['downstairs', 'makes', 'upstairs', 'bed', 'cooker', 'love', 'does', 'takes', 'studies']) },
      { id: 'u35-5', page: 39, num: '5', tags: ['CITIZENSHIP', 'SPEAK'], type: 'discuss', core: true, instruction: 'Answer the questions.',
        prompts: ['Is it easy to find time for homework, hobbies and chores? How do you do it?', 'Is it a good idea for parents to give young people money for doing chores?', 'What ideas are there about young people in your country? Do you agree?'] },
      { id: 'u35-6', page: 39, num: '6', tags: ['WRITE', 'REAL WORLD'], type: 'writing', core: true, min: 40, max: 100, checks: false,
        instruction: 'Choose four chores that you are bad at or don’t like. Find out how to do them well and how to make them fun. Make a poster with your tips.' }
    ]}]
  };

  /* ---------------- 3.6 REVIEW · p.40 ---------------- */
  LESSONS['u3-6'] = {
    id: 'u3-6', unit: 'u3', code: '3.6', title: 'Review', kicker: 'Review', pages: '40', accent: 'pink', time: '45 min',
    goal: 'Revise Unit 3.',
    sections: [{ id: 'book', title: 'Textbook exercises · p.40', items: [
      { id: 'u36-1', page: 40, num: '1', tags: ['CITIZENSHIP', 'P'], type: 'mcq', core: true, instruction: 'For each gap 1–6 choose A, B, C or D.',
        questions: [{ q: '1', options: ABCD, a: 0 }, { q: '2', options: ABCD, a: 2 }, { q: '3', options: ABCD, a: 2 }, { q: '4', options: ABCD, a: 3 }, { q: '5', options: ABCD, a: 1 }, { q: '6', options: ABCD, a: 2 }],
        explanation: '1 there aren’t · 2 don’t want · 3 goes · 4 cook · 5 kitchen · 6 carpets.' },
      { id: 'u36-2', page: 40, num: '2', tags: ['P'], type: 'gaps', core: true, instruction: 'Write one word for each gap (1–6).', numbered: true,
        paras: [['', A('Every', 'On')], ['', A('empty')], ['', A('too')], ['', A('always', 'usually')], ['', A('also', 'always', 'usually')], ['', A('tidy', 'clean')]] },
      { id: 'u36-3', page: 40, num: '3', type: 'gaps', core: true, instruction: 'Match the sentence halves.', numbered: true, paras: sels(['A', 'B', 'C', 'D', 'E'], ['B', 'E', 'A', 'C', 'D']) },
      { id: 'u36-4', page: 40, num: '4', type: 'gaps', core: true, instruction: 'Write sentences with there is / there are.', numbered: true,
        paras: [['', A('There are two armchairs in the living room.')], ['', A('There isn’t any space in the fridge.', 'There is no space in the fridge.', 'There’s no space in the fridge.')],
          ['', A('There aren’t any armchairs in the living room.', 'There are no armchairs in the living room.')], ['', A('There is a small cooker in the kitchen.', 'There’s a small cooker in the kitchen.')]] },
      { id: 'u36-5', page: 40, num: '5', type: 'gaps', core: true, instruction: 'Match the prompts to the adverbs of frequency. Then write sentences in the Present simple.', numbered: true,
        paras: [1, 2, 3, 4].map(() => ['', { open: true }]), tutorNote: 'Сочетания ученик выбирает сам; проверьте место наречия и окончание -s.' },
      { id: 'u36-6', page: 40, num: '6', tags: ['SPEAK'], type: 'discuss', core: true, instruction: 'Read the Quick quote. Do you agree? Give reasons.' },
      { id: 'u36-7', page: 40, num: '7', tags: ['COMMUNICATION'], type: 'discuss', core: true, instruction: 'You are looking for an unusual holiday home and you see the bus from Ex. 1. Ask and answer questions about it and decide if you want to stay in it.' },
      { id: 'u36-8', page: 40, num: '8', tags: ['LOOK BACK'], type: 'discuss', core: true, instruction: 'Answer the Look back questions.',
        prompts: ['Which grammar point would you like to practise further?', 'Which lesson did you enjoy most? Why?', 'When do you use capital letters?', 'What adjectives do you use to describe your dream home?'] }
    ]}]
  };

  /* ---------------- GRAMMAR PRACTICE · p.137 ---------------- */
  LESSONS['u3-gr'] = {
    id: 'u3-gr', unit: 'u3', code: 'GR', title: 'Grammar Practice', kicker: 'Grammar', pages: '137', accent: 'navy', time: '30–45 min',
    goal: 'there is / there are; Present simple; adverbs of frequency.',
    sections: [{ id: 'book', title: 'Grammar Practice · p.137', items: [
      { id: 'u3g-1', page: 137, num: '1', type: 'gaps', core: true, instruction: 'Choose the correct alternatives.', noNums: true,
        paras: [['**1** ', S(['isn’t', 'aren’t'], 'isn’t')], ['**2** ', S(['Is', 'Are'], 'Are'), ' · ', S(['isn’t', 'aren’t'], 'aren’t')], ['**3** ', S(['isn’t', 'aren’t'], 'aren’t')], ['**4** ', S(['Is', 'Are'], 'Is'), ' · ', S(['is', 'are'], 'is')], ['**5** ', S(['is', 'are'], 'is')], ['**6** ', S(['is', 'are'], 'are')]] },
      { id: 'u3g-2', page: 137, num: '2', type: 'gaps', core: true, instruction: 'Are the sentences correct? Write yes or no.', numbered: true, paras: sels(['yes', 'no'], ['yes', 'no', 'yes', 'yes', 'no', 'no']) },
      { id: 'u3g-3', page: 137, num: '3', type: 'gaps', core: true, instruction: 'Complete the table (1–8).', bank: ['Do', 'do', 'Does', 'doesn’t', 'doesn’t', 'don’t', 'live', 'lives'], numbered: true,
        paras: ins(['live', 'lives', 'don’t', 'doesn’t', 'Do', 'Does', 'do', 'doesn’t']) },
      { id: 'u3g-4', page: 137, num: '4', type: 'gaps', core: true, instruction: 'Correct the incorrect sentences. Two are correct — write “correct”.', numbered: true,
        paras: [['', A('Does Tobias walk to school every day?')], ['', A('We play Xbox every Friday night.')], ['', A('My cat likes this food, but it doesn’t like that food.')], ['', A('Do you live in a shared house? Yes, I do.')],
          ['', A('correct')], ['', A('I don’t want that room.')], ['', A('correct')], ['', A('They watch TV in the living room together.')]] },
      { id: 'u3g-5', page: 137, num: '5', type: 'gaps', core: true, instruction: 'Match the adverbs of frequency (A–F) to the percentages.', noNums: true,
        paras: [['100% ', S('ABCDEF'.split(''), 'A')], ['90% ', S('ABCDEF'.split(''), 'F')], ['80% ', S('ABCDEF'.split(''), 'D')], ['50% ', S('ABCDEF'.split(''), 'E')], ['20% ', S('ABCDEF'.split(''), 'B')], ['0% ', S('ABCDEF'.split(''), 'C')]] },
      { id: 'u3g-6', page: 137, num: '6', type: 'gaps', core: true, instruction: 'Choose the correct alternatives in Jeremy’s homework (1–8).', numbered: true,
        paras: [['', S(['hardly ever', 'usually'], 'usually')], ['', S(['every day', 'twice a month'], 'every day')], ['', S(['Once', 'Three times'], 'Three times')], ['', S(['hardly ever', 'often'], 'often')],
          ['', S(['never', 'sometimes'], 'sometimes')], ['', S(['once', 'several times'], 'several times')], ['', S(['never', 'often'], 'never')], ['', S(['always', 'hardly ever'], 'always')]] }
    ]}]
  };

  /* ---------------- WORKBOOK · pp.168–173 ---------------- */
  LESSONS['u3-wb'] = {
    id: 'u3-wb', unit: 'u3', code: 'WB', title: 'Workbook', kicker: 'Workbook', pages: '168–173', accent: 'green', time: 'дом. задание',
    goal: 'Grammar Use, Vocabulary, Reading, Review, Writing — Unit 3.',
    sections: [
      { id: 'gram', title: 'Grammar Practice: Use · pp.168–169', items: [
        { id: 'u3wb-1', page: 168, num: '1', type: 'gaps', core: true, instruction: 'Choose the words to complete each sentence.', numbered: true,
          paras: [['', S(['There is', 'There are', 'Are there'], 'There are')], ['', S(['There aren’t', 'Are there', 'There isn’t'], 'There isn’t')], ['', S(['There are', 'There is', 'Is there'], 'Is there')],
            ['', S(['There aren’t', 'Are there', 'There isn’t'], 'There aren’t')], ['', S(['there isn’t', 'is there', 'there aren’t'], 'there aren’t')], ['', S(['There are', 'There is', 'Is there'], 'There is')]] },
        { id: 'u3wb-2', page: 168, num: '2', type: 'gaps', core: true, instruction: 'Look at the photo. Write there is / isn’t or there are / aren’t (1–6).', numbered: true,
          paras: ins([['There are'], ['there aren’t', 'there are not'], ['There is', 'There’s'], ['There is', 'There’s'], ['There are'], ['There isn’t', 'There is not', 'There is', 'There’s']]),
          tutorNote: 'Пункт 6 (место на столе) зависит от того, как ученик видит фото — приняты оба варианта.' },
        { id: 'u3wb-3', page: 168, num: '3', type: 'gaps', core: true, instruction: 'Write positive (✓) or negative (✗) sentences.', numbered: true,
          paras: [['', A('There are three students in this house.')], ['', A('There isn’t any space in the garage for his car.', 'There is no space in the garage for his car.')],
            ['', A('There aren’t any clothes in the cupboard.', 'There are no clothes in the cupboard.')], ['', A('There is a big bathroom upstairs.', 'There’s a big bathroom upstairs.')]] },
        { id: 'u3wb-4', page: 168, num: '4', type: 'gaps', core: true, instruction: 'Complete with Is there or Are there and short answers.', noNums: true,
          paras: [['**1** ', A('Is there'), ' · Yes, ', A('there is')], ['**2** ', A('Are there'), ' · No, ', A('there aren’t', 'there are not')], ['**3** ', A('Is there'), ' · No, ', A('there isn’t', 'there is not')],
            ['**4** ', A('Are there'), ' · Yes, ', A('there are')], ['**5** ', A('Is there'), ' · No, ', A('there isn’t', 'there is not')]] },
        { id: 'u3wb-5', page: 168, num: '5', type: 'gaps', core: true, instruction: 'Write positive (✓) or negative (✗) sentences in the Present simple.', numbered: true,
          paras: [['', A('Hans doesn’t travel far to school.')], ['', A('Emilie doesn’t walk to the shops.')], ['', A('My niece doesn’t live in a city.')], ['', A('We like cafés.', 'We like cafes.')],
            ['', A('The students don’t play video games.')], ['', A('I sleep in the basement.')], ['', A('The house has hot water.', 'The house has got hot water.')]] },
        { id: 'u3wb-6', page: 168, num: '6', type: 'gaps', core: true, instruction: 'Complete the questions and short answers.', noNums: true,
          paras: [['**1** ', A('Do'), ' · Yes, they ', A('do')], ['**2** ', A('Do'), ' · No, I ', A('don’t', 'do not')], ['**3** ', A('Does'), ' · Yes, it ', A('does')], ['**4** ', A('Does'), ' · No, she ', A('doesn’t', 'does not')], ['**5** ', A('Do'), ' · No, we ', A('don’t', 'do not')]] },
        { id: 'u3wb-7', page: 169, num: '7', type: 'gaps', core: true, instruction: 'Complete with the words in brackets and short answers.', noNums: true,
          paras: [['**1** ', A('want')], ['**2** ', A('Do your parents travel'), ' · Yes, they ', A('do')], ['**3** ', A('don’t go', 'do not go')], ['**4** ', A('likes'), ' · ', A('doesn’t like', 'does not like')],
            ['**5** ', A('have'), ' · ', A('don’t have', 'do not have')], ['**6** ', A('watch')], ['**7** ', A('Does Avi work'), ' · No, he ', A('doesn’t', 'does not')]] },
        { id: 'u3wb-8', page: 169, num: '8', type: 'gaps', core: true, instruction: 'Choose the correct alternatives in Sean’s blog (1–9).', numbered: true,
          paras: [['', S(['have', 'has'], 'have')], ['', S(['don’t', 'do'], 'don’t')], ['', S(['has', 'have'], 'have')], ['', S(['go', 'goes'], 'goes')], ['', S(['don’t want', 'doesn’t want'], 'doesn’t want')],
            ['', S(['lives', 'live'], 'lives')], ['', S(['like', 'likes'], 'like')], ['', S(['doesn’t enjoy', 'don’t enjoy'], 'don’t enjoy')], ['', S(['does', 'do'], 'do')]] },
        { id: 'u3wb-9', page: 169, num: '9', type: 'gaps', core: true, instruction: 'Rewrite the sentences. Put the adverbs of frequency in the correct place.', numbered: true,
          paras: [['', A('I often vacuum the carpet in the living room.')], ['', A('My brother hardly ever empties the rubbish bin.')], ['', A('My brother is never happy about doing chores.')],
            ['', A('My sister sometimes does the washing up.', 'Sometimes my sister does the washing up.')], ['', A('Mum usually cooks dinner.')], ['', A('Dad always folds the clothes.')]] },
        { id: 'u3wb-10', page: 169, num: '10', type: 'gaps', core: true, instruction: 'Write the words in the correct order.', numbered: true,
          paras: [['', A('I often go to the supermarket.')], ['', A('Dad tidies the garage once a year.', 'Once a year Dad tidies the garage.')], ['', A('My sister cooks dinner several times a month.')],
            ['', A('They never do the washing up.')], ['', A('Their parties are usually noisy.')], ['', A('Do you always do the chores at the weekend?')], ['', A('We tidy our rooms once a week.', 'Once a week we tidy our rooms.')]] },
        { id: 'u3wb-11', page: 169, num: '11', type: 'gaps', core: true, instruction: 'Match an adverb (A) to a verb (B) and complete the sentences. Use each adverb once.', numbered: true,
          paras: [['', A('often goes', 'always goes', 'usually goes')], ['', A('usually fold', 'often fold', 'always fold')], ['', A('always does')], ['', A('hardly ever vacuum')], ['', A('sometimes clean')]],
          tutorNote: 'Логика: тётя → always (посуды нет); they → hardly ever (horrible); we → sometimes (обычно папа). 1–2: often / usually в любом порядке.' },
        { id: 'u3wb-12', page: 169, num: '12', type: 'writing', core: true, min: 40, max: 100, checks: false, instruction: 'How often do you do these things? Rewrite sentences 1–8 so that they are true for you. Use adverbs and expressions of frequency.' }
      ]},
      { id: 'vocab', title: 'Vocabulary · p.170', items: [
        { id: 'u3wb-v1', page: 170, num: '1', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'True or false?', numbered: true, paras: sels(TF, ['T', 'F', 'T', 'T', 'F']) },
        { id: 'u3wb-v2', page: 170, num: '2', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Complete the words in the mini-dialogues.', numbered: true, paras: ins(['toilet', 'bathroom', 'study', 'bedroom']) },
        { id: 'u3wb-v3', page: 170, num: '3', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Complete the pairs of sentences with the words in bold.', noNums: true,
          paras: [['**1** ', A('washing machine'), ' · ', A('fridge')], ['**2** ', A('bookcase'), ' · ', A('carpet')], ['**3** ', A('armchair'), ' · ', A('sink')], ['**4** ', A('cooker'), ' · ', A('lamp')], ['**5** ', A('sofa'), ' · ', A('fridge')]] },
        { id: 'u3wb-v4', page: 170, num: '4', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Match the verbs (1–9) to the nouns (A–I).', noNums: true,
          paras: [['1 vacuum ', S('ABCDEFGHI'.split(''), 'D')], ['2 empty ', S('ABCDEFGHI'.split(''), 'E')], ['3 do ', S('ABCDEFGHI'.split(''), 'F')], ['4 go ', S('ABCDEFGHI'.split(''), 'G')], ['5 cook ', S('ABCDEFGHI'.split(''), 'A')],
            ['6 clean ', S('ABCDEFGHI'.split(''), 'C')], ['7 make ', S('ABCDEFGHI'.split(''), 'H')], ['8 tidy ', S('ABCDEFGHI'.split(''), 'I')], ['9 fold ', S('ABCDEFGHI'.split(''), 'B')]] },
        { id: 'u3wb-v5', page: 170, num: '5', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Complete the sentences with chores from Ex. 4. Use the correct form.', numbered: true,
          paras: [['', A('go to the supermarket')], ['', A('cook dinner')], ['', A('empty the rubbish bin')], ['', A('vacuums the carpet', 'tidies her room', 'cleans her room')], ['', A('do the washing up', 'do the washing-up')], ['', A('fold my clothes', 'tidy my room')]],
          tutorNote: '4 и 6 допускают два логичных варианта — оба приняты.' },
        { id: 'u3wb-v6', page: 170, num: '6', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Choose the correct alternatives in Yianna’s to-do list (1–8).', numbered: true,
          paras: [['', S(['vacuum', 'empty'], 'vacuum')], ['', S(['garage', 'living room'], 'living room')], ['', S(['study', 'supermarket'], 'supermarket')], ['', S(['fridge', 'washing machine'], 'fridge')],
            ['', S(['bookcase', 'sink'], 'sink')], ['', S(['kitchen', 'attic'], 'kitchen')], ['', S(['make', 'empty'], 'empty')], ['', S(['dining rooms', 'bedrooms'], 'bedrooms')]] }
      ]},
      { id: 'read', title: 'Reading · p.171', items: [
        { id: 'u3wb-r1', page: 171, num: '1', tags: ['READ'], type: 'mcq', core: true, audio: { track: '97', note: 'Трек 97 (Workbook) не входит в комплект — читайте текст без аудио.' },
          instruction: 'Read the text. Choose the main topic.', questions: [{ q: 'Main topic', options: ['A Parents and their jobs', 'B Children and school', 'C Teenagers and chores'], a: 2 }] },
        { id: 'u3wb-r2', page: 171, num: '2', tags: ['P', 'READ'], type: 'mcq', core: true, instruction: 'For each question choose A, B, C or D.',
          questions: [{ q: '1', options: ABCD, a: 1 }, { q: '2', options: ABCD, a: 3 }, { q: '3', options: ABCD, a: 2 }, { q: '4', options: ABCD, a: 0 }, { q: '5', options: ABCD, a: 1 }] },
        { id: 'u3wb-r3', page: 171, num: '3', type: 'multi', core: true, instruction: 'Which linking words for addition are in the text?', options: ['as well as', 'also', 'In addition', 'and', 'but', 'However'], answers: [0, 1, 2, 3] },
        { id: 'u3wb-rvp', page: 171, num: 'VP', tags: ['VIEWPOINTS'], type: 'writing', core: true, min: 20, max: 70, checks: false, instruction: 'Which ideas in the text do you agree with? Which don’t you agree with? Write a few sentences.' }
      ]},
      { id: 'rev', title: 'Review · pp.172–173', items: [
        { id: 'u3wb-rv1', page: 172, num: '1', type: 'gaps', core: true, instruction: 'Choose the correct alternatives (1–8).', numbered: true,
          paras: [['', S(['often', 'every day'], 'every day')], ['', S(['carpets', 'washing machine'], 'carpets')], ['', S(['there is', 'are'], 'are')], ['', S(['goes', 'go'], 'goes')], ['', S(['never', 'always'], 'always')],
            ['', S(['dinner', 'lunch'], 'dinner')], ['', S(['fridge', 'cooker'], 'cooker')], ['', S(['bedrooms', 'living rooms'], 'bedrooms')]] },
        { id: 'u3wb-rv2', page: 172, num: '2', type: 'gaps', core: true, instruction: 'Write one word for each gap (1–8).', numbered: true,
          paras: [['', A('are')], ['', A('sofa')], ['', A('kitchen')], ['', A('clean')], ['', A('isn’t')], ['', A('doesn’t')], ['', A('makes')], ['', A('Do')]] },
        { id: 'u3wb-rv3', page: 172, num: '3–4', type: 'listen', core: true, audio: { track: '98', note: 'Подкаст (трек 98 Workbook) не входит в комплект — задание можно пропустить.' },
          instruction: 'Podcast. Ex. 3: contrast linking words. Ex. 4: choose A, B or C (1–5).',
          inner: { type: 'gaps', numbered: true, answers: null, paras: [['Ex. 3: 1–3 ', N()], ['Ex. 4: 1–5 ', N()]] } },
        { id: 'u3wb-med', page: 172, num: 'M', tags: ['MEDIATION'], type: 'writing', core: true, min: 10, max: 60, checks: false, instruction: 'Mediation: translate the five presentation sentences on p.172 into Russian.', adapted: 'В учебнике — на итальянский; у нас — на русский.' },
        { id: 'u3wb-w0', page: 172, num: 'VP', tags: ['VIEWPOINTS'], type: 'discuss', core: true, instruction: 'What things do you do daily? What are your favourite things to do every week?' },
        { id: 'u3wb-w5', page: 172, num: '5', type: 'gaps', core: true, instruction: 'Look at Peter’s graph and report. How many questions does he use?', paras: [['', A('4', 'four')]] },
        { id: 'u3wb-w6', page: 173, num: '6', type: 'gaps', core: true, instruction: 'Answer the questions about Peter’s report.', numbered: true,
          paras: [['', A('often, never', 'never, often')], ['', A('once or twice a week')], ['', A('However, but', 'but, However', 'however, but')]] },
        { id: 'u3wb-w7', page: 173, num: '7', type: 'multi', core: true, instruction: 'When does Peter use capital letters?', options: ['the start of sentences', 'the word I', 'days of the week', 'months of the year', 'celebrations', 'the names of people and places'], answers: [0, 5] },
        { id: 'u3wb-w9', page: 173, num: '9', type: 'scores', core: true, instruction: 'Score Peter’s report (0–10 for each point).', max: 10,
          items: ['includes all the correct information', 'correct phrases for a report', 'careful thinking about the topic', 'adverbs of frequency and time expressions', 'punctuation and capital letters', 'Present simple', 'long enough (120 words)'] },
        { id: 'u3wb-w11', page: 173, num: '10–11', tags: ['WRITE'], type: 'writing', core: true, min: 100, max: 140, instruction: 'Use the results in Ex. 10 to write a report (about 120 words). Use the key phrases from Ex. 8.',
          plan: ['Paragraph 1: My survey is about… There are … people in the survey.', 'Paragraph 2: The results for…', 'Paragraph 3: My survey shows that… Also, it shows that… Finally, it shows that…'] },
        { id: 'u3wb-w12', page: 173, num: '12', type: 'checklist', core: true, instruction: 'Use the checklist from Ex. 9 to score your report. Then improve it.',
          items: ['All the information', 'Report phrases', 'Careful thinking', 'Frequency words', 'Punctuation and capitals', 'Present simple', 'About 120 words'] },
        { id: 'u3wb-sa', page: 173, num: 'SA', type: 'review', core: true, cando: ['What was the most interesting part of Unit 3?', 'What was easy?', 'What was difficult?', 'What do I need to look at again?'] }
      ]}
    ]
  };
})();
