/* Словарь Units 2–3 (Panoramic A2). Переводы и примеры — авторские. */
(function () {
  const W = (w, ru, ipa, pos, def, ex, ctx, lesson, emoji, alt) => ({ w, ru, ipa, pos, def, ex, ctx: [ctx], lesson, src: 'book', emoji, alt });
  VOCAB.push(
    // 2.1 communication
    W('blogging', 'ведение блога', '/ˈblɒɡɪŋ/', 'n', 'writing posts on your own website', 'Blogging about books is my hobby.', 'She writes about her trips every week — she loves ___.', 'u2-1', '📝'),
    W('calling', 'звонки', '/ˈkɔːlɪŋ/', 'n', 'talking to someone on the phone', 'Calling is easy — you just press a button.', 'My grandma prefers ___ to messaging.', 'u2-1', '📞'),
    W('video calling', 'видеозвонки', '/ˈvɪdiəʊ ˌkɔːlɪŋ/', 'n', 'talking to someone and seeing them on a screen', 'We use video calling to talk to my aunt in Canada.', 'I can see my friend’s face when we use video ___.', 'u2-1', '📹'),
    W('file sharing', 'обмен файлами', '/ˈfaɪl ˌʃeərɪŋ/', 'n', 'sending files (photos, music) to other people online', 'File sharing is useful for school projects.', 'We send our homework to each other by file ___.', 'u2-1', '📁'),
    W('messaging', 'обмен сообщениями', '/ˈmesɪdʒɪŋ/', 'n', 'sending short written messages', 'Messaging is fast and easy.', 'I don’t call my friends — I prefer ___.', 'u2-1', '💬'),
    W('posting comments', 'написание комментариев', '/ˈpəʊstɪŋ ˈkɒments/', 'n', 'writing your opinion under a post', 'He’s into posting comments on football blogs.', 'Posting ___ under videos is fun.', 'u2-1', '🗨️'),
    W('posting photos', 'публикация фотографий', '/ˈpəʊstɪŋ ˈfəʊtəʊz/', 'n', 'putting your pictures online', 'Posting photos of my cat is my favourite thing.', 'She’s got 500 pictures on her page — she loves posting ___.', 'u2-1', '📸'),
    W('using emojis', 'использование эмодзи', '/ˈjuːzɪŋ ɪˈməʊdʒiz/', 'n', 'adding little pictures to messages', 'Using emojis makes messages funny.', 'I always add 😂 — I’m a fan of using ___.', 'u2-1', '😂'),
    // 2.2 expressions with be
    W('be keen on', 'увлекаться, любить', '/bi ˈkiːn ɒn/', 'phr', 'to like something a lot', 'I’m not keen on swimming.', 'She’s keen ___ tennis.', 'u2-2', '🎾'),
    W('be crazy about', 'быть без ума от', '/bi ˈkreɪzi əˈbaʊt/', 'phr', 'to like something very, very much', 'My brother is crazy about cars.', 'He’s crazy ___ football — he watches every match.', 'u2-2', '🤩'),
    W('be a fan of', 'быть фанатом', '/bi ə ˈfæn əv/', 'phr', 'to like a person or thing very much', 'I’m a big fan of this band.', 'She’s a fan ___ K-pop.', 'u2-2', '⭐'),
    W('be bad at', 'плохо уметь', '/bi ˈbæd æt/', 'phr', 'to do something badly', 'I’m bad at drawing.', 'He’s bad ___ maths, but good at English.', 'u2-2', '👎'),
    W('formal', 'официальный', '/ˈfɔːml/', 'adj', 'polite and serious, for people you don’t know', 'Dear Sir or Madam is a formal opening.', 'Kind regards is a ___ way to close an email.', 'u2-2', '🎩'),
    W('informal', 'неофициальный', '/ɪnˈfɔːml/', 'adj', 'friendly and relaxed, for friends and family', 'Hey! is informal.', 'Take care! is an ___ way to close an email.', 'u2-2', '👕'),
    // 2.3 family
    W('stepmother', 'мачеха', '/ˈstepmʌðə/', 'n', 'your father’s new wife', 'My stepmother is very kind to me.', 'My dad’s new wife is my ___.', 'u2-3', '👩'),
    W('stepfather', 'отчим', '/ˈstepfɑːðə/', 'n', 'your mother’s new husband', 'My stepfather teaches me to play chess.', 'My mum’s new husband is my ___.', 'u2-3', '👨', ['stepdad']),
    W('half-brother', 'единокровный / единоутробный брат', '/ˈhɑːf brʌðə/', 'n', 'a brother with only one of the same parents', 'My half-brother is two years old.', 'We’ve got the same dad but different mums — he’s my ___.', 'u2-3', '👦', ['half brother']),
    W('half-sister', 'единокровная / единоутробная сестра', '/ˈhɑːf sɪstə/', 'n', 'a sister with only one of the same parents', 'I’ve got two half-sisters.', 'She’s my mum’s daughter, but her dad isn’t my dad. She’s my ___.', 'u2-3', '👧', ['half sister']),
    W('nephew', 'племянник', '/ˈnefjuː/', 'n', 'the son of your brother or sister', 'My aunt says I’m her favourite nephew.', 'My sister’s son is my ___.', 'u2-3', '🧒'),
    W('niece', 'племянница', '/niːs/', 'n', 'the daughter of your brother or sister', 'My niece is five.', 'My brother’s daughter is my ___.', 'u2-3', '👧'),
    W('husband', 'муж', '/ˈhʌzbənd/', 'n', 'the man a woman is married to', 'Her husband is a doctor.', 'My aunt’s ___ is my uncle.', 'u2-3', '🤵'),
    W('wife', 'жена', '/waɪf/', 'n', 'the woman a man is married to', 'His wife is a teacher.', 'My uncle’s ___ is my aunt.', 'u2-3', '👰'),
    W('single parent', 'родитель-одиночка', '/ˈsɪŋɡl ˈpeərənt/', 'n', 'a mother or father who looks after children alone', 'Her mum is a single parent.', 'He lives with his dad only — his dad is a ___ parent.', 'u2-3', '🧑‍🍼'),
    W('couple', 'пара', '/ˈkʌpl/', 'n', 'two people in a relationship', 'They’re a really nice couple.', 'Anna and Max are married — they’re a ___.', 'u2-3', '💑'),
    W('married', 'женатый, замужем', '/ˈmærid/', 'adj', 'having a husband or wife', 'My parents are married.', 'Is he ___ to Kate? Yes, she’s his wife.', 'u2-3', '💍'),
    W('divorced', 'в разводе', '/dɪˈvɔːst/', 'adj', 'no longer married', 'My dad is divorced from my mum, but they’re friends.', 'They aren’t married now — they’re ___.', 'u2-3', '💔'),
    W('engaged', 'помолвлен', '/ɪnˈɡeɪdʒd/', 'adj', 'planning to get married', 'My cousin is engaged — the wedding is in June.', 'They aren’t married yet, but they’re ___.', 'u2-3', '💎'),
    // 2.5
    W('verse', 'строфа', '/vɜːs/', 'n', 'a part of a poem, like a paragraph', 'The poem has two verses.', 'A part of a poem is a ___.', 'u2-5', '📜'),
    W('rhyme', 'рифма; рифмоваться', '/raɪm/', 'n', 'words that end with the same sound', 'Cat and hat rhyme.', 'See and tree ___.', 'u2-5', '🎵'),
    // 3.1 rooms
    W('downstairs', 'внизу, на нижнем этаже', '/ˌdaʊnˈsteəz/', 'adv', 'on the lower floor of a house', 'The kitchen is downstairs.', 'The living room isn’t upstairs — it’s ___.', 'u3-1', '⬇️'),
    W('upstairs', 'наверху, на верхнем этаже', '/ˌʌpˈsteəz/', 'adv', 'on the higher floor of a house', 'My bedroom is upstairs.', 'Go ___ to the bathroom.', 'u3-1', '⬆️'),
    W('attic', 'чердак', '/ˈætɪk/', 'n', 'a room at the top of a house, under the roof', 'There are old toys in the attic.', 'The room under the roof is the ___.', 'u3-1', '🏠'),
    W('basement', 'подвал', '/ˈbeɪsmənt/', 'n', 'a room under the ground floor', 'The washing machine is in the basement.', 'The room under the house is the ___.', 'u3-1', '🪜'),
    W('hall', 'прихожая, холл', '/hɔːl/', 'n', 'the space inside the front door', 'Leave your shoes in the hall.', 'Coats and shoes go in the ___.', 'u3-1', '🚪'),
    W('study', 'кабинет', '/ˈstʌdi/', 'n', 'a room for reading and working', 'Dad works in the study.', 'I do my homework in the ___.', 'u3-1', '📚'),
    W('dining room', 'столовая', '/ˈdaɪnɪŋ ruːm/', 'n', 'a room where you eat meals', 'We eat dinner in the dining room.', 'There is a big table in the ___ room.', 'u3-1', '🍽️'),
    W('toilet', 'туалет', '/ˈtɔɪlət/', 'n', 'a small room with a toilet', 'The toilet is next to the bathroom.', 'Where’s the ___? — It’s upstairs.', 'u3-1', '🚽'),
    W('however', 'однако', '/haʊˈevə/', 'adv', 'used at the start of a sentence to show a contrast', 'The house is big. However, my room is small.', 'It’s cold outside. ___, it’s warm in the kitchen.', 'u3-1', '↔️'),
    // 3.2 furniture
    W('armchair', 'кресло', '/ˈɑːmtʃeə/', 'n', 'a comfortable chair for one person', 'Grandpa sleeps in his armchair.', 'He sits in a big soft ___ and reads.', 'u3-2', '🪑'),
    W('bookcase', 'книжный шкаф', '/ˈbʊkkeɪs/', 'n', 'furniture with shelves for books', 'My bookcase is full of comics.', 'Put the books in the ___.', 'u3-2', '📚'),
    W('carpet', 'ковёр', '/ˈkɑːpɪt/', 'n', 'a soft floor cover', 'There’s a red carpet in the living room.', 'I vacuum the ___ on Saturdays.', 'u3-2', '🟥'),
    W('cooker', 'плита', '/ˈkʊkə/', 'n', 'a machine for cooking food', 'Mum cooks soup on the cooker.', 'We make pasta on the ___.', 'u3-2', '🍳'),
    W('fridge', 'холодильник', '/frɪdʒ/', 'n', 'a cold box for food', 'Put the milk in the fridge.', 'The juice is cold — it’s in the ___.', 'u3-2', '🧊'),
    W('lamp', 'лампа', '/læmp/', 'n', 'a light for a table or floor', 'I read with my lamp on.', 'Turn on the ___ — it’s dark.', 'u3-2', '💡'),
    W('sink', 'раковина', '/sɪŋk/', 'n', 'a bowl with taps for washing', 'The dirty plates are in the sink.', 'Wash your hands in the ___.', 'u3-2', '🚰'),
    W('sofa', 'диван', '/ˈsəʊfə/', 'n', 'a long soft seat for two or more people', 'We watch films on the sofa.', 'Three people can sit on our ___.', 'u3-2', '🛋️'),
    W('washing machine', 'стиральная машина', '/ˈwɒʃɪŋ məˌʃiːn/', 'n', 'a machine that washes clothes', 'Put your T-shirts in the washing machine.', 'Dirty clothes go in the washing ___.', 'u3-2', '🧺'),
    W('in addition', 'кроме того', '/ɪn əˈdɪʃn/', 'phr', 'used to add another idea', 'The flat is big. In addition, it’s cheap.', 'It’s quiet. In ___, it’s near the school.', 'u3-2', '➕'),
    W('as well as', 'а также, наряду с', '/əz ˈwel əz/', 'phr', 'and also', 'He plays the guitar as well as the piano.', 'I like cats as well ___ dogs.', 'u3-2', '🔗'),
    // 3.3 chores & frequency
    W('vacuum the carpet', 'пылесосить ковёр', '/ˈvækjuːm ðə ˈkɑːpɪt/', 'phr', 'to clean the floor with a machine', 'I vacuum the carpet once a week.', 'The floor is dirty — please ___ the carpet.', 'u3-3', '🧹'),
    W('empty the rubbish bin', 'выносить мусор', '/ˈempti ðə ˈrʌbɪʃ bɪn/', 'phr', 'to take the rubbish out', 'My brother empties the rubbish bin every day.', 'The bin is full — can you ___ it?', 'u3-3', '🗑️'),
    W('do the washing-up', 'мыть посуду', '/duː ðə ˌwɒʃɪŋ ˈʌp/', 'phr', 'to wash plates, cups and pans', 'Dad does the washing-up after dinner.', 'The sink is full of plates — let’s ___ the washing-up.', 'u3-3', '🍽️', ['do the washing up']),
    W('make your bed', 'заправлять кровать', '/meɪk jɔː ˈbed/', 'phr', 'to tidy your bed after you get up', 'I make my bed every morning.', 'Get up and ___ your bed!', 'u3-3', '🛏️'),
    W('fold your clothes', 'складывать одежду', '/fəʊld jɔː ˈkləʊðz/', 'phr', 'to put clothes into neat shapes', 'Fold your clothes and put them in the cupboard.', 'Don’t leave T-shirts on the floor — ___ your clothes.', 'u3-3', '👕'),
    W('tidy your room', 'убирать комнату', '/ˈtaɪdi jɔː ˈruːm/', 'phr', 'to put things in the right places', 'I tidy my room on Sundays.', 'Your room is a mess — please ___ it.', 'u3-3', '🧸'),
    W('hardly ever', 'почти никогда', '/ˈhɑːdli ˈevə/', 'adv', 'almost never', 'I hardly ever cook.', 'I eat fish only once a year — I ___ eat it.', 'u3-3', '🐢'),
    W('once in a blue moon', 'очень редко', '/wʌns ɪn ə bluː ˈmuːn/', 'idiom', 'very rarely', 'My brother tidies his room once in a blue moon.', 'He calls me once in a blue ___ — maybe twice a year.', 'u3-3', '🌙'),
    W('survey', 'опрос', '/ˈsɜːveɪ/', 'n', 'asking many people the same questions', 'There are ten people in my survey.', 'We asked 20 students — here are the results of our ___.', 'u3-3', '📊'),
    // 3.4–3.5
    W('enormous', 'огромный', '/ɪˈnɔːməs/', 'adj', 'very, very big', 'They’ve got an enormous garden.', 'The house isn’t big — it’s ___!', 'u3-4', '🐘'),
    W('opposite', 'напротив', '/ˈɒpəzɪt/', 'prep', 'on the other side, facing', 'The gym is opposite the games room.', 'The bank is ___ the school, across the road.', 'u3-4', '↔️'),
    W('lazy', 'ленивый', '/ˈleɪzi/', 'adj', 'not wanting to work', 'He’s lazy — he never does any chores.', 'She stays on the sofa all day. She’s so ___!', 'u3-5', '🦥')
  );
})();
