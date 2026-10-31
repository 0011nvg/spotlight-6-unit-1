/* =========================================================
   PANORAMIC A2 · UNIT 2 "Relationships"
   Student Book pp.21–30 · Grammar Practice p.135 · Workbook pp.162–167
   Формат «лист ответов»: тексты учебника не копируются — ученик работает по книге.
   ========================================================= */
BOOK.units.push({
  id: 'u2', num: 2, title: 'Relationships', pages: '21–30 · 135 · 162–167',
  skills: [
    ['Listening', 'Recognising the end of a sentence'], ['Reading', 'Identifying audience and purpose'],
    ['Writing', 'Opening and closing an email'], ['Speaking', 'Describing people'],
    ['Grammar', 'Possessive adjectives; Possessive ’s and possessive pronouns; Nouns: countable, uncountable, plural'],
    ['Vocabulary', 'Communication; Expressions with be; Family']
  ],
  lessons: ['u2-opener', 'u2-1', 'u2-2', 'u2-3', 'u2-4', 'u2-5', 'u2-6', 'u2-gr', 'u2-wb'],
  pending: []
});

(function () {
  const A = (...a) => ({ a });
  const S = (opts, a) => ({ sel: opts, a });
  const N = () => ({ n: 1 });
  const G = (g, ...a) => ({ a, group: g });
  const AB = ['A', 'B'], ABC = ['A', 'B', 'C'], ABCD = ['A', 'B', 'C', 'D'];
  const TF = ['T', 'F'];
  const AUDIO = t => ({ track: t });
  const sels = (opts, keys) => keys.map(k => ['', S(opts, k)]);
  const ins = keys => keys.map(k => ['', A(...[].concat(k))]);

  /* ---------------- OPENER · p.21 ---------------- */
  LESSONS['u2-opener'] = {
    id: 'u2-opener', unit: 'u2', code: '2.0', title: 'Relationships', kicker: 'Unit opener', pages: '21', accent: 'yellow', time: '15–20 min',
    goal: 'Talk about why relationships are important.',
    sections: [{ id: 'book', title: 'Textbook exercises · p.21', items: [
      { id: 'u2o-1', page: 21, num: '1', tags: ['THINK', 'WATCH', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('10'),
        instruction: 'Track 10. Why are relationships important? Answer in 1–2 sentences.',
        inner: { type: 'open', questions: ['Why are relationships important?'], key: ['They make us happy, help us not to worry, and bring comfort.'] } },
      { id: 'u2o-2', page: 21, num: '2', tags: ['WATCH', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('10'),
        instruction: 'Track 10 again. Are sentences 1–4 true (T) or false (F)?',
        inner: { type: 'gaps', numbered: true, answers: null, paras: [['', N()], ['', N()], ['', N()], ['', N()]] },
        tutorNote: 'Ориентир по записи: 1 F (они в Великобритании), 4 F. Пункты 2–3 сверьте на слух.' },
      { id: 'u2o-3', page: 21, num: '3', tags: ['SPEAK'], type: 'discuss', core: true,
        instruction: 'Create a mind map with the names of important family members, friends and pets in your life. Compare with your tutor.',
        prompts: ['Who is in your mind map?', 'Why is he / she important to you?'] }
    ]}]
  };

  /* ---------------- 2.1 LISTENING · Digital friendships · pp.22–23 ---------------- */
  LESSONS['u2-1'] = {
    id: 'u2-1', unit: 'u2', code: '2.1', title: 'Digital friendships', kicker: 'Listening', pages: '22–23', accent: 'blue', time: '2 × 45 min',
    goal: 'Forms of communication. Recognise the end of a sentence. Possessive adjectives.',
    sections: [
      { id: 'warm', title: 'Warm-up', items: [
        { id: 'u21-1', page: 22, num: '1', tags: ['THINK'], type: 'discuss', core: true, instruction: 'How many close friends have you got? What about online friends? Are the two numbers very different?' }
      ]},
      { id: 'book', title: 'Textbook exercises · pp.22–23', items: [
        { id: 'u21-2', page: 22, num: '2', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Match the forms of communication (1–8) to the pictures (A–H).',
          noNums: true, paras: [['**1** blogging ', S('ABCDEFGH'.split(''), 'B')], ['**2** calling ', S('ABCDEFGH'.split(''), 'E')], ['**3** video calling ', S('ABCDEFGH'.split(''), 'A')], ['**4** file sharing ', S('ABCDEFGH'.split(''), 'F')],
            ['**5** messaging ', S('ABCDEFGH'.split(''), 'D')], ['**6** posting comments ', S('ABCDEFGH'.split(''), 'G')], ['**7** posting photos ', S('ABCDEFGH'.split(''), 'C')], ['**8** using emojis ', S('ABCDEFGH'.split(''), 'H')]],
          links: [['See Vocabulary p.164', 'u2-wb', 'u2wb-v1']] },
        { id: 'u21-3', page: 22, num: '3', tags: ['CITIZENSHIP', 'SPEAK'], type: 'gaps', core: true, instruction: 'Complete sentences 1–6 with your own ideas. Use the words from Ex. 2.',
          numbered: true, paras: [1, 2, 3, 4, 5, 6].map(() => ['', { open: true }]), tutorNote: 'Свободный ответ. Попросите объяснить каждый выбор: “… because …”.' },
        { id: 'u21-vp', page: 22, num: 'VP', tags: ['VIEWPOINTS'], type: 'rank', core: true, instruction: 'What’s your favourite form of communication? Choose your top 3 (1 = favourite).',
          options: ['blogging', 'calling', 'video calling', 'file sharing', 'messaging', 'posting comments', 'posting photos', 'using emojis'] },
        { id: 'u21-4', page: 22, num: '4', tags: ['LISTEN'], type: 'listen', core: true, audio: AUDIO('11'),
          instruction: 'Track 11. What are the speakers’ favourite forms of communication?',
          inner: { type: 'gaps', noNums: true, paras: [['**Lexi** ', A('video calling')], ['**Lucian** ', A('posting photos')], ['**Holly** ', A('blogging')], ['**Callum** ', A('messaging', 'using emojis')], ['**Sharifa** ', A('calling')]] } },
        { id: 'u21-5', page: 22, num: '5', tags: ['OTE', 'P', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('11'),
          instruction: 'Track 11 again. Choose A, B or C for questions 1–5.',
          inner: { type: 'gaps', numbered: true, answers: null, paras: [['', N()], ['', N()], ['', N()], ['', N()], ['', N()]] },
          tutorNote: 'Ориентир по записи: 1 C (his photos), 5 A (calling is easy in many places — buses, trains). 2–4 сверьте на слух.' },
        { id: 'u21-6', page: 22, num: '6', tags: ['MEDIATION'], type: 'discuss', core: true, instruction: 'Which speaker in Ex. 4 are you similar to, and why?' },
        { id: 'u21-7', page: 23, num: '7', tags: ['LISTEN', 'SKILL'], type: 'listen', core: true, audio: AUDIO('12'),
          boxes: [{ title: 'LISTENING SKILL · Recognising the end of a sentence', html: '<p>At the end of a sentence the speaker’s voice usually goes down, and there is often a short pause.</p>' }],
          instruction: 'Track 12. Choose the last word in the first sentence (1–5).',
          inner: { type: 'gaps', numbered: true, paras: [['', S(['friend', 'USA', 'name'], 'USA')], ['', S(['fan', 'pictures', 'favourite'], 'pictures')], ['', S(['blogging', 'parents', 'I'], 'blogging')], ['', S(['favourite', 'messaging', 'good'], 'messaging')], ['', S(['problem', 'voice', 'loud'], 'problem')]] } },
        { id: 'u21-8', page: 23, num: '8', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Grammar in context: possessive adjectives. Choose the correct alternative in the rules.',
          numbered: true, paras: [['', S(['before', 'after'], 'before')], ['', S(['action', 'possession'], 'possession')]],
          links: [['Grammar Practice p.135', 'u2-gr', 'u2g-1'], ['Grammar Use p.162', 'u2-wb', 'u2wb-1']] },
        { id: 'u21-9', page: 23, num: '9', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Complete sentences 1–5 with possessive adjectives.', numbered: true,
          paras: ins(['your', 'her', 'his', 'their', 'My']) },
        { id: 'u21-10', page: 23, num: '10', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Complete the extract with possessive adjectives and subject pronouns (1–6).', numbered: true,
          paras: ins(['My', 'I', 'they', 'my', 'He', 'his']) },
        { id: 'u21-11', page: 23, num: '11', tags: ['EMPLOYABILITY', 'SPEAK'], type: 'discuss', core: true, instruction: 'What is the most popular form of communication in your family / with your friends? Use possessive adjectives and subject pronouns.', model: 'My mum’s favourite form is calling. She calls her sister every day.' },
        { id: 'u21-12', page: 23, num: '12', tags: ['PRONUNCIATION'], type: 'listen', core: true, audio: AUDIO('13'),
          boxes: [{ title: 'PRONUNCIATION · Stress on content words', html: '<p>We usually stress content words: nouns, adjectives, adverbs and the negative form of <i>be</i>.</p>' }],
          instruction: 'Track 13. Listen and repeat the sentences.', inner: { type: 'open', questions: ['Which words are stressed?'], key: ['isn’t · fan · blogging · really · beautiful photos'] } },
        { id: 'u21-13', page: 23, num: '13', tags: ['PRONUNCIATION'], type: 'listen', core: true, audio: AUDIO('14'),
          instruction: 'Track 14. Look at the extract in Ex. 10 again. Underline the stressed words in your book. Listen and check. Practise reading the extract aloud.',
          inner: { type: 'open', questions: ['Read the extract aloud. Which words did you stress?'], key: ['favourite · form · communication · messaging · also · emojis · great fun · thousands · messages · best friend · fantastic · caring · messages · really funny'] } },
        { id: 'u21-vp2', page: 23, num: 'VP', tags: ['VIEWPOINTS'], type: 'discuss', core: true, instruction: 'Is your personality different online? Are you loud or quiet?' }
      ]},
      { id: 'oge', title: 'OGE Practice — Exam Skills', items: [
        { id: 'u21-oge1', source: 'added', oge: 'builder', type: 'gaps', core: false, title: 'Exam Skills Builder · Grammar transformation',
          instruction: 'Change the word in capitals so that it fits the gap.', ogeNote: 'Авторское задание в формате ОГЭ. Не из банка ФИПИ.', heading: 'My online friend', numbered: true,
          paras: [['I have got a friend in Canada. ', A('Her'), ' name is Kate. — SHE'], ['We often ', A('messages', 'message'), ' each other. — MESSAGE'],
            ['Kate ', A('posts'), ' photos of her dog every day. — POST'], ['Her brothers are ', A('older'), ' than her. — OLD'],
            ['I like ', A('their'), ' funny videos. — THEY'], ['Video calling is ', A('the easiest'), ' way for us to talk. — EASY']],
          tutorNote: 'Пункт 2: в предложении «We often ___» правильно message (глагол). Приняты обе формы, обсудите ошибку с учеником.' }
      ]},
      { id: 'review', title: 'Lesson review', items: [
        { id: 'u21-r', source: 'added', type: 'review', core: true, cando: ['I can name 8 forms of communication.', 'I can hear where a sentence ends.', 'I can use my, your, his, her, its, our, their.'] }
      ]}
    ]
  };

  /* ---------------- 2.2 WRITING · My best friend · pp.24–25 ---------------- */
  LESSONS['u2-2'] = {
    id: 'u2-2', unit: 'u2', code: '2.2', title: 'My best friend', kicker: 'Writing', pages: '24–25', accent: 'pink', time: '2 × 45 min',
    goal: 'Expressions with be. Possessive ’s and possessive pronouns. Open and close an email.',
    sections: [
      { id: 'warm', title: 'Warm-up', items: [
        { id: 'u22-1', page: 24, num: '1', tags: ['THINK'], type: 'discuss', core: true, instruction: 'Think about two of your friends. What have you got in common with them?' }
      ]},
      { id: 'book', title: 'Textbook exercises · pp.24–25', items: [
        { id: 'u22-2', page: 24, num: '2', tags: ['READ'], type: 'multi', core: true, instruction: 'Read the email. What have Frank and Giovanni got in common? Tap all correct answers.',
          options: ['the same school', 'rap music', 'rugby', 'personality', 'black hair', 'dark skin', 'eye colour'], answers: [1, 2, 4, 5] },
        { id: 'u22-3', page: 24, num: '3', type: 'gaps', core: true, instruction: 'Read the email again. Write one word in each gap.', numbered: true,
          paras: [['', A('England')], ['', A('school')], ['', G('c3', 'video', 'messages', 'messaging'), ' + ', G('c3', 'messages', 'video', 'messaging')], ['', A('outgoing')], ['', A('rap'), ' · ', A('rugby')], ['', A('black'), ' · ', A('skin')]],
          tutorNote: 'Пункт 3: video call(s) / messages — порядок любой.' },
        { id: 'u22-4', page: 24, num: '4', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Read the Vocabulary development. Complete the text with the correct prepositions (1–7).',
          boxes: [{ title: 'VOCABULARY DEVELOPMENT · Expressions with be', html: '<p>be keen <b>on</b> · be crazy <b>about</b> · be a fan <b>of</b> · be good <b>at</b> · be bad <b>at</b> · be interested <b>in</b> · be <b>into</b></p>' }],
          bank: ['about', 'at', 'in', 'into', 'of', 'on'], numbered: true, paras: ins(['into', 'on', 'at', 'in', 'at', 'about', 'of']),
          links: [['See Vocabulary p.164', 'u2-wb', 'u2wb-v2']] },
        { id: 'u22-5', page: 24, num: '5', tags: ['SPEAK'], type: 'discuss', core: true, instruction: 'Talk about your own interests. Use expressions with be. What have you and your tutor got in common?', model: 'I’m crazy about football, but I’m not interested in rugby!' },
        { id: 'u22-vp', page: 24, num: 'VP', tags: ['VIEWPOINTS'], type: 'discuss', core: true, instruction: 'Are you and your friends similar or different? Is it important to have a lot in common with your friends?' },
        { id: 'u22-6', page: 25, num: '6', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Grammar in context: possessive ’s and possessive pronouns. Choose the correct alternative in the rule.',
          paras: [['We use the possessive ’s and possessive pronouns to say that things ', S(['are similar to us', 'belong to us'], 'belong to us'), '.']],
          links: [['Grammar Practice p.135', 'u2-gr', 'u2g-3'], ['Grammar Use pp.162–163', 'u2-wb', 'u2wb-5']] },
        { id: 'u22-7', page: 25, num: '7', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Add the possessive ’s to sentences 1–5. Write the word with ’s.', numbered: true,
          paras: ins(['Frank’s', 'Giovanni’s', 'boys’', 'Jenna’s', 'women’s']) },
        { id: 'u22-8', page: 25, num: '8', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Choose the correct alternative.', noNums: true,
          paras: [['**1** ', S(['your', 'yours'], 'your'), ' · ', S(['its', 'his'], 'his')], ['**2** ', S(['she’s', 'hers'], 'hers')], ['**3** ', S(['our', 'ours'], 'our'), ' · ', S(['Their', 'Hers'], 'Their')],
            ['**4** ', S(['My', 'Mine'], 'Mine'), ' · ', S(['hers', 'his'], 'his')], ['**5** ', S(['your', 'theirs'], 'your'), ' · ', S(['my', 'ours'], 'ours')]] },
        { id: 'u22-9', page: 25, num: '9', tags: ['EMPLOYABILITY', 'SKILL'], type: 'gaps', core: true, instruction: 'Read the Writing skill and the Key phrases. Which are formal (F) and which are informal (I)?',
          noNums: true, paras: [['Hi / Hey / Hello (name)! ', S(['F', 'I'], 'I')], ['Dear Sir or Madam, ', S(['F', 'I'], 'F')], ['Dear Mr / Mrs / Ms (surname), ', S(['F', 'I'], 'F')],
            ['Best wishes, ', S(['F', 'I'], 'F')], ['Talk to you soon, ', S(['F', 'I'], 'I')], ['Kind regards, ', S(['F', 'I'], 'F')], ['Love, ', S(['F', 'I'], 'I')], ['See you soon, ', S(['F', 'I'], 'I')], ['Take care! ', S(['F', 'I'], 'I')]],
          tutorNote: 'Best wishes — нейтрально-вежливое закрытие; в ключе — F. Можно обсудить, что его пишут и друзьям.' },
        { id: 'u22-10', page: 25, num: '10', type: 'gaps', core: true, instruction: 'Read Frank’s email again. Is it formal or informal? Which Key phrases does he use?',
          paras: [['The email is ', S(['formal', 'informal'], 'informal'), '. Opening: ', S(['Hey!', 'Dear Sir or Madam,', 'Hello Giovanni!'], 'Hey!'), ' Closing: ', S(['Kind regards,', 'Take care!', 'Love,'], 'Take care!')]] },
        { id: 'u22-11', page: 25, num: '11', tags: ['CITIZENSHIP'], type: 'gaps', core: true, instruction: 'Choose one of your friends. Make notes about him / her.', noNums: true,
          paras: [['Where is your friend from? ', { open: true }], ['Personality: ', { open: true }], ['Appearance: ', { open: true }], ['Interests in common: ', { open: true }]] },
        { id: 'u22-12', page: 25, num: '12', tags: ['OTE', 'P', 'WRITE'], type: 'writing', core: true, min: 80, max: 130,
          instruction: 'Write a reply to Joe’s email (p.25) and tell him about your best friend. Use your notes from Ex. 11, expressions with be, the possessive ’s and possessive pronouns.',
          plan: ['Who is your best friend?', 'What is he / she like? (personality, appearance)', 'What are you interested in? Have you got a lot in common?', 'Informal opening and closing'] },
        { id: 'u22-13', page: 25, num: '13', tags: ['CHECK & REFLECT'], type: 'checklist', core: true, instruction: 'Check your email.', adapted: 'В учебнике — обмен с партнёром. Ученик проверяет свой текст, затем преподаватель.',
          items: ['Did I include all the correct information?', 'Did I use expressions with be correctly?', 'Did I use the possessive ’s and possessive pronouns correctly?'] },
        { id: 'u22-14', page: 25, num: '14–15', tags: ['COMMUNICATION'], type: 'discuss', core: true, instruction: 'Rewrite your email using the feedback. Then describe your tutor’s best friend from his / her email.' }
      ]},
      { id: 'review', title: 'Lesson review', items: [
        { id: 'u22-r', source: 'added', type: 'review', core: true, cando: ['I can use 7 expressions with be + preposition.', 'I can use ’s, s’ and mine / yours / his / hers / ours / theirs.', 'I can open and close formal and informal emails.'] }
      ]}
    ]
  };

  /* ---------------- 2.3 READING · Modern families · pp.26–27 ---------------- */
  const FAM = ['divorced', 'married', 'stepmother', 'half-sister', 'half-brother', 'husband', 'engaged', 'couple', 'stepfather', 'single parent'];
  LESSONS['u2-3'] = {
    id: 'u2-3', unit: 'u2', code: '2.3', title: 'Modern families', kicker: 'Reading', pages: '26–27', accent: 'yellow', time: '2 × 45 min', sdg: '3 Good health and well-being',
    goal: 'Family words. Identify audience and purpose. Countable, uncountable and plural nouns.',
    sections: [
      { id: 'warm', title: 'Warm-up', items: [
        { id: 'u23-1', page: 26, num: '1', tags: ['THINK'], type: 'discuss', core: true, instruction: 'Read the Quick quote on p.26 and discuss its message.' }
      ]},
      { id: 'book', title: 'Textbook exercises · pp.26–27', items: [
        { id: 'u23-2', page: 26, num: '2', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Read “Who’s who in my family?”. Choose the correct alternative (1–12).', noNums: true,
          paras: [['**1** ', S(['stepmother', 'single parent'], 'stepmother'), ' **2** ', S(['divorced from', 'married to'], 'married to'), ' **3** ', S(['nephew', 'half-brother'], 'half-brother')],
            ['**4** ', S(['nieces', 'half-sisters'], 'half-sisters'), ' **5** ', S(['nephew', 'husband'], 'nephew'), ' **6** ', S(['wife', 'niece'], 'niece')],
            ['**7** ', S(['single parent', 'couple'], 'single parent'), ' **8** ', S(['engaged to', 'divorced from'], 'divorced from'), ' **9** ', S(['couple', 'parent'], 'couple')],
            ['**10** ', S(['husband', 'stepfather'], 'husband'), ' **11** ', S(['wife', 'stepmother'], 'wife'), ' **12** ', S(['married', 'engaged'], 'engaged')]],
          hint: '8: Kim — a single parent. 10–12: свадьба ещё впереди (in June).', links: [['See Vocabulary p.164', 'u2-wb', 'u2wb-v4']] },
        { id: 'u23-3', page: 26, num: '3', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Complete the conversation between Otto and Aria with words from Ex. 2 (1–10).',
          bank: FAM, uniqueBank: true, numbered: true, paras: ins(FAM) },
        { id: 'u23-4', page: 26, num: '4', tags: ['READ', 'LISTEN', 'SKILL'], type: 'listen', core: true, audio: AUDIO('15'),
          boxes: [{ title: 'READING SKILL · Identifying audience and purpose', html: '<p>Ask: Where is the text from (magazine, news, encyclopaedia)? Is it fact or opinion? Is the language formal or informal? What do the pictures show?</p>' }],
          instruction: 'Track 15. Read and listen to the text on p.27. Choose the correct answer (A or B).',
          inner: { type: 'mcq', questions: [{ q: '1', options: AB, a: 1 }, { q: '2', options: AB, a: 1 }, { q: '3', options: AB, a: 1 }, { q: '4', options: AB, a: 0 }, { q: '5', options: AB, a: 1 }] } },
        { id: 'u23-5', page: 27, num: '5', tags: ['I', 'READ'], type: 'gaps', core: true, instruction: 'Read the text again. Answer questions 1–6 (max four words). 0 = 19.2 million.', numbered: true,
          paras: [['', A('35', '35 years old', 'thirty-five')], ['', A('20 months', 'for 20 months', 'twenty months')],
            ['', A('Houses are expensive.', 'houses are expensive', 'Because houses are expensive.', 'not a lot of money', 'They haven’t got money.')],
            ['', A('Their work is important.', 'They haven’t got time.', 'work is important', 'no time', 'It’s a choice.')], ['', A('1.89', '1.89 children')], ['', A('boys', 'more boys', 'There are more boys.')]] },
        { id: 'u23-6', page: 27, num: '6', tags: ['MEDIATION'], type: 'writing', core: true, min: 20, max: 60, checks: false, instruction: 'Your friend’s English isn’t very good. Give him a short summary of the text (in Russian or simple English).' },
        { id: 'u23-7', page: 27, num: '7', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Grammar in context: nouns. Complete the rules with the words: child, children, house, houses, time, work.',
          bank: ['child', 'children', 'house', 'houses', 'time', 'work'], uniqueBank: true, numbered: true, paras: [['', A('house')], ['', A('houses')], ['', A('child')], ['', A('children')], ['', G('n5', 'time', 'work')], ['', G('n5', 'work', 'time')]],
          links: [['Grammar Practice p.135', 'u2-gr', 'u2g-5'], ['Grammar Use p.163', 'u2-wb', 'u2wb-8']] },
        { id: 'u23-8', page: 27, num: '8', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Choose the correct alternative.', noNums: true,
          paras: [['**1** ', S(['family', 'families'], 'families')], ['**2** ', S(['A', '–'], 'A')], ['**3** ', S(['a', '–'], '–')], ['**4** ', S(['couple', 'couples'], 'couples'), ' · ', S(['child', 'children'], 'children'), ' · ', S(['work', 'works'], 'work')]] },
        { id: 'u23-9', page: 27, num: '9', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Complete the text with the correct form of the nouns (1–7).',
          bank: ['family', 'grandparent', 'half-brother', 'husband', 'money', 'stepdad', 'time'], numbered: true, paras: ins(['family', 'stepdad', 'half-brothers', 'husband', 'grandparents', 'time', 'money']) },
        { id: 'u23-vp', page: 27, num: 'VP', tags: ['VIEWPOINTS'], type: 'discuss', core: true, instruction: 'Are families in Russia similar to families in the UK? Why or why not? Refer to the text.', adapted: 'В учебнике — Италия; у нас — Россия.' }
      ]},
      { id: 'review', title: 'Lesson review', items: [
        { id: 'u23-r', source: 'added', type: 'review', core: true, cando: ['I can name 12 family words (stepmother, niece, half-brother…).', 'I can say who a text is for and why.', 'I can use countable and uncountable nouns with a / an / –.'] }
      ]}
    ]
  };

  /* ---------------- 2.4 SPEAKING · He’s friendly but quite shy · p.28 ---------------- */
  LESSONS['u2-4'] = {
    id: 'u2-4', unit: 'u2', code: '2.4', title: 'He’s friendly but quite shy', kicker: 'Speaking', pages: '28', accent: 'blue', time: '45 min',
    goal: 'Describe people: be, have got, be good at, expressions with be.',
    sections: [
      { id: 'book', title: 'Textbook exercises · p.28', items: [
        { id: 'u24-1', page: 28, num: '1', tags: ['THINK'], type: 'gaps', core: true, instruction: 'Think about an important person in your life. Make notes.', noNums: true,
          paras: [['Appearance: ', { open: true }], ['Personality: ', { open: true }], ['Interests: ', { open: true }], ['What is he / she good at? ', { open: true }]] },
        { id: 'u24-2', page: 28, num: '2', tags: ['WATCH', 'LISTEN', 'READ'], type: 'listen', core: true, audio: AUDIO('16'),
          instruction: 'Track 16 (or read Mia’s talk on p.28). Are sentences 1–6 true (T) or false (F)?',
          inner: { type: 'gaps', numbered: true, paras: sels(TF, ['T', 'F', 'F', 'F', 'T', 'T']) } },
        { id: 'u24-3', page: 28, num: '3', tags: ['SKILL'], type: 'gaps', core: true, instruction: 'Read the Speaking skill and the Key phrases. Choose the correct alternative.',
          boxes: [{ title: 'SPEAKING SKILL · Describing people', html: '<p><i>be</i> + adjective — personality and some physical descriptions; <i>have got</i> — other physical descriptions; <i>be good at</i> — talents; expressions with <i>be</i> — interests.</p>' }],
          noNums: true, paras: [['**1** ', S(['hasn’t got', 'isn’t good at'], 'isn’t good at')], ['**2** ', S(['has got', 'is'], 'is'), ' · ', S(['she’s', 'she’s got'], 'she’s got')], ['**3** ', S(['hasn’t got', 'isn’t keen on'], 'isn’t keen on')], ['**4** ', S(['crazy about', 'outgoing'], 'crazy about')]],
          explanation: 'GET IT RIGHT! Прилагательное — перед существительным: He’s got dark hair. (не hair dark)' },
        { id: 'u24-4', page: 28, num: '4', tags: ['CITIZENSHIP', 'SPEAK'], type: 'discuss', core: true, instruction: 'Give a presentation about a close friend. Use your notes from Ex. 1 and the Key phrases. Invite questions.',
          adapted: 'Ученик готовит 4–6 фото (или рисунок) и выступает 1–2 минуты; преподаватель задаёт 2 вопроса.' }
      ]},
      { id: 'review', title: 'Lesson review', items: [
        { id: 'u24-r', source: 'added', type: 'review', core: true, cando: ['I can describe a person’s appearance and personality.', 'I can say what a person is good at and keen on.', 'I can give a short presentation and answer questions.'] }
      ]}
    ]
  };

  /* ---------------- 2.5 LITERATURE · Poetry · p.29 ---------------- */
  LESSONS['u2-5'] = {
    id: 'u2-5', unit: 'u2', code: '2.5', title: 'Poetry', kicker: 'Literature', pages: '29', accent: 'orange', time: '45 min', sdg: '3 Good health and well-being',
    goal: 'Verses, syllables, rhymes and similes in poems by R. L. Stevenson.',
    sections: [
      { id: 'book', title: 'Textbook exercises · p.29', items: [
        { id: 'u25-1', page: 29, num: '1', tags: ['THINK'], type: 'discuss', core: true, instruction: 'Do you like reading or listening to poetry? Why or why not?' },
        { id: 'u25-2', page: 29, num: '2', tags: ['READ', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('17'),
          instruction: 'Track 17. Read and listen to “Bed in summer”. Choose A or B (1–5).',
          inner: { type: 'mcq', questions: [{ q: '1 verse', options: AB, a: 0 }, { q: '2 lines', options: AB, a: 1 }, { q: '3 syllables', options: AB, a: 0 }, { q: '4 rhymes with feet', options: AB, a: 1 }, { q: '5 second verse', options: AB, a: 1 }] } },
        { id: 'u25-3', page: 29, num: '3', type: 'open', core: true, instruction: 'Read the poem again. Answer the questions.',
          questions: ['Does the poet describe the daytime or night-time? How do you know?', 'What does he have to do? What does he want to do?', 'What can he see outside? What can he hear?'],
          key: ['The daytime — the sky is clear and blue.', 'He has to go to bed. He wants to play.', 'He can see birds hopping on the tree. He can hear grown-up people’s feet in the street.'] },
        { id: 'u25-4', page: 29, num: '4', tags: ['READ', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('18'),
          instruction: 'Track 18. “At the sea-side”: choose the correct rhyming word for each gap.',
          inner: { type: 'gaps', numbered: true, paras: [['', S(['you', 'me', 'her'], 'me')], ['', S(['up', 'down', 'over'], 'up')]] } },
        { id: 'u25-5', page: 29, num: '5', type: 'mcq', core: true, instruction: 'What is the theme (topic) of the poem?', questions: [{ q: 'The theme is…', options: ['A the sea', 'B holes'], a: 0 }] },
        { id: 'u25-6', page: 29, num: '6', type: 'open', core: true, instruction: 'Simile: a writer compares two things with like or as. Answer the questions.',
          questions: ['Find an example of a simile in the poem.', 'What two things does the poet compare?'], key: ['My holes were empty like a cup.', 'The holes and a cup.'] },
        { id: 'u25-7', page: 29, num: '7', tags: ['WRITE', 'REAL WORLD'], type: 'writing', core: true, min: 25, max: 45, checks: false,
          instruction: 'Think of a happy memory from the summer. Write a short description (30 words): Where are you? Who are you with? What do you see? Why are you happy?' }
      ]}
    ]
  };

  /* ---------------- 2.6 REVIEW · p.30 ---------------- */
  LESSONS['u2-6'] = {
    id: 'u2-6', unit: 'u2', code: '2.6', title: 'Review', kicker: 'Review', pages: '30', accent: 'pink', time: '45 min',
    goal: 'Revise Unit 2.',
    sections: [{ id: 'book', title: 'Textbook exercises · p.30', items: [
      { id: 'u26-1', page: 30, num: '1', tags: ['P'], type: 'mcq', core: true, instruction: 'For each gap 1–6 choose A, B, C or D.',
        questions: [{ q: '1', options: ABCD, a: 3 }, { q: '2', options: ABCD, a: 0 }, { q: '3', options: ABCD, a: 1 }, { q: '4', options: ABCD, a: 3 }, { q: '5', options: ABCD, a: 0 }, { q: '6', options: ABCD, a: 2 }],
        explanation: '1 my · 2 money · 3 person · 4 dad’s · 5 children · 6 stepmother.' },
      { id: 'u26-2', page: 30, num: '2', tags: ['MEDIATION'], type: 'writing', core: true, min: 20, max: 70, checks: false, instruction: 'A friend wants to know about Isabel and her family, but doesn’t speak English. Write a summary in Russian.', adapted: 'В учебнике — на итальянском; у нас — на русском.' },
      { id: 'u26-3', page: 30, num: '3', tags: ['P'], type: 'gaps', core: true, instruction: 'Write one word for each gap (1–6).', numbered: true,
        paras: [['', A('other', 'your', 'people’s', 'other people’s')], ['', A('mine')], ['', A('about')], ['', A('my')], ['', A('on')], ['', A('yours')]] },
      { id: 'u26-4', page: 30, num: '4', type: 'gaps', core: true, instruction: 'Complete the conversation with the words (1–7).',
        bank: ['blogging', 'couple', 'fan', 'into', 'keen', 'messaging', 'video calling'], uniqueBank: true, numbered: true, paras: ins(['messaging', 'video calling', 'into', 'couple', 'keen', 'blogging', 'fan']) },
      { id: 'u26-5', page: 30, num: '5', type: 'gaps', core: true, instruction: 'Choose the correct alternative.', numbered: true,
        paras: [['', S(['mine', 'my'], 'my')], ['', S(['time', 'times'], 'time')], ['', S(['child', 'children'], 'children')], ['', S(['our', 'ours'], 'ours')], ['', S(['boys’', 'childrens’'], 'boys’')]] },
      { id: 'u26-6', page: 30, num: '6', tags: ['SPEAK'], type: 'discuss', core: true, instruction: 'Read the Quick quote. How important is your family to you? Give reasons.' },
      { id: 'u26-7', page: 30, num: '7', tags: ['LOOK BACK'], type: 'discuss', core: true, instruction: 'Answer the Look back questions.',
        prompts: ['Which grammar point would you like to practise further?', 'Which lesson did you enjoy most? Why?', 'What phrases can you use to open and close a formal email?', 'What information do you include when you describe someone?'] }
    ]}]
  };

  /* ---------------- GRAMMAR PRACTICE · p.135 ---------------- */
  LESSONS['u2-gr'] = {
    id: 'u2-gr', unit: 'u2', code: 'GR', title: 'Grammar Practice', kicker: 'Grammar', pages: '135', accent: 'navy', time: '30–45 min',
    goal: 'Possessive adjectives and pronouns, possessive ’s, nouns.',
    sections: [{ id: 'book', title: 'Grammar Practice · p.135', items: [
      { id: 'u2g-1', page: 135, num: '1', type: 'gaps', core: true, instruction: 'Complete the table with possessive adjectives.', noNums: true,
        paras: [['I → ', A('my')], ['you → ', A('your')], ['he → ', A('his')], ['she → ', A('her')], ['it → ', A('its')], ['we → ', A('our')], ['you (pl.) → ', A('your')], ['they → ', A('their')]] },
      { id: 'u2g-2', page: 135, num: '2', type: 'gaps', core: true, instruction: 'Complete sentences 1–8 with possessive adjectives.', numbered: true, paras: ins(['Its', 'Our', 'Her', 'His', 'your', 'My', 'Their', 'Your']) },
      { id: 'u2g-3', page: 135, num: '3', type: 'gaps', core: true, instruction: 'Rewrite the word with the apostrophe in the correct place (1–8).', numbered: true,
        paras: ins(['Amal’s', 'girls’', 'Victoria’s', 'Ben’s', 'boys’', 'grandfather’s', 'Tom’s', 'grandparents’']) },
      { id: 'u2g-4', page: 135, num: '4', type: 'gaps', core: true, instruction: 'Complete the table with possessive pronouns.', noNums: true,
        paras: [['I → ', A('mine')], ['you → ', A('yours')], ['he → ', A('his')], ['she → ', A('hers')], ['we → ', A('ours')], ['you (pl.) → ', A('yours')], ['they → ', A('theirs')]] },
      { id: 'u2g-5', page: 135, num: '5', type: 'gaps', core: true, instruction: 'Singular countable (SC), plural countable (PC) or uncountable (U)?', noNums: true,
        paras: [['1 interest ', S(['SC', 'PC', 'U'], ['SC', 'U'])], ['2 husbands ', S(['SC', 'PC', 'U'], 'PC')], ['3 personality ', S(['SC', 'PC', 'U'], 'SC')], ['4 work ', S(['SC', 'PC', 'U'], 'U')], ['5 nephews ', S(['SC', 'PC', 'U'], 'PC')],
          ['6 time ', S(['SC', 'PC', 'U'], 'U')], ['7 family ', S(['SC', 'PC', 'U'], 'SC')], ['8 money ', S(['SC', 'PC', 'U'], 'U')], ['9 couple ', S(['SC', 'PC', 'U'], 'SC')], ['10 nieces ', S(['SC', 'PC', 'U'], 'PC')]] },
      { id: 'u2g-6', page: 135, num: '6', type: 'multi', core: true, instruction: 'Read Jessica’s email. Find four uncountable nouns.',
        options: ['information', 'house', 'rooms', 'people', 'money', 'time', 'work', 'pool'], answers: [0, 4, 5, 6] }
    ]}]
  };

  /* ---------------- WORKBOOK · pp.162–167 ---------------- */
  const POSS = ['my', 'your', 'his', 'her', 'its', 'our', 'their'];
  LESSONS['u2-wb'] = {
    id: 'u2-wb', unit: 'u2', code: 'WB', title: 'Workbook', kicker: 'Workbook', pages: '162–167', accent: 'green', time: 'дом. задание',
    goal: 'Grammar Use, Vocabulary, Reading, Review, Writing — Unit 2.',
    sections: [
      { id: 'gram', title: 'Grammar Practice: Use · pp.162–163', items: [
        { id: 'u2wb-1', page: 162, num: '1', type: 'gaps', core: true, instruction: 'Match sentences 1–8 to A–H.', numbered: true, paras: sels('ABCDEFGH'.split(''), ['F', 'B', 'D', 'G', 'A', 'E', 'C', 'H']) },
        { id: 'u2wb-2', page: 162, num: '2', type: 'mcq', core: true, instruction: 'Choose the correct possessive adjectives.', questions: [{ q: '1', options: ABC, a: 2 }, { q: '2', options: ABC, a: 2 }, { q: '3', options: ABC, a: 1 }, { q: '4', options: ABC, a: 1 }] },
        { id: 'u2wb-3', page: 162, num: '3', type: 'gaps', core: true, instruction: 'Correct the errors in bold (1–8).', numbered: true, paras: ins(['your', 'Their', 'Your', 'Its', 'Our', 'My', 'His', 'My']) },
        { id: 'u2wb-4', page: 162, num: '4', type: 'gaps', core: true, instruction: 'Complete the mini-dialogues with possessive adjectives.', noNums: true,
          paras: [['**1** ', A('your'), ' · ', A('my')], ['**2** ', A('their'), ' · ', A('Their')], ['**3** ', A('her'), ' · ', A('her')], ['**4** ', A('your'), ' · ', A('his')]] },
        { id: 'u2wb-5', page: 162, num: '5', type: 'gaps', core: true, instruction: 'Complete with the words in brackets. Use the possessive ’s (1–10).', numbered: true,
          paras: ins(['children’s', 'girls’', 'boy’s', 'students’', 'Dooley’s', 'cousin’s', 'child’s', 'women’s', 'Branca’s', 'man’s']) },
        { id: 'u2wb-6', page: 162, num: '6', type: 'gaps', core: true, instruction: 'Complete with the correct possessive pronouns (1–7).', numbered: true, paras: ins(['yours', 'hers', 'mine', 'his', 'ours', 'theirs', 'yours']) },
        { id: 'u2wb-7', page: 163, num: '7', type: 'gaps', core: true, instruction: 'Complete the sentences with the words in bold.', noNums: true,
          paras: [['**1** ', A('your'), ' · ', A('his')], ['**2** ', A('our'), ' · ', A('yours')], ['**3** ', A('her'), ' · ', A('hers')], ['**4** ', A('my'), ' · ', A('mine')], ['**5** ', A('ours'), ' · ', A('Its')], ['**6** ', A('your'), ' · ', A('Their'), ' · ', A('yours')]] },
        { id: 'u2wb-8', page: 163, num: '8', type: 'gaps', core: true, instruction: 'Write the plural form where possible. If not possible, write –.', noNums: true,
          paras: [['guitar → ', A('guitars')], ['grandfather → ', A('grandfathers')], ['work → ', A('–', '-')], ['information → ', A('–', '-')], ['child → ', A('children')], ['person → ', A('people')], ['couple → ', A('couples')], ['money → ', A('–', '-')], ['time → ', A('–', '-', 'times')], ['parent → ', A('parents')]],
          tutorNote: 'time в значении «время» неисчисляемое (–); times = «разы» — тоже принимается.' },
        { id: 'u2wb-9a', page: 163, num: '9 (1)', type: 'multi', core: true, instruction: 'Ex. 9, sentence 1. Choose ALL correct answers.', options: ['A an', 'B some', 'C –'], answers: [1, 2] },
        { id: 'u2wb-9b', page: 163, num: '9 (2)', type: 'multi', core: true, instruction: 'Ex. 9, sentence 2.', options: ['A a', 'B –', 'C an'], answers: [1] },
        { id: 'u2wb-9c', page: 163, num: '9 (3)', type: 'multi', core: true, instruction: 'Ex. 9, sentence 3.', options: ['A a', 'B some', 'C –'], answers: [1, 2] },
        { id: 'u2wb-9d', page: 163, num: '9 (4)', type: 'multi', core: true, instruction: 'Ex. 9, sentence 4.', options: ['A –', 'B some', 'C a'], answers: [0] },
        { id: 'u2wb-9e', page: 163, num: '9 (5)', type: 'multi', core: true, instruction: 'Ex. 9, sentence 5.', options: ['A a', 'B –', 'C some'], answers: [1] },
        { id: 'u2wb-9f', page: 163, num: '9 (6)', type: 'multi', core: true, instruction: 'Ex. 9, sentence 6.', options: ['A a', 'B –', 'C an'], answers: [2] },
        { id: 'u2wb-10', page: 163, num: '10', type: 'gaps', core: true, instruction: 'Complete the pairs of sentences with the words or – in bold.', noNums: true,
          paras: [['**1** ', S(['some', 'a'], 'a'), ' · ', S(['some', 'a'], 'some')], ['**2** ', S(['an', '–'], 'an'), ' · ', S(['an', '–'], '–')], ['**3** ', S(['–', 'an'], 'an'), ' · ', S(['–', 'an'], '–')], ['**4** ', S(['some', 'a'], 'some'), ' · ', S(['some', 'a'], 'a')], ['**5** ', S(['a', '–'], '–'), ' · ', S(['a', '–'], 'a')]] },
        { id: 'u2wb-11', page: 163, num: '11', type: 'gaps', core: true, instruction: 'Complete Afia’s blog with the singular or plural form of the nouns (1–8).', numbered: true,
          paras: ins(['blog', 'family', 'people', 'wife', 'parents', 'daughters', 'half-sisters', 'fun']) }
      ]},
      { id: 'vocab', title: 'Vocabulary · p.164', items: [
        { id: 'u2wb-v1', page: 164, num: '1', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Complete the words in sentences 1–8 (first letters are given in the book).', numbered: true,
          paras: ins(['file sharing', 'using emojis', 'messaging', 'posting comments', 'blogging', 'calling', 'video calling', 'posting photos']) },
        { id: 'u2wb-v2', page: 164, num: '2', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Complete the phrases with the prepositions.', bank: ['about', 'at', 'at', 'in', 'into', 'of', 'on'], noNums: true,
          paras: [['be ', A('into')], ['be a fan ', A('of')], ['be bad ', A('at')], ['be crazy ', A('about')], ['be good ', A('at')], ['be interested ', A('in')], ['be keen ', A('on')]] },
        { id: 'u2wb-v3', page: 164, num: '3', tags: ['WRITE'], type: 'writing', core: true, min: 30, max: 90, checks: false, instruction: 'Write sentences about your friends and family. Use the phrases from Ex. 2 and the correct form of be.' },
        { id: 'u2wb-v4', page: 164, num: '4', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Complete the table. Female or male?', noNums: true,
          paras: [['half-brother ', S(['female', 'male'], 'male')], ['half-sister ', S(['female', 'male'], 'female')], ['husband ', S(['female', 'male'], 'male')], ['nephew ', S(['female', 'male'], 'male')],
            ['niece ', S(['female', 'male'], 'female')], ['stepfather ', S(['female', 'male'], 'male')], ['stepmother ', S(['female', 'male'], 'female')], ['wife ', S(['female', 'male'], 'female')]] },
        { id: 'u2wb-v5', page: 164, num: '5', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Complete the pairs of sentences with the words in bold.', noNums: true,
          paras: [['**1** ', A('couple'), ' · ', A('single parent')], ['**2** ', A('engaged'), ' · ', A('niece')], ['**3** ', A('married'), ' · ', A('divorced')]] },
        { id: 'u2wb-v6', page: 164, num: '6', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Choose the correct alternatives in Chung’s profile (1–8).', numbered: true,
          paras: [['', S(['about', 'at'], 'about')], ['', S(['into', 'of'], 'of')], ['', S(['at', 'in'], 'at')], ['', S(['about', 'in'], 'in')], ['', S(['calling', 'sharing'], 'calling')], ['', S(['engaged', 'divorced'], 'divorced')], ['', S(['half-brother', 'stepmother'], 'stepmother')], ['', S(['half-sister', 'niece'], 'half-sister')]] }
      ]},
      { id: 'read', title: 'Reading · p.165', items: [
        { id: 'u2wb-r1', page: 165, num: '1', tags: ['READ'], type: 'gaps', core: true, audio: { track: '93', note: 'Трек 93 (Workbook) не входит в комплект — читайте текст без аудио.' },
          instruction: 'Read the article. How many people does the text talk about?', paras: [['', A('2', 'two')]] },
        { id: 'u2wb-r2', page: 165, num: '2', tags: ['READ'], type: 'gaps', core: true, instruction: 'True or false?', numbered: true, paras: sels(TF, ['F', 'F', 'T', 'F']) },
        { id: 'u2wb-r3', page: 165, num: '3', tags: ['P', 'READ'], type: 'gaps', core: true, instruction: 'Choose the sentence A–H for each gap 1–5. Three sentences are extra.', numbered: true,
          paras: sels('ABCDEFGH'.split(''), ['C', 'E', 'H', 'A', 'F']) },
        { id: 'u2wb-rvp', page: 165, num: 'VP', tags: ['VIEWPOINTS'], type: 'writing', core: true, min: 20, max: 60, checks: false, instruction: 'Are you always honest when you are online? Why / why not? Write three sentences.' }
      ]},
      { id: 'rev', title: 'Review · pp.166–167', items: [
        { id: 'u2wb-rv1', page: 166, num: '1', type: 'gaps', core: true, instruction: 'Choose the correct alternatives (1–8).', numbered: true,
          paras: [['', S(['to', 'from'], 'from')], ['', S(['Their', 'My'], 'My')], ['', S(['engaged', 'divorced'], 'engaged')], ['', S(['yours', 'hers'], 'yours')], ['', S(['mum and dads’', 'mum and dad’s'], 'mum and dad’s')], ['', S(['about', 'of'], 'about')], ['', S(['into', 'in'], 'into')], ['', S(['work', 'works'], 'work')]] },
        { id: 'u2wb-rv2', page: 166, num: '2', type: 'gaps', core: true, instruction: 'Write one word for each gap (1–6).', numbered: true,
          paras: [['', A('Posting', 'Sharing')], ['', A('her')], ['', A('married', 'engaged')], ['', A('stepfather', 'stepdad')], ['', A('in')], ['', A('posts')]] },
        { id: 'u2wb-rv3', page: 166, num: '3–5', type: 'listen', core: true, audio: { track: '94–96', note: 'Подкаст (треки 94–96 Workbook) не входит в комплект — задание можно пропустить.' },
          instruction: 'Podcast. Ex. 3: T or F. Ex. 4: match 1–6 to A–H. Ex. 5: choose the last word in the first sentence.',
          inner: { type: 'gaps', numbered: true, answers: null, paras: [['Ex. 3: ', N()], ['Ex. 4: 1–6 ', N()], ['Ex. 5: 1–4 ', N()]] } },
        { id: 'u2wb-med', page: 166, num: 'M', tags: ['MEDIATION'], type: 'writing', core: true, min: 15, max: 60, checks: false,
          instruction: 'Mediation: translate a short dialogue into English: A — Мой брат спокойный. B — А мой брат нет! Мой брат и твой брат очень разные. A — А мой брат отлично ведёт блог.', adapted: 'В учебнике — с итальянского; у нас — с русского.' },
        { id: 'u2wb-w0', page: 166, num: 'VP', tags: ['VIEWPOINTS'], type: 'discuss', core: true, instruction: 'Is it important for friends to have things in common? Why / why not?' },
        { id: 'u2wb-w6', page: 166, num: '6', type: 'gaps', core: true, instruction: 'Read the email from Marco. What is his relationship to Tyler?', paras: [['He is Tyler’s ', A('cousin')]] },
        { id: 'u2wb-w7', page: 167, num: '7', type: 'multi', core: true, instruction: 'Tick the things that Marco has in common with his best friend.',
          options: ['books', 'blogging', 'clothes', 'music', 'kayaking', 'swimming', 'type of family'], answers: [0, 1, 4, 5] },
        { id: 'u2wb-w8', page: 167, num: '8', type: 'multi', core: true, instruction: 'Read Tyler’s reply. Which three things is his best friend a fan of?',
          options: ['music', 'video calling', 'clothes', 'sport', 'books'], answers: [0, 1, 2] },
        { id: 'u2wb-w9', page: 167, num: '9–10', type: 'gaps', core: true, instruction: 'Which phrases does Marco use? Which does Tyler use? Are they formal or informal?', noNums: true,
          paras: [['Marco — opening: ', S(['Hi', 'Hey', 'Hello', 'Dear Sir / Madam'], 'Hello'), ' closing: ', S(['See you soon', 'I’ll talk to you soon', 'Take care', 'Kind regards'], 'I’ll talk to you soon')],
            ['Tyler — opening: ', S(['Hi', 'Hey', 'Hello', 'Dear Sir / Madam'], 'Hey'), ' closing: ', S(['See you soon', 'I’ll talk to you soon', 'Take care', 'Kind regards'], 'Take care')],
            ['The phrases are ', S(['formal', 'informal'], 'informal')]] },
        { id: 'u2wb-w11', page: 167, num: '11', type: 'scores', core: true, instruction: 'Score Tyler’s email (0–10 for each point).', max: 10,
          items: ['includes all the correct information', 'correct phrases for opening and closing', 'careful thinking about the topic', 'expressions with be', 'possessive ’s and possessive pronouns', 'long enough (80–130 words)'] },
        { id: 'u2wb-w13', page: 167, num: '12–13', tags: ['WRITE'], type: 'writing', core: true, min: 80, max: 130, instruction: 'Choose the activities you will use (Ex. 12). Write your email to Marco (80–130 words).',
          plan: ['Informal opening', 'Who is your best friend?', 'What have you got in common? What is different?', 'Your families', 'Informal closing'] },
        { id: 'u2wb-w14', page: 167, num: '14', type: 'checklist', core: true, instruction: 'Use the checklist from Ex. 11 to score your email. Then improve it.',
          items: ['All the information', 'Opening and closing phrases', 'Careful thinking', 'Expressions with be', 'Possessive ’s / pronouns', '80–130 words'] },
        { id: 'u2wb-sa', page: 167, num: 'SA', type: 'review', core: true, cando: ['What was the most interesting part of Unit 2?', 'What was easy?', 'What was difficult?', 'What do I need to look at again?'] }
      ]}
    ]
  };
})();
