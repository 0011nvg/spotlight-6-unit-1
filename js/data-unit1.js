/* =========================================================
   PANORAMIC A2 · UNIT 1 "Identity"
   Student Book pp.11–20 · Grammar Practice p.133 · Workbook pp.156–161
   ФОРМАТ «ЛИСТ ОТВЕТОВ»: тексты и предложения учебника на сайт не копируются —
   ученик работает по книге (номер страницы и упражнения указан на каждой карточке),
   а сайт даёт поля ответа, автопроверку и ключ. Ключи составлены по учебнику.
   source:'added' = авторские задания (не из учебника): OGE, доп. практика.
   tutorCheck = ключа по аудио нет → преподаватель ставит ✓/✗.
   ========================================================= */
window.BOOK = {
  title: 'Panoramic A2',
  subtitle: 'Interactive English Studio',
  level: 'A2',
  units: [
    {
      id: 'u1', num: 1, title: 'Identity', pages: '11–20 · 133 · 156–161',
      skills: [
        ['Listening', 'Understanding positive and negative short forms'], ['Reading', 'Using key words to identify the main idea'],
        ['Writing', 'Linking ideas with and, also, too, but'], ['Speaking', 'Making introductions'],
        ['Grammar', 'be: positive and negative, questions and short answers; have got'],
        ['Vocabulary', 'Personality adjectives; Physical appearance; Adverbs of degree']
      ],
      lessons: ['u1-opener', 'u1-1', 'u1-2', 'u1-3', 'u1-4', 'u1-5', 'u1-6', 'u1-gr', 'u1-wb'],
      pending: []
    }
  ]
};
window.LESSONS = {};

