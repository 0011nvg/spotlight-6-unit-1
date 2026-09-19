(() => {
  const data = window.COURSE_DATA;
  if (!data || !Array.isArray(data.missions)) return;

  const get = id => data.missions.find(m => m.id === id);
  const insertBeforeSpeaking = (mission, ...stages) => {
    if (!mission) return;
    const i = mission.stages.findIndex(s => s.type === 'speaking');
    mission.stages.splice(i >= 0 ? i : mission.stages.length, 0, ...stages);
  };
  const addAfter = (mission, title, ...stages) => {
    if (!mission) return;
    const i = mission.stages.findIndex(s => s.title === title);
    mission.stages.splice(i >= 0 ? i + 1 : mission.stages.length, 0, ...stages);
  };
  const attachVideo = (mission, video, prompts) => {
    if (!mission) return;
    const stage = [...mission.stages].reverse().find(s => s.type === 'speaking') || mission.stages[mission.stages.length - 1];
    if (!stage) return;
    stage.video = video;
    stage.videoPrompts = prompts;
  };


  insertBeforeSpeaking(get('passport'), {
    type:'choice', skill:'READING', title:'Arrival Board Stories',
    intro:'Read the mini travel notes. Match countries, nationalities and people.',
    preQuestion:'At an airport, where can you see country names before you speak to anyone?',
    readingText:`Three students are arriving for an international school week. Marta’s flight is from Warsaw. She is Polish and speaks Polish and English. Kenji is from Tokyo, so he is Japanese. His host family has never visited Japan. Camila is Brazilian, but her flight arrives from Madrid because she spent a week in Spain first. On their welcome cards, each student writes a country, a nationality and one language they can use.`,
    items:[
      ['Where is Marta from?',['Poland','Japan','Brazil'],'Poland'],
      ['What nationality is Kenji?',['Japanese','Polish','Spanish'],'Japanese'],
      ['Why can “Madrid” be a misleading clue for Camila?',['She is Brazilian but travelled via Spain.','She lives in Madrid.','She is Spanish.'],'She is Brazilian but travelled via Spain.']
    ]
  });

  attachVideo(get('passport'),
    {id:'2Qpa1VPWSJg', title:'Countries and Nationalities in English | A1–A2', channel:'Habla Manana', start:18, end:157, url:'https://www.youtube.com/watch?v=2Qpa1VPWSJg&t=18s'},
    ['Write 5 country → nationality pairs you hear.','Circle one pair whose spelling surprises you.','Ask your tutor: “Where are you from?” and “What nationality are you?”']
  );

  insertBeforeSpeaking(get('world'), {
    type:'choice', skill:'LISTENING', title:'Map Call: Find the Cabin',
    intro:'Listen to the phone directions. Build the route in your head before answering.',
    listenLead:'A friend is explaining where a cabin is on a simple map.',
    listenScript:`Start at the lake in the centre of the map. Go north until you reach the small bridge. From the bridge, move east to the forest. The cabin is not inside the forest. It is just south-east of it, between the forest and the hills. There is a river west of the cabin and a road to the south. If you reach the village, you have gone too far south.`,
    items:[
      ['Where do you start?',['At the lake','At the village','At the cabin'],'At the lake'],
      ['Where is the forest from the bridge?',['east','west','south'],'east'],
      ['Where is the cabin in relation to the forest?',['south-east','north-west','north'],'south-east'],
      ['What is west of the cabin?',['a river','a road','a village'],'a river']
    ]
  });

  insertBeforeSpeaking(get('world'), {
    type:'choice', skill:'READING', title:'Mystery Place File',
    intro:'Read like a map detective: broad location first, then exact clues.',
    preQuestion:'Which is more useful first: “north-east” or a tiny street name? Why?',
    readingText:`MYSTERY FILE — The place is in the north of a large country. It is not on the coast. Mountains are to the west and a wide valley is to the east. The town itself is south of a national park and north-west of a large lake. Most visitors arrive by road from the south. Your job is not to guess a real town. Your job is to build a clear mental map from the language.`,
    items:[
      ['Where are the mountains?',['west of the place','east of the place','south of the place'],'west of the place'],
      ['Where is the lake?',['south-east of the town','north-west of the town','west of the mountains'],'south-east of the town'],
      ['What is the main reading skill here?',['Building a mental map from location clues','Memorising a town name','Finding a postcode'],'Building a mental map from location clues']
    ]
  });

  attachVideo(get('country'),
    {id:'7nt-Kn6bi9U', title:'How the UK is divided', channel:'Learn English with Gill · engVid', start:16, end:124, url:'https://www.youtube.com/watch?v=7nt-Kn6bi9U&t=16s'},
    ['Write the four country names you hear.','Which one contains London?','Explain the difference between “the UK” and “England” in one simple sentence.']
  );

  insertBeforeSpeaking(get('country'), {
    type:'speaking', skill:'WRITING', title:'Build a Country Factfile',
    intro:'Use the language from the mission to create a clean mini factfile.',
    writingTask:'Write 60–80 words about a real country you know. Include location, capital, nationality, currency or flag, and one interesting fact. If you are not sure a fact is correct, mark it “check later” instead of inventing it.',
    writingFrame:'… is in the … of …\nThe capital is …\nPeople from … are …\nThe currency is …\nOne interesting fact is …',
    writingModel:'Poland is in central Europe. The capital is Warsaw. People from Poland are Polish. The currency is the złoty. The country has mountains in the south and a coast in the north. One place I would like to visit is Kraków because I have heard it has a beautiful old town.',
    prompts:['location','capital','nationality','currency / flag','one interesting fact'],
    check:['I included at least 5 factfile points.','I used country and nationality words correctly.','I wrote 60–80 words.','I did not invent uncertain facts.']
  });

  insertBeforeSpeaking(get('final'), {
    type:'choice', skill:'LISTENING', title:'Final Briefing',
    intro:'One last listening: collect identity, family, appearance and location clues together.',
    listenLead:'A youth exchange organiser is introducing a new participant.',
    listenScript:`This is Sofia Martinez. She is twelve and she is Spanish. She is from Valencia, in the east of Spain. Sofia has got one older brother and two cousins who live near her. She is quite tall and has got long wavy dark hair. Her favourite object is a small camera that was a present from her aunt. The camera is hers, but the red backpack beside it is her brother’s. Sofia loves maps and wants to learn more about Scotland during the exchange.`,
    items:[
      ['What nationality is Sofia?',['Spanish','Scottish','Brazilian'],'Spanish'],
      ['Where is Valencia in Spain?',['in the east','in the north-west','in the south-west'],'in the east'],
      ['Whose is the camera?',['Sofia’s','her brother’s','her cousin’s'],'Sofia’s'],
      ['What does Sofia want to learn about?',['Scotland','Japan','Brazil'],'Scotland']
    ]
  });

  insertBeforeSpeaking(get('final'), {
    type:'speaking', skill:'WRITING', title:'Final World File',
    intro:'Create a short profile that brings the whole module together.',
    writingTask:'Write 80–100 words about a fictional exchange student. Include identity, family, appearance, one possession and one country/location fact. Then read it aloud to your tutor, who asks two follow-up questions.',
    writingFrame:'Name + age + nationality\nFamily\nAppearance\nPossession + whose it is\nCountry/location fact\nOne personal detail',
    writingModel:'Meet Lina Costa. She is thirteen and Brazilian. She has got one brother and a big family with lots of cousins. Lina is tall and slim and has got long curly dark hair. Her favourite thing is a yellow camera. It is hers, but the camera bag is her dad’s. Lina is from Recife, in the north-east of Brazil. She loves taking photos of places and people when she travels.',
    prompts:['identity','family','appearance','possession','place'],
    check:['I wrote 80–100 words.','I used language from at least 4 missions.','I checked have/has got and possessives.','I read it aloud and answered two questions.']
  });

  // Add skill labels to old stages without pretending every closed task is the same skill.
  data.missions.forEach(m => m.stages.forEach(s => {
    if (!s.skill) {
      if (s.type === 'speaking') s.skill = 'SPEAKING';
      else if (s.type === 'profile') s.skill = 'WRITING';
      else if (s.type === 'memory' || s.type === 'sort') s.skill = 'VOCABULARY';
      else if (/possess|have got|is or has|grammar|my or mine/i.test(`${s.title} ${m.focus}`)) s.skill = 'GRAMMAR';
      else s.skill = 'LANGUAGE';
    }
  }));

  const extraTitles = {
    family:['Missing Letters','Word Snap'],
    face:['Spell the Clue','Opposite Match'],
    whose:['Before a Noun / Alone','Fix the Robot'],
    identity:['Natural or Awkward?','Identity Word Snap'],
    passport:['Nationality Spelling','Word Ending Lab'],
    world:['Spell the Compass','Compass Snap'],
    country:['Factfile Vocabulary','Earth Data Lab'],
    final:['Round 1 — Family Signal','Round 2 — Face Scan']
  };
  data.missions.forEach(m => m.stages.forEach(s => {
    if ((extraTitles[m.id] || []).includes(s.title)) s.extra = true;
  }));
})();
