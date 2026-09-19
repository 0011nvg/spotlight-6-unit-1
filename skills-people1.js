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


  addAfter(get('family'), 'Family Radar',
    {
      type:'choice', skill:'READING', title:'The Saturday Photo',
      intro:'Predict first. Then read once for the big idea and again for details.',
      preQuestion:'Before you read: Why do families usually take a group photo?',
      readingText:`It is Saturday afternoon and the Martins are getting ready for a family photo. Ella is twelve and she has got one younger brother, Max. Their parents, Nina and Tom, are standing behind them. Nina has got short wavy hair and Tom has got glasses. Ella’s aunt Rosa is there too. Rosa is Tom’s sister, so she is Max and Ella’s aunt. She is married to Ben. Their son Leo is eight, which means Leo is Ella and Max’s cousin. Grandma May is sitting in the middle. She is sixty-eight, but she says photos make her feel twenty again. Everyone is smiling — except Max. He has got ice cream on his new shirt.`,
      items:[
        ['What is the text mainly about?',['A family getting ready for a photo','A birthday party','A school day'],'A family getting ready for a photo','Look for the situation that connects everybody.'],
        ['Who is Leo?',['Ella’s cousin','Ella’s brother','Ella’s uncle'],'Ella’s cousin','Follow Rosa → Ben → Leo.'],
        ['Who has got short wavy hair?',['Nina','Ella','Grandma May'],'Nina','Find the appearance clue.'],
        ['Why is Max not smiling?',['His shirt has ice cream on it.','He does not like Leo.','He is tired.'],'His shirt has ice cream on it.','The reason comes in the final sentence.']
      ]
    },
    {
      type:'choice', skill:'LISTENING', title:'Voice Note: Meet My Family',
      intro:'Listen once for gist. Listen again for details. Do not open the transcript before your first check.',
      listenLead:'A student called Amy is sending a voice note to a new English-speaking friend.',
      listenScript:`Hi! I’m Amy. You asked about my family, so here is the quick version. I live with my mum, my dad and my older brother, Josh. Josh is fourteen and he is very tall. He has got dark curly hair. My mum is called Kate. She has got one sister, my aunt Lucy. Aunt Lucy is married to Mark and they have got twin daughters, Mia and Zoe. The twins are nine. We usually meet on Sundays at my grandparents’ house. My grandad makes lunch and my grandma always takes too many photos.`,
      items:[
        ['What is Amy doing?',['Introducing her family','Inviting someone to school','Describing her town'],'Introducing her family','Listen for the purpose of the message.'],
        ['How old is Josh?',['14','9','12'],'14','The age comes just after his name.'],
        ['Who are Mia and Zoe?',['Amy’s cousins','Amy’s sisters','Amy’s aunts'],'Amy’s cousins','Think about Aunt Lucy’s children.'],
        ['Where does the family usually meet?',['At the grandparents’ house','At Amy’s school','At a café'],'At the grandparents’ house','Listen for the Sunday routine.']
      ]
    }
  );

  attachVideo(get('family'),
    {id:'N3tGECHcACQ', title:'A1 - Family Members | 3-Minute Podcast with Cathoven', channel:'Cathoven A.I.', start:0, end:0, url:'https://www.youtube.com/watch?v=N3tGECHcACQ'},
    ['Write down 4 family words you hear.','Tell your tutor one complete sentence you understood.','Which word was easiest to catch? Which was hardest?']
  );

  addAfter(get('face'), 'Spot the Detail', {
    type:'choice', skill:'LISTENING', title:'Station Announcement: Who Am I Looking For?',
    intro:'Listen to a short description and identify the right person.',
    listenLead:'A girl is describing her cousin to someone at a busy station.',
    listenScript:`I’m looking for my cousin Daniel. He is about thirteen and he is quite tall and slim. He has got short straight brown hair and dark eyes. He is wearing a green hoodie and carrying a small black backpack. He has got glasses, but he sometimes takes them off. His friend Sam is with him. Sam is shorter and has got curly fair hair, so please don’t confuse them.`,
    items:[
      ['Who is the speaker looking for?',['Daniel','Sam','Her brother'],'Daniel'],
      ['Daniel is …',['tall and slim','short and slim','tall and heavy'],'tall and slim'],
      ['What kind of hair has Daniel got?',['short straight brown hair','curly fair hair','long dark hair'],'short straight brown hair'],
      ['What can help identify Daniel?',['glasses and a black backpack','a red hat','a blue suitcase'],'glasses and a black backpack']
    ]
  });

  insertBeforeSpeaking(get('face'), {
    type:'choice', skill:'READING', title:'Casting Notes',
    intro:'Read three mini descriptions. Find the best match and the evidence.',
    preQuestion:'Which details are most useful when you need to identify a person quickly?',
    readingText:`CASTING NOTES — Alex is young and tall with short dark hair and big brown eyes. Priya is in her early forties. She is slim and has got long wavy dark hair. Ben is middle-aged and quite short. He has got grey hair, glasses and a friendly smile. The director needs: (1) a young student, (2) an adult with long wavy hair, and (3) a friendly older neighbour.`,
    items:[
      ['Who should play the young student?',['Alex','Priya','Ben'],'Alex'],
      ['Who matches “long wavy hair”?',['Priya','Alex','Ben'],'Priya'],
      ['Which detail is evidence for Ben as the neighbour?',['grey hair and a friendly smile','big brown eyes','long wavy hair'],'grey hair and a friendly smile']
    ]
  });

})();