(function () {
  /* helpers: компактная запись листа ответов */
  const A = (...a) => ({ a });                      // поле ввода, допустимые ответы
  const S = (opts, a) => ({ sel: opts, a });         // выпадающий список
  const N = () => ({ n: 1 });                        // поле без ключа (отметка преподавателя)
  const AB = ['A', 'B'], ABC = ['A', 'B', 'C'], ABCD = ['A', 'B', 'C', 'D'];
  const BOOKNOTE = p => 'Откройте учебник на с. ' + p + '.';
  const AUDIO = t => ({ track: t });                 // файл берётся из локальной аудиотеки (AudioLib)

  /* ---------------- OPENER · p.11 ---------------- */
  LESSONS['u1-opener'] = {
    id: 'u1-opener', unit: 'u1', code: '1.0', title: 'Identity', kicker: 'Unit opener', pages: '11', accent: 'yellow', time: '15–20 min',
    goal: 'Talk about what makes you “you”. Listen for key information.',
    sections: [
      { id: 'book', title: 'Textbook exercises · p.11', items: [
        { id: 'u1o-0', page: 11, num: '📷', source: 'added', type: 'reference', core: false, title: 'Story behind the photo · David',
          instruction: 'Look at the photo of David on p.11 and the picture below. Where is he? What is he doing? What can you see around him?',
          html: '<figure class="pfig" style="margin:0"><svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Иллюстрация: пловец в море среди рыб"><defs><linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FD3F7"/><stop offset=".55" stop-color="#2F8FD6"/><stop offset="1" stop-color="#1D4E89"/></linearGradient><linearGradient id="ray" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><rect width="640" height="360" rx="22" fill="url(#sea)"/><path d="M0 28 Q40 18 80 28 T160 28 T240 28 T320 28 T400 28 T480 28 T560 28 T640 28 V0 H0Z" fill="#CFF1FF"/><path d="M120 30 L60 360 H130 Z M300 30 L270 360 H330 Z M470 30 L500 360 H560 Z" fill="url(#ray)"/><path d="M0 330 Q90 300 170 322 T340 318 T520 326 T640 312 V360 H0Z" fill="#F2D49B"/><path d="M60 330 q-6 -40 6 -70 M70 330 q14 -36 2 -66 M560 326 q-10 -44 8 -80 M574 326 q12 -30 -2 -60" stroke="#3DAA82" stroke-width="7" fill="none" stroke-linecap="round"/><g transform="translate(250 150) rotate(-12)"> <path d="M-150 18 q30 -12 60 -4 l-6 16 q-30 -4 -58 4z" fill="#F6B88E" stroke="#1A1E33" stroke-width="3"/> <path d="M-150 32 q30 4 60 -6 l2 16 q-28 10 -58 4z" fill="#F6B88E" stroke="#1A1E33" stroke-width="3"/> <path d="M-170 10 l26 6 -4 18 -26 -2z M-172 34 l26 -2 2 16 -26 6z" fill="#FF4FA3" stroke="#1A1E33" stroke-width="3"/> <rect x="-96" y="-2" width="120" height="44" rx="22" fill="#3D3BFF" stroke="#1A1E33" stroke-width="3"/> <path d="M10 6 q40 -30 90 -40" stroke="#F6B88E" stroke-width="16" stroke-linecap="round" fill="none"/> <path d="M10 6 q40 -30 90 -40" stroke="#1A1E33" stroke-width="3" stroke-linecap="round" fill="none" opacity=".25"/> <path d="M14 34 q36 20 76 20" stroke="#F6B88E" stroke-width="16" stroke-linecap="round" fill="none"/> <circle cx="56" cy="18" r="28" fill="#F6B88E" stroke="#1A1E33" stroke-width="3"/> <path d="M30 4 q24 -26 54 0" fill="#FFD400" stroke="#1A1E33" stroke-width="3"/> <rect x="52" y="8" width="30" height="16" rx="8" fill="#BFE9FF" stroke="#1A1E33" stroke-width="3"/> <path d="M64 34 q8 6 16 0" stroke="#1A1E33" stroke-width="3" fill="none" stroke-linecap="round"/> <circle cx="104" cy="-10" r="5" fill="#fff" opacity=".8"/><circle cx="116" cy="-26" r="7" fill="#fff" opacity=".7"/><circle cx="124" cy="-48" r="4" fill="#fff" opacity=".7"/></g><defs><g id="f"><path d="M0 0 q22 -16 44 0 q-22 16 -44 0z" fill="#FF7A00" stroke="#1A1E33" stroke-width="2.5"/><path d="M44 0 l14 -10 v20z" fill="#FF7A00" stroke="#1A1E33" stroke-width="2.5"/><circle cx="10" cy="-2" r="3" fill="#1A1E33"/><path d="M20 -9 v18" stroke="#fff" stroke-width="3"/></g></defs><use href="#f" transform="translate(420 110)"/><use href="#f" transform="translate(470 150) scale(.8)"/><use href="#f" transform="translate(440 190) scale(.9)"/><use href="#f" transform="translate(520 95) scale(.7)"/><use href="#f" transform="translate(500 230) scale(1.1)"/><g transform="translate(150 255) scale(-1 1)"><path d="M0 0 q22 -16 44 0 q-22 16 -44 0z" fill="#FFD400" stroke="#1A1E33" stroke-width="2.5"/><path d="M44 0 l14 -10 v20z" fill="#FFD400" stroke="#1A1E33" stroke-width="2.5"/><circle cx="10" cy="-2" r="3" fill="#1A1E33"/></g><g transform="translate(110 290) scale(-.8 .8)"><path d="M0 0 q22 -16 44 0 q-22 16 -44 0z" fill="#FF4FA3" stroke="#1A1E33" stroke-width="2.5"/><path d="M44 0 l14 -10 v20z" fill="#FF4FA3" stroke="#1A1E33" stroke-width="2.5"/><circle cx="10" cy="-2" r="3" fill="#1A1E33"/></g></svg><figcaption class="muted small" style="padding:6px 10px">Авторская иллюстрация по мотивам темы урока (фото — в учебнике, с. 11).</figcaption></figure><p><b>Useful words:</b> swim in the sea · fish · underwater · goggles · a swimming club · bring people together</p>',
          doneLabel: 'Talked about it ✓' },
        { id: 'u1o-1', page: 11, num: '1', tags: ['THINK'], type: 'multi', core: true, selfOnly: true,
          instruction: 'Which things are an important part of YOUR identity? Tap them. Then compare with your tutor.',
          options: ['appearance', 'clothes', 'family', 'friends', 'hobbies and interests', 'possessions', 'things you are good at', 'your personality', 'your school grades', 'your school'], answers: [],
          free: true, tutorNote: 'Правильного ответа нет: ученик выбирает 3–4 пункта и объясняет: “… is important to me because …”. Преподаватель выбирает свои — сравниваете.' },
        { id: 'u1o-2', page: 11, num: '2', tags: ['WATCH', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('01'),
          instruction: 'Track 01. Which things are important to David? Tick ✓ or leave — for each item 1–8 in the book.',
          inner: { type: 'gaps', numbered: true, answers: null, paras: [
            ['swimming ', N()], ['fishing ', N()], ['food ', N()], ['swimming pools ', N()], ['friends ', N()], ['swimming competitions ', N()], ['teaching ', N()], ['summer holidays ', N()]] },
          tutorNote: 'Ученик пишет ✓ или ✗ в каждом поле, преподаватель отмечает. Ориентир по записи: плавание в море, рыбалка, друзья (“swimming brings people together”), обучение других — важно для Дэвида. Остальные пункты проверьте по треку.' },
        { id: 'u1o-3', page: 11, num: '+', source: 'added', tags: ['SPEAK'], type: 'discuss', core: false,
          instruction: 'Talk about the photo on p.11.',
          prompts: ['What can you see in the photo?', 'What do you think David is like?', 'Is a hobby an important part of your identity?'],
          model: 'I think he is fun and a bit crazy! Swimming is really important to him.' }
      ]}
    ]
  };

  /* ---------------- 1.1 READING · Your head or your heart? · pp.12–13 ---------------- */
  LESSONS['u1-1'] = {
    id: 'u1-1', unit: 'u1', code: '1.1', title: 'Your head or your heart?', kicker: 'Reading', pages: '12–13', accent: 'blue', time: '2 × 45 min',
    goal: 'Personality adjectives. Use key words to find the main idea. be: positive and negative.',
    split: 'Занятие 1: упр. 1–6. Занятие 2: упр. 7–11, Viewpoints, OGE.',
    sections: [
      { id: 'warm', title: 'Warm-up', items: [
        { id: 'u11-1', page: 12, num: '1', tags: ['THINK'], type: 'discuss', core: true,
          instruction: 'Read the introduction on p.12. Are you a thinking type (Figure A) or a feeling type (Figure B)?',
          prompts: ['I think I’m a thinking / feeling type because…'], followUp: ['And your best friend?', 'And your mum or dad?'] }
      ]},
      { id: 'book', title: 'Textbook exercises · pp.12–13', items: [
        { id: 'u11-2', page: 12, num: '2', tags: ['READ', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('02'),
          instruction: 'Track 02. Read and listen to the text on p.12. Complete the sentence with thinking or feeling.',
          inner: { type: 'gaps', paras: [['Lucas is a ', S(['thinking', 'feeling'], 'thinking'), ' type and Emily is a ', S(['thinking', 'feeling'], 'feeling'), ' type.']] } },
        { id: 'u11-3', page: 12, num: '3', tags: ['SKILL'], type: 'gaps', core: true,
          instruction: 'Reading skill: key words. Look at sentences 1–4 in Ex. 3. Write the adjective(s) and choose who the sentence describes.',
          boxes: [{ title: 'READING SKILL · Using key words', html: '<p>Nouns and adjectives carry the important information in a sentence. Find them first — they show you the main idea.</p>' }],
          numbered: true, paras: [
            ['adjective: ', A('fun'), ' → ', S(['Emily', 'Lucas'], 'Emily')],
            ['adjectives: ', { a: ['fair', 'honest'], group: 'g2' }, ' + ', { a: ['honest', 'fair'], group: 'g2' }, ' → ', S(['Emily', 'Lucas'], 'Lucas')],
            ['adjective: ', A('calm'), ' → ', S(['Emily', 'Lucas'], 'Emily')],
            ['adjectives: ', { a: ['nice', 'happy'], group: 'g4' }, ' + ', { a: ['happy', 'nice'], group: 'g4' }, ' → ', S(['Emily', 'Lucas'], 'Emily')]],
          hint: 'Предложение 3: “not calm” — кто волнуется, когда проблема или сюрприз?' },
        { id: 'u11-4', page: 12, num: '4', tags: ['OTE', 'P', 'READ'], type: 'mcq', core: true,
          instruction: 'Read the text again. For each question 1–4 choose A, B or C.',
          questions: [{ q: '1', options: ABC, a: 1 }, { q: '2', options: ABC, a: 1 }, { q: '3', options: ABC, a: 0 }, { q: '4 (NOT true)', options: ABC, a: 1 }],
          explanation: '1 B — статья о типах личности. 2 B — Лукас честный, справедливый и немного серьёзный. 3 A — когда друг грустит, Эмили тоже грустно. 4 B — «чувствующие» как раз заботливые, значит B неверно.',
          tutorNote: 'Попросите доказать каждый ответ строкой из текста (номер строки).' },
        { id: 'u11-5', page: 13, num: '5', tags: ['VOCABULARY'], type: 'gaps', core: true,
          instruction: 'Match the highlighted words in the text to pictures 1–8.',
          bank: ['calm', 'caring', 'clever', 'fair', 'fun', 'honest', 'loud', 'shy'], uniqueBank: true, numbered: true,
          paras: [['picture ', A('calm')], ['picture ', A('fair')], ['picture ', A('clever')], ['picture ', A('loud')], ['picture ', A('caring')], ['picture ', A('honest')], ['picture ', A('shy')], ['picture ', A('fun')]],
          links: [['See Vocabulary p.158', 'u1-wb', 'u1wb-v1']] },
        { id: 'u11-6', page: 13, num: '6', tags: ['VOCABULARY'], type: 'match', core: true,
          instruction: 'Match the words to their opposites.',
          left: ['1 happy', '2 quiet', '3 serious', '4 friendly', '5 outgoing'], right: ['A loud', 'B shy', 'C unfriendly', 'D sad', 'E fun'],
          rightShort: ['A loud', 'B shy', 'C unfriendly', 'D sad', 'E fun'], answers: [3, 0, 4, 2, 1] },
        { id: 'u11-7', page: 13, num: '7', tags: ['WATCH', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('03'),
          instruction: 'Track 03. Watch or listen. Choose the correct alternative in sentences 1–3.',
          inner: { type: 'gaps', numbered: true, paras: [['', S(['shy', 'friendly'], 'shy')], ['', S(['quiet', 'loud'], ['quiet', 'loud'])], ['', S(['outgoing', 'shy'], 'outgoing')]] },
          tutorNote: 'Пункт 2 сверьте по треку (в автоключе приняты оба варианта). 1 — shy, 3 — outgoing (“I am fun and outgoing”).' },
        { id: 'u11-8', page: 13, num: '8', tags: ['COMMUNICATION'], type: 'discuss', core: true,
          instruction: 'Who is similar to your best friend: Antonia, Jess, Lucas or Emily? Why?',
          adapted: 'В учебнике: in pairs. Ученик отвечает, преподаватель задаёт вопросы.', model: 'My best friend is similar to Lucas. He’s very honest and a bit serious.' },
        { id: 'u11-9', page: 13, num: '9', tags: ['GRAMMAR'], type: 'gaps', core: true,
          instruction: 'Grammar in context: be — positive and negative. Complete rules 1–3 with age, long, short.',
          bank: ['age', 'long', 'short'], uniqueBank: true, numbered: true, paras: [['', A('age')], ['', A('long')], ['', A('short')]],
          links: [['Grammar Practice p.133', 'u1-gr', 'u1g-1'], ['Grammar Use p.156', 'u1-wb', 'u1wb-1']] },
        { id: 'u11-10', page: 13, num: '10', tags: ['GRAMMAR'], type: 'gaps', core: true,
          instruction: 'Choose the correct alternative.', numbered: true,
          paras: [['', S(['She’s', 'She isn’t'], 'She isn’t')], ['', S(['I’m', 'I’m not'], 'I’m not')], ['', S(['He’s', 'He isn’t'], 'He’s')], ['', S(['they’re', 'they aren’t'], 'they’re')], ['', S(['You’re', 'You aren’t'], 'You aren’t')]],
          hint: 'Посмотрите на вторую часть предложения — она подсказывает: loud ≠ quiet.' },
        { id: 'u11-11', page: 13, num: '11', tags: ['GRAMMAR'], type: 'gaps', core: true,
          instruction: 'Complete Harry’s description of Lucas with the correct forms of be (gaps 1–9).', numbered: true,
          paras: [['', A('is', '’s')], ['', A('are not', 'aren’t')], ['', A('is', '’s')], ['', A('are')], ['', A('is', '’s')], ['', A('is not', 'isn’t')], ['', A('are not', 'aren’t')], ['', A('am', '’m')], ['', A('is', '’s')]],
          hint: '2: opinions — множественное число; 6–7: Лукас тихий, значит loud/fun — с отрицанием.' },
        { id: 'u11-vp', page: 13, num: 'VP', tags: ['VIEWPOINTS'], type: 'discuss', core: true,
          instruction: 'What words describe you, your family and your friends? Use adjectives from Ex. 5 and 6.',
          prompts: ['I think I’m…', 'I’m not…', 'In my mum’s opinion, I’m…', 'My parents are…', 'My best friend is…'] }
      ]},
      { id: 'oge', title: 'OGE Practice — Exam Skills', items: [
        { id: 'u11-oge1', source: 'added', oge: 'builder', type: 'gaps', core: false, title: 'Exam Skills Builder · Grammar transformation',
          instruction: 'Change the word in capitals so that it fits the gap.', ogeNote: 'Авторское задание в формате ОГЭ (грамматические преобразования). Не из банка ФИПИ.',
          heading: 'My cousin Mia', numbered: true,
          paras: [['Mia ', A('is', '’s'), ' fifteen and she lives in Sochi. — BE'], ['Her parents ', A('are'), ' doctors. — BE'],
            ['She ', A('is not', 'isn’t'), ' shy at all – she loves parties. — NOT BE'], ['Her brothers are ', A('older'), ' than Mia. — OLD'],
            ['I ', A('am not', '’m not'), ' as outgoing as Mia. — NOT BE'], ['We ', A('are', '’re'), ' best friends! — BE']] },
        { id: 'u11-oge2', source: 'added', oge: 'builder', type: 'gaps', core: false, title: 'Exam Skills Builder · Word formation',
          instruction: 'Form a word from the word in capitals so that it fits the gap.', ogeNote: 'Авторское задание в формате ОГЭ (словообразование). Не из банка ФИПИ.', numbered: true,
          paras: [['My brother is never nice to new people. He is ', A('unfriendly'), '. — FRIEND'], ['Sasha always tells the truth. He is very ', A('honest'), '. — HONESTY'],
            ['Thank you for your ', A('help'), '! — HELPFUL'], ['She is a very ', A('caring'), ' person. — CARE'],
            ['Don’t be ', A('sad'), ' – it’s a small problem. — SADNESS'], ['Liza feels ', A('happy'), ' when her friends are with her. — HAPPINESS']] }
      ]},
      { id: 'review', title: 'Lesson review', items: [
        { id: 'u11-r', source: 'added', type: 'review', core: true, cando: ['I can name 10 personality adjectives and their opposites.', 'I can find key words to understand the main idea.', 'I can use am / is / are and isn’t / aren’t.'] }
      ]}
    ]
  };

  /* ---------------- 1.2 LISTENING · A class rep · pp.14–15 ---------------- */
  LESSONS['u1-2'] = {
    id: 'u1-2', unit: 'u1', code: '1.2', title: 'A class rep', kicker: 'Listening', pages: '14–15', accent: 'pink', time: '2 × 45 min', sdg: '4 Quality education',
    goal: 'Adverbs of degree. Hear positive and negative short forms. be: questions and short answers.',
    split: 'Занятие 1: упр. 1–5. Занятие 2: упр. 6–12, OGE.',
    sections: [
      { id: 'warm', title: 'Warm-up', items: [
        { id: 'u12-1', page: 14, num: '1', tags: ['THINK'], type: 'discuss', core: true,
          instruction: 'Read the poster on p.14. Would you like to be a class representative? Why or why not?',
          followUp: ['Is there a class rep in your class?', 'What does he / she do?'] },
        { id: 'u12-vp1', page: 14, num: 'VP', tags: ['VIEWPOINTS', 'CITIZENSHIP'], type: 'multi', core: true, selfOnly: true,
          instruction: 'What qualities are important in a class representative? Tap them and add your own ideas.',
          options: ['caring', 'clever', 'fair', 'organised', 'outgoing', 'honest', 'calm', 'friendly'], answers: [], free: true,
          adapted: 'В учебнике: in groups. Ученик выбирает и объясняет, преподаватель спорит с одним выбором.' }
      ]},
      { id: 'book', title: 'Textbook exercises · pp.14–15', items: [
        { id: 'u12-2', page: 14, num: '2', tags: ['LISTEN'], type: 'listen', core: true, audio: AUDIO('04'),
          instruction: 'Track 04. Listen to the interview with Reuben and Daniella. What are the questions about?',
          inner: { type: 'mcq', questions: [{ q: 'The questions are about…', options: ['A their personalities and school grades', 'B their personalities and ideas', 'C their friends and ideas'], a: 1 }] } },
        { id: 'u12-3', page: 14, num: '3', tags: ['OTE', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('04'),
          instruction: 'Track 04 again. Match beginnings 1–5 with endings A–H. Two endings are extra. 0 = C.',
          inner: { type: 'gaps', numbered: true, paras: [['', S(['A', 'B', 'D', 'E', 'F', 'G', 'H'], 'D')], ['', S(['A', 'B', 'D', 'E', 'F', 'G', 'H'], 'A')], ['', S(['A', 'B', 'D', 'E', 'F', 'G', 'H'], 'E')], ['', S(['A', 'B', 'D', 'E', 'F', 'G', 'H'], 'B')], ['', S(['A', 'B', 'D', 'E', 'F', 'G', 'H'], 'G')]] },
          tutorNote: 'Ключ сверен по записи: 1 D (food in the cafeteria, new school clubs), 2 A, 3 E, 4 B, 5 G. Лишние — F и H. Если пункт 5 расходится с вашим прослушиванием — поправьте.' },
        { id: 'u12-4', page: 14, num: '4', tags: ['LISTEN', 'VOCABULARY'], type: 'listen', core: true, audio: AUDIO('04'),
          instruction: 'Read the Vocabulary development box. Listen again and complete the summary with adverbs of degree (gaps 1–8).',
          boxes: [{ title: 'VOCABULARY DEVELOPMENT · Adverbs of degree', html: '<p>Adverbs of degree make an adjective weaker or stronger. They go after <i>be</i> and before the adjective.</p><p><b>a bit</b> → <b>quite</b> → <b>very / really</b> (weaker → stronger)</p>' }],
          inner: { type: 'gaps', numbered: true, paras: [['', A('quite')], ['', A('a bit')], ['', A('very', 'really')], ['', A('quite')], ['', A('very', 'really')], ['', A('very', 'really')], ['', A('really')], ['', A('very')]] },
          tutorNote: 'Ориентир по записи: Reuben — quite shy, a bit serious, very caring, quite loud. Daniella — fair, very caring, very honest, ideas really great / very important. Сверьте пункты 3, 5, 6 на слух.' },
        { id: 'u12-5', page: 14, num: '5', tags: ['MEDIATION', 'WRITE'], type: 'writing', core: true, min: 40, max: 80, checks: false,
          instruction: 'Write an email to a friend about the two candidates, Reuben and Daniella. Use adverbs of degree.',
          model: 'Hi Max! There are two candidates for class rep. Reuben is quite shy and a bit serious, but he’s very caring…',
          links: [['See Vocabulary p.158', 'u1-wb', 'u1wb-v3']] },
        { id: 'u12-6', page: 15, num: '6', tags: ['LISTEN', 'SKILL'], type: 'listen', core: true, audio: AUDIO('05'),
          instruction: 'Track 05. Read the Listening skill. Listen and repeat the examples.',
          boxes: [{ title: 'LISTENING SKILL · Positive and negative short forms', html: '<p>In positive sentences the short form of <i>be</i> is not stressed: <i>I’m outgoing.</i> In negative sentences we stress <b>not / isn’t / aren’t</b>: <i>I’m <b>not</b> outgoing. It <b>isn’t</b> fair.</i></p>' }],
          inner: { type: 'open', questions: ['Repeat each example after the speaker. Which word is stressed in the negative sentences?'], key: ['not / aren’t / isn’t'] } },
        { id: 'u12-7', page: 15, num: '7', tags: ['LISTEN'], type: 'listen', core: true, audio: AUDIO('06'),
          instruction: 'Track 06. What do the other students say? Choose the alternative, then listen and check.',
          inner: { type: 'gaps', numbered: true, paras: [['Reuben ', S(['’s', 'isn’t'], '’s'), ' quite serious.'], ['Serious students ', S(['are', 'aren’t'], 'are'), ' good representatives.'], ['Reuben ', S(['’s', 'isn’t'], 'isn’t'), ' very outgoing.'], ['Daniella ', S(['’s', 'isn’t'], '’s'), ' very loud.'], ['Reuben and Daniella ', S(['are', 'aren’t'], 'aren’t'), ' quiet in meetings.']] },
          tutorNote: 'После проверки — произнести предложения, выделяя isn’t / aren’t голосом.' },
        { id: 'u12-vp2', page: 15, num: 'VP', tags: ['VIEWPOINTS'], type: 'discuss', core: true,
          instruction: 'Who is the right person for class representative: Reuben or Daniella? Why?', choose: { from: ['Reuben', 'Daniella'], pick: 1 },
          model: 'I think Daniella is the right person. She’s really honest and her ideas are great.' },
        { id: 'u12-8', page: 15, num: '8', tags: ['GRAMMAR'], type: 'gaps', core: true,
          instruction: 'Grammar in context: be — questions and short answers. Match 1–2 with A–B, then match the question words to their meanings.',
          noNums: true, paras: [['**1** We answer wh- questions → ', S(AB, 'B')], ['**2** We answer yes / no questions → ', S(AB, 'A')],
            ['place → ', S(['what', 'when', 'where', 'who', 'why'], 'where')], ['person → ', S(['what', 'when', 'where', 'who', 'why'], 'who')], ['time / date → ', S(['what', 'when', 'where', 'who', 'why'], 'when')],
            ['reason → ', S(['what', 'when', 'where', 'who', 'why'], 'why')], ['object → ', S(['what', 'when', 'where', 'who', 'why'], 'what')]],
          links: [['Grammar Practice p.133', 'u1-gr', 'u1g-3'], ['Grammar Use p.156', 'u1-wb', 'u1wb-5']] },
        { id: 'u12-9', page: 15, num: '9', tags: ['SPEAK'], type: 'mcq', core: true,
          instruction: 'Choose the correct answers (A or B). Then ask your tutor the questions and give your own answers.',
          questions: [{ q: '1', options: AB, a: 1 }, { q: '2', options: AB, a: 0 }, { q: '3', options: AB, a: 1 }, { q: '4', options: AB, a: 1 }],
          explanation: 'GET IT RIGHT! В кратком положительном ответе нет сокращения: Yes, I am. (не Yes, I’m.)' },
        { id: 'u12-10', page: 15, num: '10', tags: ['EMPLOYABILITY'], type: 'gaps', core: true,
          instruction: 'Write questions 1–4 using the prompts. Add question words if necessary.', numbered: true,
          paras: [['', A('Is a school council good for the school?')], ['', A('Who are the reps in your class?', 'Who are the class reps?')],
            ['', A('Are they good reps?')], ['', A('When are the meetings?')]],
          hint: 'Посмотрите на ответ B: “Lucy and George” — это люди; “on Fridays” — это время.' },
        { id: 'u12-11', page: 15, num: '11', tags: ['PRONUNCIATION'], type: 'listen', core: true, audio: AUDIO('07'),
          instruction: 'Track 07. Read the Pronunciation box, listen and repeat. Is the intonation of questions 1–4 in Ex. 10 rising (R) or falling (F)?',
          boxes: [{ title: 'PRONUNCIATION · Intonation in questions', html: '<p>Yes / no questions ↗ rising. Wh- questions ↘ falling.</p>' }],
          inner: { type: 'gaps', numbered: true, paras: [['', S(['R', 'F'], 'R')], ['', S(['R', 'F'], 'F')], ['', S(['R', 'F'], 'R')], ['', S(['R', 'F'], 'F')]] } },
        { id: 'u12-12', page: 15, num: '12', tags: ['SPEAK'], type: 'discuss', core: true,
          instruction: 'Read the conversation in Ex. 10 aloud with your tutor. Pay attention to your intonation.', adapted: 'Ученик — A, преподаватель — B, затем меняетесь.' }
      ]},
      { id: 'oge', title: 'OGE Practice — Exam Skills', items: [
        { id: 'u12-oge1', source: 'added', oge: 'builder', type: 'gaps', core: false, title: 'Exam Skills Builder · Short answers',
          instruction: 'Answer the questions with short answers. Use the information in brackets.', ogeNote: 'Авторское задание для устной части ОГЭ (диалог-расспрос). Не из банка ФИПИ.', numbered: true,
          paras: [['Is your teacher strict? (✓) — ', A('Yes, she is.', 'Yes, he is.')], ['Are you a class rep? (✗) — ', A('No, I am not.', 'No, I’m not.')],
            ['Are your friends outgoing? (✓) — ', A('Yes, they are.')], ['Is the meeting on Monday? (✗) — ', A('No, it isn’t.', 'No, it’s not.', 'No, it is not.')],
            ['Am I late? (✗) — ', A('No, you aren’t.', 'No, you’re not.', 'No, you are not.')]] }
      ]},
      { id: 'review', title: 'Lesson review', items: [
        { id: 'u12-r', source: 'added', type: 'review', core: true, cando: ['I can use a bit, quite, very and really.', 'I can hear the difference between I’m and I’m not.', 'I can ask and answer questions with be.'] }
      ]}
    ]
  };

  /* ---------------- 1.3 WRITING · A new friend · pp.16–17 ---------------- */
  LESSONS['u1-3'] = {
    id: 'u1-3', unit: 'u1', code: '1.3', title: 'A new friend', kicker: 'Writing', pages: '16–17', accent: 'yellow', time: '2 × 45 min',
    goal: 'have got. Physical appearance. Link ideas with and, also, too, but. Write a profile.',
    split: 'Занятие 1: упр. 1–8. Занятие 2: упр. 9–14, Viewpoints.',
    sections: [
      { id: 'warm', title: 'Warm-up', items: [
        { id: 'u13-1', page: 16, num: '1', tags: ['THINK'], type: 'discuss', core: true,
          instruction: 'Do you agree or disagree with sentences 1–4 on p.16? Compare your opinion with your tutor.',
          prompts: ['I agree / disagree with sentence 1 because…'], followUp: ['Have you and your best friend got the same interests?'] }
      ]},
      { id: 'book', title: 'Textbook exercises · pp.16–17', items: [
        { id: 'u13-2', page: 16, num: '2', tags: ['READ'], type: 'gaps', core: true,
          instruction: 'Read Sam’s profile. Correct the errors in sentences 1–5. Write the correct sentence.', numbered: true,
          paras: [['', A('Sam is really into water sports.', 'He is really into water sports.', 'He’s really into water sports.')],
            ['', A('He’s got a lot of computer games.', 'He has got a lot of computer games.')],
            ['', A('He’s got short curly brown hair.', 'He has got short curly brown hair.', 'He’s got brown hair.', 'He has got brown hair.', 'He’s got short brown hair.', 'He’s got curly brown hair.')],
            ['', A('He’s got brown eyes.', 'He has got brown eyes.')],
            ['', A('He’s very outgoing.', 'He is very outgoing.', 'He’s very friendly.', 'He is very friendly.')]] },
        { id: 'u13-3', page: 16, num: '3', tags: ['GRAMMAR'], type: 'match', core: true,
          instruction: 'Grammar in context: have got. Match sentences A–D to the uses 1–4.',
          left: ['1 family and friends', '2 physical appearance', '3 possessions', '4 pets'], right: ['A', 'B', 'C', 'D'], rightShort: ['A', 'B', 'C', 'D'], answers: [0, 3, 1, 2],
          explanation: 'GET IT RIGHT! Возраст — с be: I’m 16 years old. (не I’ve got 16 years.)',
          links: [['Grammar Practice p.133', 'u1-gr', 'u1g-5'], ['Grammar Use p.157', 'u1-wb', 'u1wb-9']] },
        { id: 'u13-4', page: 16, num: '4', tags: ['GRAMMAR'], type: 'gaps', core: true,
          instruction: 'Choose the correct alternative to complete Clara’s profile (1–7).', numbered: true,
          paras: [['', S(['’s got', '’ve got'], '’ve got')], ['', S(['’ve got', 'haven’t got'], 'haven’t got')], ['', S(['’s got', '’ve got'], '’s got')], ['', S(['has got', 'have got'], 'have got')],
            ['', S(['’s got', '’ve got'], '’s got')], ['', S(['’s got', '’ve got'], '’ve got')], ['', S(['hasn’t got', 'haven’t got'], 'hasn’t got')]] },
        { id: 'u13-5', page: 17, num: '5', tags: ['GRAMMAR'], type: 'gaps', core: true,
          instruction: 'Complete Taylor’s profile with the correct form of be or have got (1–9).', numbered: true,
          paras: [['', A('am', '’m')], ['', A('have got', '’ve got')], ['', A('have got', '’ve got')], ['', A('have not got', 'haven’t got')], ['', A('has got', '’s got')],
            ['', A('have got', '’ve got')], ['', A('is', '’s')], ['', A('am', '’m')], ['', A('am', '’m')]],
          hint: '“into rock music”, “quite shy”, “not serious” → be. Предметы, братья, питомцы, глаза → have got.' },
        { id: 'u13-6', page: 17, num: '6', tags: ['VOCABULARY'], type: 'mcq', core: true,
          instruction: 'Read Sam’s profile again. Which photo (1–4) is Sam?',
          questions: [{ q: 'Sam is photo…', options: ['1', '2', '3', '4'], a: 1 }],
          explanation: 'Короткие кудрявые тёмные волосы, тёмная кожа, улыбка — фото 2.', links: [['See Vocabulary p.158', 'u1-wb', 'u1wb-v4']] },
        { id: 'u13-7', page: 17, num: '7', tags: ['VOCABULARY'], type: 'gaps', core: true,
          instruction: 'Look at the photos in Ex. 6. Choose the words that describe each boy.',
          noNums: true, paras: [
            ['**Boy 1** hair style ', S(['curly', 'wavy', 'straight'], 'straight'), ' colour ', S(['brown', 'blond'], 'brown'), ' length ', S(['long', 'short', 'medium-length'], ['short', 'medium-length']), ' skin ', S(['fair', 'dark'], 'fair')],
            ['**Boy 2** hair style ', S(['curly', 'wavy', 'straight'], 'curly'), ' colour ', S(['brown', 'blond'], 'brown'), ' length ', S(['long', 'short', 'medium-length'], 'short'), ' skin ', S(['fair', 'dark'], 'dark')],
            ['**Boy 3** hair style ', S(['curly', 'wavy', 'straight'], ['straight', 'wavy']), ' colour ', S(['brown', 'blond'], 'blond'), ' length ', S(['long', 'short', 'medium-length'], 'long'), ' skin ', S(['fair', 'dark'], 'fair')],
            ['**Boy 4** hair style ', S(['curly', 'wavy', 'straight'], ['curly', 'wavy']), ' colour ', S(['brown', 'blond'], 'brown'), ' length ', S(['long', 'short', 'medium-length'], ['medium-length', 'short']), ' skin ', S(['fair', 'dark'], 'fair')]],
          tutorNote: 'Где фото допускает два прочтения (длина у мальчика 1 и 4, curly/wavy у 3 и 4), автоключ принимает оба варианта.' },
        { id: 'u13-8', page: 17, num: '8', tags: ['SPEAK'], type: 'discuss', core: true,
          instruction: 'Describe one of the other boys in Ex. 6. Can your tutor guess who you are describing?', model: 'He’s got long, straight, blond hair and fair skin. Who is it?' },
        { id: 'u13-9', page: 17, num: '9', tags: ['SKILL'], type: 'gaps', core: true,
          instruction: 'Read the Writing skill. Choose the correct alternative (1–5).',
          boxes: [{ title: 'WRITING SKILL · and, also, too, but', html: '<p><b>and, also, too</b> add similar ideas; <b>but</b> links contrasting ideas.</p><p><b>also</b> goes after <i>be</i> (<i>I’m also friendly</i>) and between <i>have</i> and <i>got</i> (<i>I’ve also got a dog</i>). <b>too</b> goes at the end of a clause.</p>' }],
          numbered: true, paras: [['', S(['also', 'and'], 'and')], ['', S(['also', 'too'], 'also')], ['', S(['and', 'but'], 'but')], ['', S(['also', 'too'], 'too')], ['', S(['and', 'also'], 'also')]] },
        { id: 'u13-10', page: 17, num: '10', tags: ['KEY PHRASES'], type: 'match', core: true,
          instruction: 'Find the Key phrases in Sam’s profile. What does he use each phrase for?',
          left: ['I’m (really) into… / I’m interested in…', 'I’ve got a lot of…', 'I haven’t got (any)…', 'My hair is… / My eyes are… / My skin is…', '…are / is very important to me.'],
          right: ['hobbies', 'possessions', 'appearance', 'relationships'], rightShort: ['hobbies', 'possessions', 'appearance', 'relationships'], answers: [0, 1, 0, 2, 3],
          tutorNote: '“I haven’t got time for other sports” — про хобби. Принимайте и “possessions”, если ученик объясняет по-другому.' },
        { id: 'u13-11', page: 17, num: '11', tags: ['WRITE'], type: 'writing', core: true, min: 60, max: 100,
          instruction: 'Write your profile for the international friends website (60–100 words). Use and, also, too, but and the Key phrases.',
          plan: ['Name, age, where you’re from', 'Family and pets', 'Hobbies and interests', 'Appearance', 'Personality'],
          model: 'My name’s Alina. I’m 13 and I’m from Krasnodar. I’ve got a brother called Ilya…' },
        { id: 'u13-12', page: 17, num: '12', tags: ['CHECK & REFLECT'], type: 'checklist', core: true,
          instruction: 'Check your profile.', adapted: 'В учебнике: обмен профилями с партнёром. Ученик проверяет свой текст, затем преподаватель.',
          items: ['Is the spelling and grammar correct?', 'Are the sentences with and, also, too and but correct?'] },
        { id: 'u13-13', page: 17, num: '13', tags: ['WRITE'], type: 'discuss', core: true, instruction: 'Use the feedback to rewrite your profile.', adapted: 'Переписать профиль дома; на следующем занятии — сравнить версии.' },
        { id: 'u13-14', page: 17, num: '14', tags: ['COMMUNICATION'], type: 'discuss', core: true, instruction: 'Read other profiles and discuss possible matches for Sam.', adapted: 'Преподаватель приносит 2–3 профиля (свой, вымышленные) — выбираете друга для Сэма.' },
        { id: 'u13-vp', page: 17, num: 'VP', tags: ['VIEWPOINTS'], type: 'discuss', core: true, instruction: 'When you meet someone new, what are the first things you want to know about them?' }
      ]},
      { id: 'review', title: 'Lesson review', items: [
        { id: 'u13-r', source: 'added', type: 'review', core: true, cando: ['I can use have got / has got and the negative forms.', 'I can describe hair, eyes and skin.', 'I can link ideas with and, also, too and but.', 'I can write a short profile about me.'] }
      ]}
    ]
  };

  /* ---------------- 1.4 SPEAKING · Nice to meet you · p.18 ---------------- */
  LESSONS['u1-4'] = {
    id: 'u1-4', unit: 'u1', code: '1.4', title: 'Nice to meet you', kicker: 'Speaking', pages: '18', accent: 'blue', time: '45 min', sdg: '4 Quality education',
    goal: 'Make introductions. Ask questions to continue a conversation.',
    sections: [
      { id: 'book', title: 'Textbook exercises · p.18', items: [
        { id: 'u14-1', page: 18, num: '1', tags: ['THINK'], type: 'multi', core: true, selfOnly: true, free: true, answers: [],
          instruction: 'Which two topics do you normally discuss with a new friend?',
          options: ['clothes', 'friendships', 'music', 'school', 'TV shows', 'sport', 'weather', 'your family', 'your health', 'your problems'] },
        { id: 'u14-2', page: 18, num: '2', tags: ['WATCH', 'LISTEN', 'READ'], type: 'listen', core: true, audio: AUDIO('08'),
          instruction: 'Track 08. Which topics from Ex. 1 do they discuss? What have Eddie and Dani got in common?',
          inner: { type: 'multi', options: ['clothes', 'friendships', 'music', 'school', 'TV shows', 'sport', 'weather', 'your family', 'your health', 'your problems'], answers: [3, 5] },
          followUp: ['What have Eddie and Dani got in common? → They are both into sport / football and their favourite team is Chelsea.'] },
        { id: 'u14-3', page: 18, num: '3', tags: ['KEY PHRASES'], type: 'gaps', core: true,
          instruction: 'Read the Speaking skill and Key phrases. Write A’s line in dialogues 1–4.',
          boxes: [{ title: 'SPEAKING SKILL · Making introductions', html: '<p>When you introduce someone, give some details about the person. When you meet someone new, ask a question about those details to keep the conversation going.</p>' }],
          numbered: true, paras: [['A: ', A('Nice to meet you.', 'Hi, nice to meet you.', 'Hello, nice to meet you.')],
            ['A: ', A('How’s it going?', 'How are you?', 'Are you OK?')],
            ['A: ', A('What’s your favourite subject?', 'What is your favourite subject?')],
            ['A: ', A('Are you into sport?', 'Are you interested in sport?', 'Are you into tennis?', 'Are you interested in tennis?', 'Are you into sports?')]] },
        { id: 'u14-4', page: 18, num: '4', tags: ['SPEAK'], type: 'gaps', core: true,
          instruction: 'Think of a question to ask after each introduction 1–3.', numbered: true,
          paras: [['', { open: true, key: 'What’s your favourite band?' }], ['', { open: true, key: 'Where are you from? / How’s it going?' }], ['', { open: true, key: 'Who’s your favourite player?' }]],
          tutorNote: 'Свободный ответ: главное — вопрос по деталям из представления (music, new student, basketball).' },
        { id: 'u14-5', page: 18, num: '5', tags: ['SPEAK'], type: 'discuss', core: true,
          instruction: 'Imagine one of you is new at school. Introduce each other and ask at least three questions.',
          adapted: 'Ролевая игра 1:1: преподаватель представляет “нового ученика” (игрушку Кекса, фото), ученик знакомится и задаёт 3 вопроса; потом наоборот.' }
      ]},
      { id: 'review', title: 'Lesson review', items: [
        { id: 'u14-r', source: 'added', type: 'review', core: true, cando: ['I can introduce a friend.', 'I can greet a new person and answer “How’s it going?”.', 'I can ask three questions to continue a conversation.'] }
      ]}
    ]
  };

  /* ---------------- 1.5 CULTURE · Pets in the UK · p.19 ---------------- */
  LESSONS['u1-5'] = {
    id: 'u1-5', unit: 'u1', code: '1.5', title: 'Pets in the UK', kicker: 'Culture', pages: '19', accent: 'orange', time: '45 min',
    goal: 'Understand numbers in a documentary. Talk about pets.',
    sections: [
      { id: 'book', title: 'Textbook exercises · p.19', items: [
        { id: 'u15-1', page: 19, num: '1', tags: ['THINK'], type: 'discuss', core: true, instruction: 'Answer questions 1–3 on p.19 about pets.',
          prompts: ['Have you got a pet? Has anyone in your family got a pet?', 'What do the pets look like? What are their personalities?', 'What animals are popular pets in your region?'] },
        { id: 'u15-2', page: 19, num: '2', tags: ['WATCH', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('09'),
          instruction: 'Track 09. Choose A, B or C for questions 1–8. Write the letter.',
          inner: { type: 'gaps', numbered: true, answers: null, paras: [['', N()], ['', N()], ['', N()], ['', N()], ['', N()], ['', N()], ['', N()], ['', N()]] },
          tutorNote: 'Документальный фрагмент: ученик пишет букву, преподаватель отмечает ✓/✗ после второго прослушивания.' },
        { id: 'u15-3', page: 19, num: '3', tags: ['WATCH', 'LISTEN'], type: 'listen', core: true, audio: AUDIO('09'),
          instruction: 'Track 09 again. Complete sentences 1–3 with the numbers you hear.',
          inner: { type: 'gaps', numbered: true, answers: null, paras: [['', N(), ' per cent'], ['', N(), ' and a half million dogs'], ['', N(), ' million cats']] },
          tutorNote: 'Числа сверяйте с ответами упр. 2 (вопросы 3 и 4).' },
        { id: 'u15-4', page: 19, num: '4', tags: ['VOCABULARY'], type: 'gaps', core: true,
          instruction: 'Complete sentences 1–5 with the adjectives.', bank: ['big', 'caring', 'friendly', 'loud', 'small'], uniqueBank: true, numbered: true,
          paras: [['', A('friendly')], ['', A('caring')], ['', A('small')], ['', A('big')], ['', A('loud')]] },
        { id: 'u15-5', page: 19, num: '5', tags: ['SPEAK', 'REAL WORLD'], type: 'discuss', core: true, instruction: 'Ask and answer questions 1–3 in Ex. 5.',
          prompts: ['Are you an animal lover? What are your favourite animals? Why?', 'What are some popular farms or zoos in your region? Do you visit them?', 'Is it good for families with children to have a pet? Why / why not?'] },
        { id: 'u15-6', page: 19, num: '6', tags: ['CITIZENSHIP', 'WRITE'], type: 'writing', core: true, min: 40, max: 90, checks: false,
          instruction: 'Research how to look after a pet of your choice. Make a poster with five pieces of advice.',
          plan: ['Food and water', 'Home / cage / bed', 'Exercise and play', 'Cleaning', 'Visits to the vet'],
          model: 'How to look after a hamster: 1 Give it fresh water every day. 2 …' }
      ]},
      { id: 'review', title: 'Lesson review', items: [
        { id: 'u15-r', source: 'added', type: 'review', core: true, cando: ['I can catch numbers and percentages when I listen.', 'I can describe a pet’s appearance and personality.', 'I can give advice about looking after a pet.'] }
      ]}
    ]
  };

  /* ---------------- 1.6 REVIEW · p.20 ---------------- */
  LESSONS['u1-6'] = {
    id: 'u1-6', unit: 'u1', code: '1.6', title: 'Review', kicker: 'Review', pages: '20', accent: 'pink', time: '45 min',
    goal: 'Revise Unit 1: be, have got, personality and appearance, adverbs of degree.',
    sections: [
      { id: 'book', title: 'Textbook exercises · p.20', items: [
        { id: 'u16-1', page: 20, num: '1', tags: ['P'], type: 'mcq', core: true, instruction: 'For each gap 1–6 choose A, B, C or D.',
          questions: [{ q: '1', options: ABCD, a: 1 }, { q: '2', options: ABCD, a: 2 }, { q: '3', options: ABCD, a: 0 }, { q: '4', options: ABCD, a: 2 }, { q: '5', options: ABCD, a: 3 }, { q: '6', options: ABCD, a: 0 }],
          explanation: '1 outgoing (loud and…) · 2 very · 3 isn’t (easy) · 4 has got (a round face) · 5 straight · 6 really (good friend).' },
        { id: 'u16-2', page: 20, num: '2', tags: ['P'], type: 'gaps', core: true, instruction: 'Write ONE word for each gap 1–6.', numbered: true,
          paras: [['', A('have', '’ve')], ['', A('too')], ['', A('has')], ['', A('both', 'all')], ['', A('not')], ['', A('and')]] },
        { id: 'u16-3', page: 20, num: '3', type: 'gaps', core: true, instruction: 'Choose the correct alternative to complete the conversation (1–6).', numbered: true,
          paras: [['', S(['quite', 'really'], 'really')], ['', S(['blue', 'straight'], 'blue')], ['', S(['long', 'round'], 'long')], ['', S(['light', 'thin'], 'thin')], ['', S(['a bit', 'very'], 'very')], ['', S(['loud', 'quiet'], 'quiet')]] },
        { id: 'u16-4', page: 20, num: '4', type: 'gaps', core: true, instruction: 'Complete Lucy’s profile with the correct form of be or have got (1–12).', numbered: true,
          paras: [['', A('is', '’s')], ['', A('have got', '’ve got')], ['', A('are', '’re')], ['', A('am', '’m')], ['', A('have got', '’ve got')], ['', A('has got', '’s got')],
            ['', A('has got', '’s got')], ['', A('am not', '’m not')], ['', A('is not', 'isn’t')], ['', A('is', '’s')], ['', A('are not', 'aren’t')], ['', A('are', '’re')]] },
        { id: 'u16-5', page: 20, num: '5', tags: ['SPEAK'], type: 'discuss', core: true, instruction: 'Read the Quick quote. When you are with friends, is your personality different to when you are with family?' },
        { id: 'u16-6', page: 20, num: '6', tags: ['COMMUNICATION'], type: 'discuss', core: true, instruction: 'A friend starts a new school tomorrow and Aurora (Ex. 1) is in his / her class. Have a conversation about Aurora. Use the dialogue in Ex. 3 to help you.' },
        { id: 'u16-7', page: 20, num: '7', tags: ['LOOK BACK'], type: 'discuss', core: true, instruction: 'Answer the Look back questions.',
          prompts: ['Which grammar point would you like to practise further?', 'Which lesson did you enjoy most? Why?', 'When do you use and, also, too and but?', 'What information do you give to introduce someone?'] }
      ]}
    ]
  };

  /* ---------------- GRAMMAR PRACTICE · p.133 ---------------- */
  const SF = (full, short) => ['**' + full + '** → ', A(...short)];
  LESSONS['u1-gr'] = {
    id: 'u1-gr', unit: 'u1', code: 'GR', title: 'Grammar Practice', kicker: 'Grammar', pages: '133', accent: 'navy', time: '30–45 min',
    goal: 'be: positive, negative, questions. have got: all forms.',
    sections: [
      { id: 'book', title: 'Grammar Practice · p.133', items: [
        { id: 'u1g-1', page: 133, num: '1', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Write the short forms (1–14).', noNums: true,
          paras: [SF('I am', ['I’m']), SF('I am not', ['I’m not']), SF('you are', ['you’re']), SF('you are not', ['you aren’t', 'you’re not']), SF('he is', ['he’s']), SF('he is not', ['he isn’t', 'he’s not']),
            SF('she is', ['she’s']), SF('she is not', ['she isn’t', 'she’s not']), SF('it is', ['it’s']), SF('it is not', ['it isn’t', 'it’s not']), SF('we are', ['we’re']), SF('we are not', ['we aren’t', 'we’re not']),
            SF('they are', ['they’re']), SF('they are not', ['they aren’t', 'they’re not'])] },
        { id: 'u1g-2', page: 133, num: '2', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Correct the bold words in sentences 1–8.', numbered: true,
          paras: [['', A('’m', 'am')], ['', A('aren’t', 'are not')], ['', A('isn’t', 'is not')], ['', A('Are')], ['', A('are', '’re')], ['', A('is', '’s')], ['', A('’m not', 'am not')], ['', A('Is')]] },
        { id: 'u1g-3', page: 133, num: '3', tags: ['GRAMMAR'], type: 'multi', core: true, instruction: 'Tick the yes / no questions.',
          options: ['1', '2', '3', '4', '5', '6'], answers: [0, 3, 4] },
        { id: 'u1g-4', page: 133, num: '4', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Choose the correct alternatives (1–6).', numbered: true,
          paras: [['', S(['Are', 'Is'], 'Are')], ['', S(['Why', 'Why are'], 'Why are')], ['', S(['What is', 'Is what'], 'What is')], ['', S(['Is', 'Are'], 'Is')], ['', S(['I am', 'Am I'], 'Am I')], ['', S(['When are', 'When is'], 'When are')]] },
        { id: 'u1g-5', page: 133, num: '5', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'have got: write the short forms (1–14).', noNums: true,
          paras: [SF('I have got', ['I’ve got']), SF('you have got', ['you’ve got']), SF('he has got', ['he’s got']), SF('she has got', ['she’s got']), SF('it has got', ['it’s got']), SF('we have got', ['we’ve got']), SF('they have got', ['they’ve got']),
            SF('I have not got', ['I haven’t got']), SF('you have not got', ['you haven’t got']), SF('he has not got', ['he hasn’t got']), SF('she has not got', ['she hasn’t got']), SF('it has not got', ['it hasn’t got']), SF('we have not got', ['we haven’t got']), SF('they have not got', ['they haven’t got'])] },
        { id: 'u1g-6', page: 133, num: '6', tags: ['GRAMMAR'], type: 'gaps', core: true, instruction: 'Complete Steven’s description with have got (1–6). Use short forms if possible.', numbered: true,
          paras: [['', A('’ve got', 'have got')], ['', A('’s got', 'has got')], ['', A('hasn’t got', 'has not got')], ['', A('’ve got', 'have got')], ['', A('hasn’t got', 'has not got')], ['', A('’ve got', 'have got')]],
          hint: '“but he ___ a brother. I’m like his brother!” — значит, брата у Ави нет.' }
      ]}
    ]
  };

  /* ---------------- WORKBOOK · pp.156–161 ---------------- */
  LESSONS['u1-wb'] = {
    id: 'u1-wb', unit: 'u1', code: 'WB', title: 'Workbook', kicker: 'Workbook', pages: '156–161', accent: 'green', time: 'дом. задание',
    goal: 'Grammar Use, Vocabulary, Reading, Review, Writing — Unit 1.',
    sections: [
      { id: 'gram', title: 'Grammar Practice: Use · pp.156–157', items: [
        { id: 'u1wb-1', page: 156, num: '1', type: 'gaps', core: true, instruction: 'Choose the correct alternatives (1–8).', numbered: true,
          paras: [['', S(['are', 'is'], 'are')], ['', S(['Is', 'Are'], 'Is')], ['', S(['is', 'are'], 'is')], ['', S(['Is', 'Are'], 'Is')], ['', S(['isn’t', 'aren’t'], 'aren’t')], ['', S(['are', 'is'], 'is')], ['', S(['Are', 'Is'], 'Are')], ['', S(['isn’t', 'aren’t'], 'aren’t')]] },
        { id: 'u1wb-2a', page: 156, num: '2 (1)', type: 'multi', core: true, instruction: 'Ex. 2, sentence 1. Choose ALL correct answers.', options: ['A', 'B', 'C', 'D'], answers: [2, 3] },
        { id: 'u1wb-2b', page: 156, num: '2 (2)', type: 'multi', core: true, instruction: 'Ex. 2, sentence 2. Choose ALL correct answers.', options: ['A', 'B', 'C', 'D'], answers: [0, 1, 3] },
        { id: 'u1wb-2c', page: 156, num: '2 (3)', type: 'multi', core: true, instruction: 'Ex. 2, sentence 3. Choose ALL correct answers.', options: ['A', 'B', 'C', 'D'], answers: [2, 3] },
        { id: 'u1wb-2d', page: 156, num: '2 (4)', type: 'multi', core: true, instruction: 'Ex. 2, sentence 4. Choose ALL correct answers.', options: ['A', 'B', 'C', 'D'], answers: [1] },
        { id: 'u1wb-2e', page: 156, num: '2 (5)', type: 'multi', core: true, instruction: 'Ex. 2, sentence 5. Choose ALL correct answers.', options: ['A', 'B', 'C', 'D'], answers: [0, 3] },
        { id: 'u1wb-3', page: 156, num: '3', type: 'gaps', core: true, instruction: 'Write affirmative or negative sentences with be. Use short forms.', numbered: true,
          paras: [['', A('I’m a caring person.')], ['', A('She’s really shy.')], ['', A('He isn’t good fun.', 'He’s not good fun.')], ['', A('His haircut isn’t terrible.', 'His haircut’s not terrible.')], ['', A('We’re at a great party.')], ['', A('They aren’t very outgoing.', 'They’re not very outgoing.')]] },
        { id: 'u1wb-4', page: 156, num: '4', type: 'gaps', core: true, instruction: 'Complete the article with the correct form of be (1–8). Use short forms when possible.', numbered: true,
          paras: [['', A('aren’t', 'are not')], ['', A('’re', 'are')], ['', A('are')], ['', A('aren’t', 'are not')], ['', A('isn’t', 'is not', '’s not')], ['', A('’s', 'is')], ['', A('’m not', 'am not')], ['', A('Are you')]],
          hint: 'Мария — интроверт? Посмотрите, что идёт после тире.' },
        { id: 'u1wb-5', page: 156, num: '5', type: 'gaps', core: true, instruction: 'Complete the mini-dialogues with be.', noNums: true,
          paras: [['**1** A ', A('Is'), ' B No, it ', A('isn’t', 'is not', '’s not')], ['**2** A ', A('Are'), ' B Yes, they ', A('are')], ['**3** A ', A('Is'), ' B No, she ', A('isn’t', 'is not', '’s not')], ['**4** A ', A('Is'), ' B Yes, he ', A('is')]] },
        { id: 'u1wb-6', page: 156, num: '6', type: 'mcq', core: true, instruction: 'Choose the correct answers (A or B).',
          questions: [{ q: '1', options: AB, a: 1 }, { q: '2', options: AB, a: 0 }, { q: '3', options: AB, a: 1 }, { q: '4', options: AB, a: 1 }, { q: '5', options: AB, a: 0 }, { q: '6', options: AB, a: 0 }] },
        { id: 'u1wb-7', page: 157, num: '7', type: 'gaps', core: true, instruction: 'Match the questions in the box to answers 1–6.', numbered: true,
          paras: (function () { const q = ['Are you a Year 9 student?', 'Are you sad?', 'Is that your book?', 'What is your favourite subject?', 'When is your birthday?', 'Who is your best friend?'];
            return ['Who is your best friend?', 'Is that your book?', 'Are you sad?', 'What is your favourite subject?', 'Are you a Year 9 student?', 'When is your birthday?'].map(a => ['', S(q, a)]); })() },
        { id: 'u1wb-8', page: 157, num: '8', type: 'gaps', core: true, instruction: 'Write the words in the correct order to make questions.', numbered: true,
          paras: [['', A('Is your brother very clever?')], ['', A('Why are they your friends?')], ['', A('What are your favourite days?')], ['', A('When is the school party?')],
            ['', A('Are his ideas good?')], ['', A('Who is that boy?')], ['', A('Where is your classroom?')], ['', A('Are your parents friendly?')]] },
        { id: 'u1wb-9', page: 157, num: '9', type: 'gaps', core: true, instruction: 'have got: choose the correct alternatives (1–8).', numbered: true,
          paras: [['', S(['Have', 'Has'], 'Has')], ['', S(['has got', 'have got'], 'have got')], ['', S(['hasn’t got', 'haven’t got'], 'hasn’t got')], ['', S(['hasn’t got', 'haven’t got'], 'haven’t got')],
            ['', S(['have got', 'has got'], 'have got')], ['', S(['haven’t got', 'hasn’t got'], 'haven’t got')], ['', S(['have got', 'has got'], 'has got')], ['', S(['Have', 'Has'], 'Have')]] },
        { id: 'u1wb-10', page: 157, num: '10', type: 'gaps', core: true, instruction: 'Write negative sentences.', numbered: true,
          paras: [['', A('Steve hasn’t got a best friend.', 'Steve has not got a best friend.')], ['', A('I haven’t got great ideas.', 'I have not got great ideas.')], ['', A('The classroom hasn’t got maps on the wall.', 'The classroom has not got maps on the wall.')],
            ['', A('We haven’t got the same interests.', 'We have not got the same interests.')], ['', A('My parents haven’t got curly hair.', 'My parents have not got curly hair.')], ['', A('You haven’t got fair skin.', 'You have not got fair skin.')]] },
        { id: 'u1wb-11', page: 157, num: '11', type: 'gaps', core: true, instruction: 'Find and correct the errors. Two sentences are correct — write “correct”.', numbered: true,
          paras: [['', A('My friend has got lots of clothes.', 'My friend’s got lots of clothes.')], ['', A('correct')], ['', A('She hasn’t got a brother.', 'She has not got a brother.')], ['', A('Has he got a best friend?')], ['', A('correct')], ['', A('We have got a great class rep.', 'We’ve got a great class rep.')]] },
        { id: 'u1wb-12', page: 157, num: '12', type: 'writing', core: true, min: 40, max: 100, checks: false, instruction: 'Complete the online profile about you. Use be and have got.',
          plan: ['Name', 'Age', 'My relationships', 'My interests', 'My physical appearance', 'My possessions'] }
      ]},
      { id: 'vocab', title: 'Vocabulary · p.158', items: [
        { id: 'u1wb-v1', page: 158, num: '1', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Are the adjectives similar (S) or different (D)?', numbered: true,
          paras: [['', S(['S', 'D'], 'S')], ['', S(['S', 'D'], 'D')], ['', S(['S', 'D'], 'D')], ['', S(['S', 'D'], 'S')], ['', S(['S', 'D'], 'S')], ['', S(['S', 'D'], 'D')]] },
        { id: 'u1wb-v2', page: 158, num: '2', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Choose the correct alternatives (1–8).', numbered: true,
          paras: [['', S(['calm', 'fair'], 'calm')], ['', S(['fun', 'clever'], 'clever')], ['', S(['shy', 'friendly'], 'shy')], ['', S(['an outgoing', 'a caring'], 'a caring')],
            ['', S(['serious', 'fun'], 'serious')], ['', S(['a calm', 'an outgoing'], 'an outgoing')], ['', S(['a shy', 'an honest'], 'an honest')], ['', S(['loud', 'shy'], 'loud')]] },
        { id: 'u1wb-v3', page: 158, num: '3', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Rewrite the sentences using the adverbs in brackets.', numbered: true,
          paras: [['', A('The classroom is really big.')], ['', A('She’s a bit shy when she’s with new people.', 'She is a bit shy when she is with new people.')], ['', A('He’s quite serious.', 'He is quite serious.')],
            ['', A('Your haircut is really terrible.')], ['', A('They are very friendly.', 'They’re very friendly.')], ['', A('I’m a bit loud when I’m with my friends.', 'I am a bit loud when I am with my friends.')]] },
        { id: 'u1wb-v4', page: 158, num: '4', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Match the words with their opposites.', bank: ['blond', 'dark', 'long', 'straight'], uniqueBank: true, noNums: true,
          paras: [['curly ↔ ', A('straight')], ['dark (hair) ↔ ', A('blond')], ['fair (skin) ↔ ', A('dark')], ['short ↔ ', A('long')]] },
        { id: 'u1wb-v5', page: 158, num: '5', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Choose the correct alternatives (1–6).', numbered: true,
          paras: [['', S(['straight', 'thin'], 'straight')], ['', S(['medium-length', 'dark'], 'dark')], ['', S(['thin', 'fair'], 'thin')], ['', S(['fair', 'blond'], 'fair')], ['', S(['round', 'blond'], 'blond')], ['', S(['short', 'thin'], 'short')]] },
        { id: 'u1wb-v6', page: 158, num: '6', tags: ['VOCABULARY'], type: 'gaps', core: true, instruction: 'Complete the words in Claudia’s blog (first letters are given in the book).', numbered: true,
          paras: [['c… ', A('clever')], ['r… ', A('really')], ['c… ', A('calm')], ['b… ', A('bit')], ['v… ', A('very')], ['q… ', A('quite')], ['s… ', A('straight')], ['b… ', A('brown')]] }
      ]},
      { id: 'read', title: 'Reading · p.159', items: [
        { id: 'u1wb-r1', page: 159, num: '1', tags: ['READ'], type: 'gaps', core: true, instruction: 'Read the emails and answer the questions.', numbered: true,
          audio: { track: '89', note: 'Трек 89 (Workbook) не входит в присланный комплект — читайте текст без аудио.' },
          paras: [['', A('They’re both class reps.', 'They are both class reps.', 'They’re class reps.', 'Both are class reps.', 'They are class reps.', 'class reps')], ['', A('Lee')]] },
        { id: 'u1wb-r2', page: 159, num: '2', tags: ['READ'], type: 'gaps', core: true, instruction: 'Complete with is or isn’t.', numbered: true,
          paras: [['Fran ', S(['is', 'isn’t'], 'is'), ' outgoing.'], ['Fran ', S(['is', 'isn’t'], 'isn’t'), ' always loud.'], ['Lee ', S(['is', 'isn’t'], 'isn’t'), ' outgoing.'], ['Lee ', S(['is', 'isn’t'], 'is'), ' clever.']] },
        { id: 'u1wb-r3', page: 159, num: '3', tags: ['READ'], type: 'gaps', core: true, instruction: 'Answer the questions using a maximum of four words.', numbered: true,
          paras: [['', A('She’s class rep.', 'She is class rep.', 'She’s a class rep.', 'Because she’s class rep.', 'She is the class rep.', 'She’s class rep this year.')], ['', A('She’s a fun person.', 'She is a fun person.', 'She’s fun.', 'a fun person')],
            ['', A('With new people.', 'When with new people.', 'with new people')], ['', A('Really good ideas.', 'really good ideas', 'Good ideas for school.', 'ideas for the school council')]] },
        { id: 'u1wb-rvp', page: 159, num: 'VP', tags: ['VIEWPOINTS'], type: 'writing', core: true, min: 30, max: 80, checks: false, instruction: 'Is Fran the right person to be a class rep? What about Lee? Write a few sentences explaining your answers.' }
      ]},
      { id: 'rev', title: 'Review · p.160', items: [
        { id: 'u1wb-rv1', page: 160, num: '1', type: 'gaps', core: true, instruction: 'Complete the sentences with the words in the box.', bank: ['are', 'bit', 'caring', 'have', 'is', 'isn’t', 'loud', 'really'], uniqueBank: true, numbered: true,
          paras: [['', A('really')], ['', A('have')], ['', A('caring')], ['', A('Is')], ['', A('loud')], ['', A('are')], ['', A('isn’t')], ['', A('bit')]] },
        { id: 'u1wb-rv2', page: 160, num: '2', type: 'gaps', core: true, instruction: 'Write one word for each gap (1–8).', numbered: true,
          paras: [['', A('is')], ['', A('isn’t')], ['', A('hasn’t')], ['', A('medium-length')], ['', A('is')], ['', A('outgoing', 'loud', 'confident')], ['', A('caring', 'kind', 'friendly')], ['', A('clever')]],
          tutorNote: 'Пункты 6–7 допускают синонимы — принимайте логичные варианты.' },
        { id: 'u1wb-rv3', page: 160, num: '3–4', type: 'listen', core: true, audio: { track: '90–91', note: 'Подкаст (треки 90–92 Workbook) не входит в присланный комплект — задание можно пропустить или дать по транскрипту из книги для учителя.' },
          instruction: 'Podcast. Ex. 3: what topic are they talking about? Ex. 4: answer questions 1–5 (max four words).',
          inner: { type: 'gaps', numbered: true, answers: null, paras: [['Ex. 3: ', N()], ['', N()], ['', N()], ['', N()], ['', N()], ['', N()]] } },
        { id: 'u1wb-rv5', page: 160, num: '5', tags: ['PRONUNCIATION'], type: 'multi', core: true, instruction: 'Say the sentences. In which sentences is the contraction with be stressed?', options: ['1', '2', '3', '4', '5'], answers: [1, 2, 3],
          explanation: 'Ударение падает на отрицательные формы: aren’t, not, isn’t.' },
        { id: 'u1wb-rv6', page: 160, num: '6', tags: ['PRONUNCIATION'], type: 'gaps', core: true, instruction: 'Are the contractions in bold stressed? Write yes or no.', numbered: true,
          paras: [['', S(['yes', 'no'], 'no')], ['', S(['yes', 'no'], 'no')], ['', S(['yes', 'no'], 'yes')], ['', S(['yes', 'no'], 'yes')]] },
        { id: 'u1wb-med', page: 160, num: 'M', tags: ['MEDIATION'], type: 'writing', core: true, min: 10, max: 60, checks: false,
          instruction: 'Mediation: translate the short dialogue (A/B) on p.160 into Russian.', adapted: 'В учебнике — на итальянский; у нас — на русский.' }
      ]},
      { id: 'write', title: 'Writing · p.161', items: [
        { id: 'u1wb-w0', page: 161, num: 'VP', tags: ['VIEWPOINTS'], type: 'discuss', core: true, instruction: 'What adjectives describe you at school? At home with friends and family? Are they different?' },
        { id: 'u1wb-w7', page: 161, num: '7', type: 'discuss', core: true, instruction: 'Read the quote and Yuan’s post. Does Yuan agree with the quote? Explain.',
          model: 'Yes, I think she agrees. She is different with different people, but she is always herself.' },
        { id: 'u1wb-w8', page: 161, num: '8', type: 'multi', core: true, instruction: 'Which linking words does Yuan use?', options: ['and', 'but', 'also', 'too', 'because', 'so'], answers: [0, 1],
          explanation: 'В посте Юань — and и but.' },
        { id: 'u1wb-w9', page: 161, num: '9', type: 'multi', core: true, instruction: 'Tick the adjectives Yuan uses to describe herself.',
          options: ['honest', 'caring', 'shy', 'quiet', 'friendly', 'fun', 'loud', 'outgoing', 'serious'], answers: [2, 3, 5, 6, 7, 8] },
        { id: 'u1wb-w10', page: 161, num: '10', type: 'scores', core: true, instruction: 'Score Yuan’s post with the checklist (0–10 for each point).', max: 10,
          items: ['answers the questions clearly and completely', 'has an opening and a closing sentence', 'shows careful thinking about the topic', 'uses adjectives to describe and give examples', 'uses be and has / have got correctly', 'is long enough (100 words)'] },
        { id: 'u1wb-w12', page: 161, num: '11–12', tags: ['WRITE'], type: 'writing', core: true, min: 80, max: 120,
          instruction: 'Choose the adjectives you will use (Ex. 11). Then write a response to the quote in Ex. 7 (about 100 words).',
          plan: ['Are you the same at school and at home?', 'How are you different with friends and with family?', 'Opening and closing sentence'] },
        { id: 'u1wb-w13', page: 161, num: '13', type: 'checklist', core: true, instruction: 'Use the checklist from Ex. 10 to score your post. Then improve it.',
          items: ['Clear and complete answers', 'Opening and closing sentence', 'Careful thinking', 'Adjectives + examples', 'be and have got correct', 'About 100 words'] },
        { id: 'u1wb-sa', page: 161, num: 'SA', source: 'book', type: 'review', core: true, cando: ['What was the most interesting part of Unit 1?', 'What was easy?', 'What was difficult?', 'What do I need to look at again?'] }
      ]}
    ]
  };
})();
