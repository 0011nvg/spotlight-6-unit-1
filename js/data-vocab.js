/* Словарь Unit 1 «Identity» (Panoramic A2).
   src:'book' — слово из урока учебника; src:'added' — полезное слово, добавленное преподавателем.
   Переводы, транскрипции и примеры — авторские (не из учебника). */
window.VOCAB = [
  // ---- Opener p.11 · identity
  { w:'identity', ru:'личность, индивидуальность', ipa:'/aɪˈdentəti/', pos:'n', def:'who you are; what makes you different from other people', ex:'Music is a big part of my identity.', ctx:['My hobbies are an important part of my ___.'], lesson:'u1-opener', src:'book', emoji:'🪪' },
  { w:'appearance', ru:'внешность', ipa:'/əˈpɪərəns/', pos:'n', def:'the way somebody looks', ex:'She doesn’t worry about her appearance.', ctx:['Hair, eyes and clothes are all part of your ___.'], lesson:'u1-opener', src:'book', emoji:'🪞' },
  { w:'possessions', ru:'вещи, имущество', ipa:'/pəˈzeʃnz/', pos:'n', def:'things that you own', ex:'My phone and my bike are my favourite possessions.', ctx:['A phone, a bike and books are my ___.'], lesson:'u1-opener', src:'book', emoji:'🎒' },
  { w:'hobbies and interests', ru:'хобби и увлечения', ipa:'/ˈhɒbiz ənd ˈɪntrəsts/', pos:'n', def:'things you like doing in your free time', ex:'Tell me about your hobbies and interests.', ctx:['Drawing and chess are my ___ and interests.'], lesson:'u1-opener', src:'book', emoji:'🎨', alt:['hobbies'] },
  { w:'personality', ru:'характер, личность', ipa:'/ˌpɜːsəˈnæləti/', pos:'n', def:'the kind of person you are: how you think, feel and behave', ex:'My sister has got a great personality — she’s really fun.', ctx:['Kind, shy, loud — these words describe your ___.'], lesson:'u1-opener', src:'book', emoji:'💭' },
  { w:'school grades', ru:'школьные оценки', ipa:'/skuːl ɡreɪdz/', pos:'n', def:'the marks you get at school', ex:'His school grades are always good.', ctx:['I got a five in Maths — my school ___ are good this term.'], lesson:'u1-opener', src:'book', emoji:'📝', alt:['grades'] },
  { w:'be good at', ru:'хорошо уметь что-то', ipa:'/bi ɡʊd æt/', pos:'phr', def:'to do something well', ex:'I’m good at drawing but bad at singing.', ctx:['Lena is good ___ maths.'], lesson:'u1-opener', src:'book', emoji:'🏅' },

  // ---- 1.1 personality adjectives
  { w:'honest', ru:'честный', ipa:'/ˈɒnɪst/', pos:'adj', def:'always telling the truth', ex:'Be honest — do you like my new haircut?', ctx:['Max never tells lies. He’s very ___.'], lesson:'u1-1', src:'book', emoji:'🤞' },
  { w:'clever', ru:'умный', ipa:'/ˈklevə/', pos:'adj', def:'quick at learning and understanding things', ex:'She’s really clever — she reads two books a week.', ctx:['Ivan can do difficult maths in his head. He’s ___.'], lesson:'u1-1', src:'book', emoji:'🧠' },
  { w:'fair', ru:'справедливый', ipa:'/feə/', pos:'adj', def:'treating everyone in the same way', ex:'Our coach is fair — everyone plays in the match.', ctx:['A good teacher is ___ to all the students.'], lesson:'u1-1', src:'book', emoji:'⚖️' },
  { w:'serious', ru:'серьёзный', ipa:'/ˈsɪəriəs/', pos:'adj', def:'not laughing or joking much', ex:'My grandad looks serious, but he’s very kind.', ctx:['He never laughs at jokes. He’s a bit ___.'], lesson:'u1-1', src:'book', emoji:'🧐' },
  { w:'friendly', ru:'дружелюбный', ipa:'/ˈfrendli/', pos:'adj', def:'nice and kind to other people', ex:'The new girl is very friendly — she talks to everyone.', ctx:['Our neighbours always say hello. They’re ___.'], lesson:'u1-1', src:'book', emoji:'😊' },
  { w:'unfriendly', ru:'недружелюбный', ipa:'/ʌnˈfrendli/', pos:'adj', def:'not nice or kind to other people', ex:'The shop assistant was unfriendly and didn’t smile.', ctx:['He never says hello. He’s ___.'], lesson:'u1-1', src:'book', emoji:'😒' },
  { w:'outgoing', ru:'общительный', ipa:'/ˈaʊtɡəʊɪŋ/', pos:'adj', def:'liking to meet and talk to new people', ex:'Kira is outgoing — she loves parties.', ctx:['Tom loves meeting new people. He’s very ___.'], lesson:'u1-1', src:'book', emoji:'🥳' },
  { w:'caring', ru:'заботливый', ipa:'/ˈkeərɪŋ/', pos:'adj', def:'kind and helpful to people who need it', ex:'My mum is very caring — she always helps me.', ctx:['When I’m ill, my brother makes me tea. He’s so ___.'], lesson:'u1-1', src:'book', emoji:'🤗' },
  { w:'shy', ru:'застенчивый', ipa:'/ʃaɪ/', pos:'adj', def:'nervous and quiet with people you don’t know', ex:'I’m a bit shy when I meet new people.', ctx:['Anya doesn’t talk much at new places. She’s ___.'], lesson:'u1-1', src:'book', emoji:'🙈' },
  { w:'loud', ru:'громкий, шумный', ipa:'/laʊd/', pos:'adj', def:'making a lot of noise', ex:'My little brothers are really loud!', ctx:['Please don’t shout — you’re very ___.'], lesson:'u1-1', src:'book', emoji:'📢' },
  { w:'fun', ru:'весёлый, интересный', ipa:'/fʌn/', pos:'adj', def:'enjoyable to be with', ex:'Our English teacher is really fun.', ctx:['I love my cousin — she’s always ___ at parties.'], lesson:'u1-1', src:'book', emoji:'🎉' },
  { w:'calm', ru:'спокойный', ipa:'/kɑːm/', pos:'adj', def:'not worried or excited', ex:'Stay calm — it’s only a test.', ctx:['Dad never gets angry. He’s always ___.'], lesson:'u1-1', src:'book', emoji:'🧘' },
  { w:'quiet', ru:'тихий', ipa:'/ˈkwaɪət/', pos:'adj', def:'not talking much; not making noise', ex:'Sasha is quiet in class but loud at home.', ctx:['The library is very ___.'], lesson:'u1-1', src:'book', emoji:'🤫' },
  { w:'happy', ru:'счастливый, довольный', ipa:'/ˈhæpi/', pos:'adj', def:'feeling good', ex:'I’m happy when my friends are with me.', ctx:['It’s my birthday — I’m so ___!'], lesson:'u1-1', src:'book', emoji:'😀' },
  { w:'sad', ru:'грустный', ipa:'/sæd/', pos:'adj', def:'not happy', ex:'She’s sad because her cat is ill.', ctx:['Why are you ___? What’s the problem?'], lesson:'u1-1', src:'book', emoji:'😢' },
  { w:'opinion', ru:'мнение', ipa:'/əˈpɪnjən/', pos:'n', def:'what you think about something', ex:'In my opinion, cats are better than dogs.', ctx:['In my ___, this film is great.'], lesson:'u1-1', src:'book', emoji:'💬' },

  // ---- 1.2 class rep, adverbs of degree
  { w:'class representative', ru:'представитель класса, староста', ipa:'/klɑːs ˌreprɪˈzentətɪv/', pos:'n', def:'a student who speaks for the class at meetings', ex:'Our class representative goes to meetings with the head teacher.', ctx:['We need a new class ___ to talk to the teachers.'], lesson:'u1-2', src:'book', emoji:'🙋', alt:['class rep'] },
  { w:'school council', ru:'школьный совет', ipa:'/skuːl ˈkaʊnsl/', pos:'n', def:'a group of students and teachers who make decisions for the school', ex:'The school council wants a new sports club.', ctx:['The class reps meet at the school ___ every Friday.'], lesson:'u1-2', src:'book', emoji:'🏫' },
  { w:'organised', ru:'организованный', ipa:'/ˈɔːɡənaɪzd/', pos:'adj', def:'good at planning things', ex:'She’s very organised — her homework is always ready.', ctx:['He plans everything and is never late. He’s ___.'], lesson:'u1-2', src:'book', emoji:'🗂️', alt:['organized'] },
  { w:'a bit', ru:'немного, слегка', ipa:'/ə bɪt/', pos:'adv', def:'a little', ex:'I’m a bit tired today.', ctx:['The test was a ___ difficult, but OK.'], lesson:'u1-2', src:'book', emoji:'🤏' },
  { w:'quite', ru:'довольно, вполне', ipa:'/kwaɪt/', pos:'adv', def:'more than a little, but not very', ex:'The film is quite good.', ctx:['He isn’t very tall, but he’s ___ tall.'], lesson:'u1-2', src:'book', emoji:'👌' },
  { w:'very', ru:'очень', ipa:'/ˈveri/', pos:'adv', def:'makes an adjective stronger', ex:'It’s very cold today.', ctx:['Thank you ___ much!'], lesson:'u1-2', src:'book', emoji:'💯' },
  { w:'really', ru:'действительно, очень', ipa:'/ˈrɪəli/', pos:'adv', def:'very (often in speaking)', ex:'Your drawing is really beautiful!', ctx:['This pizza is ___ good!'], lesson:'u1-2', src:'book', emoji:'✨' },
  { w:'I mean', ru:'я имею в виду', ipa:'/aɪ miːn/', pos:'phr', def:'used to explain what you just said', ex:'She’s great for the job. I mean, she’s really organised.', ctx:['He’s a good friend. I ___, he always helps me.'], lesson:'u1-2', src:'book', emoji:'☝️' },

  // ---- 1.3 appearance, have got
  { w:'curly', ru:'кудрявый', ipa:'/ˈkɜːli/', pos:'adj', def:'(hair) with lots of small round shapes', ex:'My sister has got curly brown hair.', ctx:['Her hair isn’t straight — it’s ___.'], lesson:'u1-3', src:'book', emoji:'🌀' },
  { w:'wavy', ru:'волнистый', ipa:'/ˈweɪvi/', pos:'adj', def:'(hair) a little curly, like waves', ex:'He’s got wavy dark hair.', ctx:['Her hair isn’t curly or straight. It’s ___.'], lesson:'u1-3', src:'book', emoji:'🌊' },
  { w:'straight', ru:'прямой (о волосах)', ipa:'/streɪt/', pos:'adj', def:'(hair) without curls', ex:'I’ve got long straight hair.', ctx:['Curly ↔ ___'], lesson:'u1-3', src:'book', emoji:'📏' },
  { w:'blond', ru:'светлый (о волосах)', ipa:'/blɒnd/', pos:'adj', def:'(hair) yellow or very light', ex:'Many babies have got blond hair.', ctx:['His hair isn’t dark, it’s ___.'], lesson:'u1-3', src:'book', emoji:'👱', alt:['blonde'] },
  { w:'medium-length', ru:'средней длины', ipa:'/ˌmiːdiəm ˈleŋθ/', pos:'adj', def:'not long and not short', ex:'She’s got medium-length straight hair.', ctx:['Her hair isn’t long or short — it’s ___.'], lesson:'u1-3', src:'book', emoji:'💇', alt:['medium length'] },
  { w:'fair skin', ru:'светлая кожа', ipa:'/feə skɪn/', pos:'n', def:'skin that is light in colour', ex:'People with fair skin need sun cream in summer.', ctx:['He isn’t dark-skinned — he’s got ___ skin.'], lesson:'u1-3', src:'book', emoji:'🧴' },
  { w:'dark', ru:'тёмный', ipa:'/dɑːk/', pos:'adj', def:'not light in colour', ex:'She’s got dark eyes and dark hair.', ctx:['Fair skin ↔ ___ skin'], lesson:'u1-3', src:'book', emoji:'🌑' },
  { w:'have got', ru:'иметь', ipa:'/hæv ɡɒt/', pos:'v', def:'to own or have something (family, pets, appearance)', ex:'I’ve got two cats and a hamster.', ctx:['She ___ got blue eyes.'], lesson:'u1-3', src:'book', emoji:'🤲', alt:['has got'] },
  { w:'be into', ru:'увлекаться', ipa:'/bi ˈɪntuː/', pos:'phr', def:'to like something very much', ex:'I’m really into K-pop.', ctx:['My dad is really ___ football — he watches every match.'], lesson:'u1-3', src:'book', emoji:'❤️' },
  { w:'be interested in', ru:'интересоваться', ipa:'/bi ˈɪntrəstɪd ɪn/', pos:'phr', def:'to want to know more about something', ex:'Are you interested in science?', ctx:['I’m interested ___ space and planets.'], lesson:'u1-3', src:'book', emoji:'🔭' },
  { w:'favourite feature', ru:'любимая черта (внешности)', ipa:'/ˈfeɪvərɪt ˈfiːtʃə/', pos:'n', def:'the part of your face or body you like most', ex:'My favourite feature is my smile.', ctx:['My eyes are my favourite ___.'], lesson:'u1-3', src:'book', emoji:'😁' },

  // ---- 1.4 introductions
  { w:'Nice to meet you', ru:'приятно познакомиться', ipa:'/naɪs tə miːt juː/', pos:'phr', def:'what you say when you meet someone new', ex:'— This is Dani. — Hi, Dani! Nice to meet you.', ctx:['— Hi, I’m Oleg. — Hi, Oleg! Nice to ___ you.'], lesson:'u1-4', src:'book', emoji:'🤝' },
  { w:'How’s it going?', ru:'как дела?', ipa:'/haʊz ɪt ˈɡəʊɪŋ/', pos:'phr', def:'an informal way to say “How are you?”', ex:'Hey, Max! How’s it going?', ctx:['— How’s it ___? — Great, thanks!'], lesson:'u1-4', src:'book', emoji:'👋' },
  { w:'nervous', ru:'взволнованный, нервничающий', ipa:'/ˈnɜːvəs/', pos:'adj', def:'a bit worried or afraid', ex:'I’m nervous before exams.', ctx:['It’s my first day at the new school. I’m a bit ___.'], lesson:'u1-4', src:'book', emoji:'😬' },
  { w:'in common', ru:'общее (у людей)', ipa:'/ɪn ˈkɒmən/', pos:'phr', def:'the same interests or ideas as another person', ex:'We’ve got a lot in common — we both love dogs.', ctx:['What have you got in ___ with your best friend?'], lesson:'u1-4', src:'book', emoji:'🔗' },

  // ---- 1.5 pets
  { w:'pet', ru:'домашний питомец', ipa:'/pet/', pos:'n', def:'an animal that lives with you at home', ex:'Have you got a pet?', ctx:['My ___ is a small grey rabbit.'], lesson:'u1-5', src:'book', emoji:'🐶' },
  { w:'kitten', ru:'котёнок', ipa:'/ˈkɪtn/', pos:'n', def:'a baby cat', ex:'Our cat has got four kittens.', ctx:['A baby cat is a ___.'], lesson:'u1-5', src:'book', emoji:'🐱' },
  { w:'rodent', ru:'грызун', ipa:'/ˈrəʊdnt/', pos:'n', def:'a small animal with long front teeth, like a mouse', ex:'Hamsters and mice are rodents.', ctx:['A mouse is a small ___.'], lesson:'u1-5', src:'book', emoji:'🐹' },
  { w:'animal lover', ru:'любитель животных', ipa:'/ˈænɪml ˌlʌvə/', pos:'n', def:'a person who loves animals', ex:'My aunt is a real animal lover — she’s got five cats.', ctx:['She’s got three dogs and a horse. She’s a real animal ___.'], lesson:'u1-5', src:'book', emoji:'🐾' },
  { w:'look after', ru:'ухаживать, заботиться', ipa:'/lʊk ˈɑːftə/', pos:'v', def:'to take care of someone or something', ex:'I look after my neighbour’s dog in summer.', ctx:['Who looks ___ your cat when you are on holiday?'], lesson:'u1-5', src:'book', emoji:'🧺' },

  // ---- added
  { w:'introvert', ru:'интроверт', ipa:'/ˈɪntrəvɜːt/', pos:'n', def:'a quiet person who likes to be alone', ex:'I’m an introvert — I prefer books to parties.', ctx:['Lee is shy and quiet. He’s an ___.'], lesson:'u1-wb', src:'book', emoji:'📚' },
  { w:'extrovert', ru:'экстраверт', ipa:'/ˈekstrəvɜːt/', pos:'n', def:'an outgoing person who loves being with people', ex:'Fran is an extrovert — she loves big groups.', ctx:['She loves parties and talks to everyone. She’s an ___.'], lesson:'u1-wb', src:'book', emoji:'🎤' },
  { w:'thin', ru:'худой; тонкий', ipa:'/θɪn/', pos:'adj', def:'not fat; not wide', ex:'He’s tall and thin.', ctx:['He isn’t a big person — he’s very ___.'], lesson:'u1-6', src:'book', emoji:'🦒' },
  { w:'round face', ru:'круглое лицо', ipa:'/raʊnd feɪs/', pos:'n', def:'a face shaped like a circle', ex:'The baby has got a round face and big eyes.', ctx:['She hasn’t got a thin face — she’s got a ___ face.'], lesson:'u1-6', src:'book', emoji:'🌕' },
  { w:'good-looking', ru:'привлекательный', ipa:'/ˌɡʊd ˈlʊkɪŋ/', pos:'adj', def:'nice to look at', ex:'The actor in the film is very good-looking.', ctx:['He’s a ___ boy with a great smile.'], lesson:'u1-6', src:'book', emoji:'🌟', alt:['good looking'] }
];
