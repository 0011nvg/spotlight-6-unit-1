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


  addAfter(get('whose'), 'My or Mine?', {
    type:'choice', skill:'READING', title:'Lost & Found Chat',
    intro:'Read the chat for gist, then track each object and owner.',
    preQuestion:'What do people usually write when they find something that is not theirs?',
    readingText:`MAYA: I found a blue watch under the desk. Is it yours, Leo?\nLEO: No, mine is black. Maybe it’s Sam’s.\nSAM: Not mine! My watch is at home. But the camera next to it is ours — Nina and I brought it for the project.\nNINA: Yes, the camera is ours. The blue watch is Eva’s. She showed it to me this morning.\nMAYA: Great. I’ll put Eva’s watch and your camera in the lost property box.`,
    items:[
      ['Whose is the blue watch?',['Eva’s','Leo’s','Sam’s'],'Eva’s'],
      ['Whose is the camera?',['Nina and Sam’s','Maya’s','Leo’s'],'Nina and Sam’s'],
      ['Why does Leo say “mine”?',['Because no noun follows it.','Because watch is plural.','Because he is asking a question.'],'Because no noun follows it.','Mine stands alone.']
    ]
  });

  insertBeforeSpeaking(get('whose'), {
    type:'speaking', skill:'WRITING', title:'Write a Lost-Property Message',
    intro:'Write 4–5 short sentences. Make the owner clear without repeating the same structure.',
    writingTask:'You found a bag, a watch and a camera after a club meeting. Write a message asking who they belong to. Use at least one possessive adjective, one possessive pronoun and one possessive ’s phrase.',
    writingFrame:'I found …\nIs this your …?\nThe … might be …’s.\nIf it is yours, …',
    writingModel:'I found a black bag and a small camera after the meeting. Is this your bag, Maya? The camera might be Leo’s. My bag is blue, so the black one isn’t mine. If one of these things is yours, tell me tomorrow.',
    prompts:['my / your / his / her / our / their + noun','mine / yours / his / hers / ours / theirs','name + ’s + noun'],
    check:['I wrote 4–5 complete sentences.','I used a possessive adjective.','I used a possessive pronoun.','I used possessive ’s correctly.']
  });

  insertBeforeSpeaking(get('identity'), {
    type:'choice', skill:'LISTENING', title:'Club Desk: Registration',
    intro:'Listen to the registration conversation. First: who and why? Second: exact details.',
    listenLead:'A new student is registering for a photography club.',
    listenScript:`Receptionist: Hi. Are you here to join the photography club? Student: Yes, please. Receptionist: Great. What’s your full name? Student: Daniel Kim. Receptionist: And your date of birth? Student: The twelfth of May, twenty fourteen. Receptionist: Thanks. What’s your home address? Student: Fifteen King Street. Receptionist: And a phone number? Student: Zero seven nine four six, three one eight, two zero five. Receptionist: Perfect. Here is your membership card. Please check your name before you leave.`,
    items:[
      ['Why is Daniel at the desk?',['To join a photography club','To buy a camera','To meet a cousin'],'To join a photography club'],
      ['What information does the receptionist ask for first?',['Full name','Phone number','Address'],'Full name'],
      ['What should Daniel check before he leaves?',['His name on the membership card','The price of a camera','The club timetable'],'His name on the membership card']
    ]
  });

  insertBeforeSpeaking(get('identity'), {
    type:'speaking', skill:'WRITING', title:'Message to a New Club Partner',
    intro:'Turn formal identity information into a natural short message.',
    writingTask:'Write a 45–60 word message to a new club partner. Introduce yourself, say where you are from, give one safe non-private fact, and ask two questions. Do NOT use a real home address or real phone number.',
    writingFrame:'Hi! I’m …\nI’m from … and I’m …\nI like …\nWhat about you? …?',
    writingModel:'Hi! I’m Max. I’m from Spain and I’m Spanish. I’m twelve and I love football and photography. I’m new to the club, so say hello when you see me. Where are you from? What do you like taking photos of?',
    prompts:['full name / first name','I’m from … / I’m …','What about you?','Where are you from?'],
    check:['I used safe information only.','I wrote 45–60 words.','I asked two questions.','I checked capitals and punctuation.']
  });

})();
