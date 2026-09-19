(() => {
  'use strict';
  const G=window.PPMGARAGE; if(!G) return;
  const esc=G.esc;
  const item=(q,opts,name,sel='')=>'<div class="gq"><b>'+esc(q)+'</b><div class="gopts">'+opts.map(o=>'<button data-pick="'+esc(name)+'" data-value="'+esc(o)+'" class="'+(sel===o?'active':'')+'">'+esc(o)+'</button>').join('')+'</div><div class="gfeedback" data-fb="'+esc(name)+'"></div></div>';
  const state=id=>{const s=G.read();s.game=s.game||{};s.game[id]=s.game[id]||{};return {all:s,me:s.game[id]};};
  const save=(id,me)=>{const s=G.read();s.game=s.game||{};s.game[id]=me;G.write(s);};
  const celebrate=(host,id,msg)=>{G.complete(id);host.insertAdjacentHTML('afterbegin','<div class="garage-win"><b>QUEST KEY EARNED</b><span>'+esc(msg)+'</span></div>');};

  G.register({
    id:'gear', title:'Whose Gear?', skill:'GRAMMAR · POSSESSIVES', blurb:'Sort out the pit-lane lost property using my/mine, his, hers and possessive ’s.',
    render(host){
      const qs=[
        ['Leo says, “The black helmet belongs to me.” It is …',['his','her','mine'],'his','Leo = he.'],
        ['Maya says, “That action camera belongs to me.” The camera is …',['my','mine','hers'],'mine','No noun follows the gap.'],
        ['This is ___ model motorcycle. It belongs to Alex.',['Alex’s','Alex','Alexs'],'Alex’s','Name + ’s + noun.'],
        ['Nina and Sam brought the gloves. They are …',['their','theirs','our'],'theirs','The pronoun stands alone.'],
        ['Is this ___ camera, Max?',['your','yours','you'],'your','A noun follows the gap.'],
        ['The yellow key is Eva’s. It is ___ key.',['her','hers','she'],'her','Use the adjective before a noun.']
      ];
      const {me}=state('gear'); me.a=me.a||{};
      host.innerHTML='<div class="garage-brief"><b>THE SITUATION</b><p>The motor-show stand is closing. Six objects are in the wrong boxes. Return every item to its owner.</p></div><div class="garage-questions">'+qs.map((q,i)=>item(q[0],q[1],'q'+i,me.a[i]||'')).join('')+'</div><div class="garage-actions"><button class="solid-btn" data-gear-check>CHECK ALL</button><button class="ghost-btn" data-gear-hint>NEED A HINT?</button><button class="ghost-btn" data-gear-reset>TRY AGAIN</button></div><div class="garage-note" data-gear-note>Explain one answer to your tutor: Why this form?</div>';
      host._gear={qs,me};
    },
    bind(host){
      const {qs,me}=host._gear;
      host.querySelectorAll('[data-pick]').forEach(b=>b.onclick=()=>{me.a[+b.dataset.pick.slice(1)]=b.dataset.value;save('gear',me);G.openGame('gear')});
      host.querySelector('[data-gear-check]').onclick=()=>{
        let score=0; qs.forEach((q,i)=>{const fb=host.querySelector('[data-fb="q'+i+'"]');const ok=me.a[i]===q[2];if(ok)score++;fb.textContent=ok?'✓ Correct.':'↺ '+q[3];fb.className='gfeedback '+(ok?'ok':'no');});
        host.querySelector('[data-gear-note]').textContent='Score: '+score+'/'+qs.length+'. '+(score===qs.length?'Tell your tutor: “Whose is the camera?” and answer in two ways.':'Fix the marked boxes and check again.');
        if(score===qs.length)celebrate(host,'gear','Lost property sorted. Grammar did a real job.');
      };
      host.querySelector('[data-gear-hint]').onclick=()=>G.toast('Before a noun: my/your/her/their. Alone: mine/yours/hers/theirs.');
      host.querySelector('[data-gear-reset]').onclick=()=>{me.a={};save('gear',me);G.openGame('gear')};
    }
  });

  G.register({
    id:'map', title:'Map Run', skill:'DIRECTIONS · SPEAKING', blurb:'Follow compass clues across a route grid, then retell the route without the screen.',
    render(host){
      const rounds=[
        {start:20,moves:['north','north','east','east'],label:'Workshop'},
        {start:22,moves:['north-west','north','east'],label:'Photo Point'},
        {start:4,moves:['south','south-west','west'],label:'Pit Stop'},
        {start:10,moves:['east','north-east','east'],label:'Tech Tent'}
      ];
      const {me}=state('map'); me.r=Number(me.r||0)%rounds.length; me.pick=me.pick??null; const r=rounds[me.r];
      const delta={north:-5,south:5,east:1,west:-1,'north-east':-4,'north-west':-6,'south-east':6,'south-west':4};
      let pos=r.start; r.moves.forEach(m=>pos+=delta[m]); const target=pos; me.target=target; save('map',me);
      host.innerHTML='<div class="garage-brief"><b>ROUTE '+(me.r+1)+' / '+rounds.length+'</b><p>Start at <b>S</b>. Follow: <strong>'+r.moves.join(' → ')+'</strong>. Tap the final square.</p></div><div class="maprun" role="grid">'+Array.from({length:25},(_,i)=>'<button role="gridcell" data-cell="'+i+'" class="'+(i===r.start?'start ':'')+(me.pick===i?'picked':'')+'">'+(i===r.start?'S':String(i+1))+'</button>').join('')+'</div><div class="garage-actions"><button class="solid-btn" data-map-check>CHECK DESTINATION</button><button class="ghost-btn" data-map-hint>FIRST MOVE HINT</button><button class="ghost-btn" data-map-reset>RESET PICK</button></div><div class="garage-note" data-map-note>After checking, say the whole route aloud using first, then and finally.</div>';
      host._map={rounds,r,me,target};
    },
    bind(host){
      const {rounds,r,me,target}=host._map;
      host.querySelectorAll('[data-cell]').forEach(b=>b.onclick=()=>{me.pick=+b.dataset.cell;save('map',me);G.openGame('map')});
      host.querySelector('[data-map-check]').onclick=()=>{
        const note=host.querySelector('[data-map-note]');
        if(me.pick===target){note.innerHTML='✓ You reached <b>'+esc(r.label)+'</b>. Now retell the route aloud. <button class="ghost-btn small-btn" data-map-next>NEXT ROUTE →</button>';host.querySelector('[data-map-next]').onclick=()=>{me.r++;me.pick=null;if(me.r>=rounds.length){me.r=0;save('map',me);celebrate(host,'map','Four routes decoded. Now you can give directions, not just recognise them.');return}save('map',me);G.openGame('map')};}
        else note.textContent='↺ Not there yet. Check each compass move from S.';
      };
      host.querySelector('[data-map-hint]').onclick=()=>G.toast('First move: '+r.moves[0]+'.');
      host.querySelector('[data-map-reset]').onclick=()=>{me.pick=null;save('map',me);G.openGame('map')};
    }
  });

  G.register({
    id:'crew', title:'Crew Scan', skill:'READING · EVIDENCE', blurb:'Scan four teen profiles about models, bikes, tech and photography. Find evidence, not guesses.',
    render(host){
      const profiles=[
        ['MAX','British · 13','Max is from Bristol. He collects model cars and has got a small shelf with twelve models. His favourite is a yellow rally car. He has got one younger sister, Lily.'],
        ['LEO','Spanish · 12','Leo is from Valencia. He likes motorcycles as design objects and takes photos at motor shows with his uncle. He has got short dark hair and a blue camera.'],
        ['AMIR','German · 13','Amir lives near Hamburg. He follows electric-car technology and likes maps. His favourite school project was a poster about batteries and clean transport.'],
        ['DAN','Polish · 12','Dan is from Kraków. He rides a mountain bike with his family at weekends and uses an action camera. He has got two cousins who often join them.']
      ];
      const qs=[
        ['Who collects model cars?',['Max','Leo','Amir'],'Max'],
        ['Who is interested in electric-car technology?',['Amir','Dan','Leo'],'Amir'],
        ['Who uses an action camera?',['Dan','Max','Leo'],'Dan'],
        ['Which sentence proves Leo does not ride a motorcycle in this text?',['He likes motorcycles as design objects and takes photos at motor shows.','He is from Valencia.','He has got short dark hair.'],'He likes motorcycles as design objects and takes photos at motor shows.']
      ];
      const {me}=state('crew');me.a=me.a||{};
      host.innerHTML='<div class="garage-brief"><b>SCAN RULE</b><p>Read for the question. Then point to the exact words that prove your answer.</p></div><div class="crew-profiles">'+profiles.map(p=>'<article><small>'+p[1]+'</small><h3>'+p[0]+'</h3><p>'+p[2]+'</p></article>').join('')+'</div><div class="garage-questions">'+qs.map((q,i)=>item(q[0],q[1],'c'+i,me.a[i]||'')).join('')+'</div><div class="garage-actions"><button class="solid-btn" data-crew-check>CHECK EVIDENCE</button><button class="ghost-btn" data-crew-reset>CLEAR</button></div><div class="garage-note" data-crew-note>Student turn: choose one profile and tell your tutor two facts from memory.</div>';
      host._crew={qs,me};
    },
    bind(host){
      const {qs,me}=host._crew;
      host.querySelectorAll('[data-pick]').forEach(b=>b.onclick=()=>{me.a[+b.dataset.pick.slice(1)]=b.dataset.value;save('crew',me);G.openGame('crew')});
      host.querySelector('[data-crew-check]').onclick=()=>{let n=0;qs.forEach((q,i)=>{const fb=host.querySelector('[data-fb="c'+i+'"]');const ok=me.a[i]===q[2];n+=ok;fb.textContent=ok?'✓ Evidence works.':'↺ Go back to the profile and find proof.';fb.className='gfeedback '+(ok?'ok':'no')});host.querySelector('[data-crew-note]').textContent='Score: '+n+'/4. '+(n===4?'Close the text. Describe one teen from memory.':'Use the text, not a guess.');if(n===4)celebrate(host,'crew','Profiles scanned. Reading = finding evidence, not hunting random words.')};
      host.querySelector('[data-crew-reset]').onclick=()=>{me.a={};save('crew',me);G.openGame('crew')};
    }
  });

  G.register({
    id:'radio', title:'Garage Radio', skill:'LISTENING · GIST + DETAIL', blurb:'Hear one motor-show voice note twice. Transcript unlocks only after an attempt.',
    render(host){
      const script='Hi, it’s Leo. I’m at the motor show in Valencia with my older cousin Marco. We came by train because the station is close to the exhibition hall. My favourite thing here is a blue electric motorcycle. I’m not riding it — it’s a display model — but the design is amazing. Marco prefers a black electric car near the main entrance. The small camera in my hand is mine. The red backpack beside me is Marco’s. After the show, we are meeting my uncle at a café north of the station.';
      const qs=[
        ['What is the voice note mainly about?',['A visit to a motor show','A motorcycle lesson','A school test'],'A visit to a motor show'],
        ['How did Leo and Marco travel there?',['By train','By car','By bike'],'By train'],
        ['Whose is the red backpack?',['Marco’s','Leo’s','His uncle’s'],'Marco’s'],
        ['Where is the café?',['north of the station','south of the hall','east of Valencia'],'north of the station']
      ];
      const {me}=state('radio');me.a=me.a||{}; const tried=!!me.tried;
      host.innerHTML='<div class="garage-radio"><div class="radio-dial">FM<br><b>06</b></div><div><div class="eyebrow">FIRST LISTEN: GIST · SECOND: DETAIL</div><p>Do not try to catch every word.</p><div class="garage-actions"><button class="solid-btn" data-radio-play>▶ PLAY VOICE NOTE</button><button class="ghost-btn" data-radio-stop>■ STOP</button>'+(tried?'<button class="ghost-btn" data-radio-transcript>TRANSCRIPT</button>':'<button class="ghost-btn" disabled>🔒 TRANSCRIPT AFTER CHECK</button>')+'</div><small data-radio-status>Ready when you are.</small></div></div><div class="garage-questions">'+qs.map((q,i)=>item(q[0],q[1],'r'+i,me.a[i]||'')).join('')+'</div><div class="garage-actions"><button class="solid-btn" data-radio-check>CHECK LISTENING</button><button class="ghost-btn" data-radio-reset>TRY AGAIN</button></div><div data-radio-script></div>';
      host._radio={script,qs,me};
    },
    bind(host){
      const {script,qs,me}=host._radio, status=host.querySelector('[data-radio-status]');
      host.querySelector('[data-radio-play]').onclick=()=>G.speak(script,status);
      host.querySelector('[data-radio-stop]').onclick=()=>{window.speechSynthesis?.cancel?.();status.textContent='Stopped. Replay when ready.'};
      host.querySelectorAll('[data-pick]').forEach(b=>b.onclick=()=>{me.a[+b.dataset.pick.slice(1)]=b.dataset.value;save('radio',me);G.openGame('radio')});
      host.querySelector('[data-radio-check]').onclick=()=>{me.tried=true;save('radio',me);let n=0;qs.forEach((q,i)=>{const fb=host.querySelector('[data-fb="r'+i+'"]');const ok=me.a[i]===q[2];n+=ok;fb.textContent=ok?'✓':'↺ Listen again for this detail.';fb.className='gfeedback '+(ok?'ok':'no')});if(n===4)celebrate(host,'radio','Voice note decoded. Now tell your tutor one detail you remember.');else setTimeout(()=>G.openGame('radio'),650)};
      host.querySelector('[data-radio-transcript]')?.addEventListener('click',()=>{host.querySelector('[data-radio-script]').innerHTML='<div class="garage-transcript"><b>TRANSCRIPT</b><p>'+esc(script)+'</p><small>Language hunt: find one possessive, one place phrase and one family word.</small></div>'});
      host.querySelector('[data-radio-reset]').onclick=()=>{me.a={};save('radio',me);G.openGame('radio')};
    }
  });

  G.register({
    id:'shift', title:'Quick Shift', skill:'GRAMMAR · SENTENCE BUILDING', blurb:'Rebuild five useful sentences from shuffled chunks. Accuracy first; speed is optional.',
    render(host){
      const sets=[
        ['My cousin','has got','a model car.'],
        ['Whose helmet','is this?'],
        ['The camera','is mine.'],
        ['They','are from','Japan.'],
        ['The café','is north-east of','the station.']
      ];
      const {me}=state('shift');me.r=Number(me.r||0)%sets.length;me.order=me.order||[];me.bank=me.bank||G.shuffle(sets[me.r]);
      host.innerHTML='<div class="garage-brief"><b>SHIFT '+(me.r+1)+' / '+sets.length+'</b><p>Tap chunks to build one natural sentence. No speed penalty.</p></div><div class="shift-build">'+(me.order.length?me.order.map((x,i)=>'<button data-shift-built="'+i+'">'+esc(x)+'</button>').join(''):'<span>Build here…</span>')+'</div><div class="shift-bank">'+me.bank.map((x,i)=>'<button data-shift-bank="'+i+'">'+esc(x)+'</button>').join('')+'</div><div class="garage-actions"><button class="solid-btn" data-shift-check>CHECK</button><button class="ghost-btn" data-shift-undo>UNDO</button><button class="ghost-btn" data-shift-hint>HINT</button><button class="ghost-btn" data-shift-clear>CLEAR</button></div><div class="garage-note" data-shift-note>Read your sentence aloud before checking.</div>';
      host._shift={sets,me};
    },
    bind(host){
      const {sets,me}=host._shift;
      host.querySelectorAll('[data-shift-bank]').forEach(b=>b.onclick=()=>{const i=+b.dataset.shiftBank;me.order.push(me.bank[i]);me.bank.splice(i,1);save('shift',me);G.openGame('shift')});
      host.querySelectorAll('[data-shift-built]').forEach(b=>b.onclick=()=>{const i=+b.dataset.shiftBuilt;me.bank.push(me.order[i]);me.order.splice(i,1);save('shift',me);G.openGame('shift')});
      host.querySelector('[data-shift-check]').onclick=()=>{const answer=sets[me.r].join(' '),made=me.order.join(' '),note=host.querySelector('[data-shift-note]');if(made===answer){note.innerHTML='✓ Natural sentence. <button class="ghost-btn small-btn" data-shift-next>NEXT SHIFT →</button>';host.querySelector('[data-shift-next]').onclick=()=>{me.r++;me.order=[];if(me.r>=sets.length){me.r=0;me.bank=[];save('shift',me);celebrate(host,'shift','Five sentences rebuilt. Form is becoming automatic.');return}me.bank=G.shuffle(sets[me.r]);save('shift',me);G.openGame('shift')}}else note.textContent='↺ Check word order. Start with the subject or question word.'};
      host.querySelector('[data-shift-undo]').onclick=()=>{if(me.order.length)me.bank.push(me.order.pop());save('shift',me);G.openGame('shift')};
      host.querySelector('[data-shift-hint]').onclick=()=>G.toast('First chunk: '+sets[me.r][0]);
      host.querySelector('[data-shift-clear]').onclick=()=>{me.order=[];me.bank=G.shuffle(sets[me.r]);save('shift',me);G.openGame('shift')};
    }
  });

  G.register({
    id:'build', title:'Build a Ride', skill:'CHOICE · WRITING · SPEAKING', blurb:'Design a fictional transport concept, then pitch it in English with reasons.',
    render(host){
      const {me}=state('build');me.kind=me.kind||'';me.colour=me.colour||'';me.place=me.place||'';me.feature=me.feature||'';me.pitch=me.pitch||'';me.check=me.check||{};
      const row=(label,key,opts)=>'<div class="build-row"><b>'+label+'</b>'+opts.map(o=>'<button data-build="'+key+'" data-value="'+esc(o)+'" class="'+(me[key]===o?'active':'')+'">'+esc(o)+'</button>').join('')+'</div>';
      host.innerHTML='<div class="garage-brief"><b>MEANINGFUL CHOICE</b><p>There is no “correct” design. Your English must make the choices clear.</p></div><div class="ride-builder">'+row('1 · CONCEPT','kind',['electric car','rally car','motorcycle model','mountain bike'])+row('2 · COLOUR','colour',['black','blue','yellow','red'])+row('3 · COUNTRY / PLACE','place',['Japan','Spain','Britain','Germany'])+row('4 · FEATURE','feature',['camera mount','smart lights','navigation screen','long-life battery'])+'</div><div class="ride-card"><small>CONCEPT FILE</small><h3>'+(me.colour?esc(me.colour.toUpperCase())+' ':'')+(me.kind?esc(me.kind.toUpperCase()):'YOUR DESIGN')+'</h3><p>'+(me.place?'Designed for '+esc(me.place)+'. ':'')+(me.feature?'It has got a '+esc(me.feature)+'.':'Choose four details above.')+'</p></div><label class="garage-write"><b>YOUR 4–6 SENTENCE PITCH</b><textarea data-build-pitch placeholder="This is my… It is… It has got… I chose it because…">'+esc(me.pitch)+'</textarea></label><div class="selfcheck">'+['I used be correctly.','I used has got.','I included a country/place.','I gave a reason with because.'].map((x,i)=>'<label><input type="checkbox" data-build-check="'+i+'" '+(me.check[i]?'checked':'')+'> '+esc(x)+'</label>').join('')+'</div><div class="garage-actions"><button class="solid-btn" data-build-done>SAVE CONCEPT / DONE</button><button class="ghost-btn" data-build-model>NEED A FRAME?</button></div><div class="garage-note" data-build-note>Then pitch it to your tutor for 30–45 seconds. Tutor asks: “Why this one?”</div>';
      host._build={me};
    },
    bind(host){
      const {me}=host._build;
      host.querySelectorAll('[data-build]').forEach(b=>b.onclick=()=>{me[b.dataset.build]=b.dataset.value;save('build',me);G.openGame('build')});
      host.querySelector('[data-build-pitch]').oninput=e=>{me.pitch=e.target.value;save('build',me)};
      host.querySelectorAll('[data-build-check]').forEach(c=>c.onchange=()=>{me.check[c.dataset.buildCheck]=c.checked;save('build',me)});
      host.querySelector('[data-build-model]').onclick=()=>G.toast('Frame: This is my… It is… It has got… It is for… I chose… because…');
      host.querySelector('[data-build-done]').onclick=()=>{const ready=me.kind&&me.colour&&me.place&&me.feature&&me.pitch.trim().split(/\s+/).length>=18&&[0,1,2,3].every(i=>me.check[i]);if(ready)celebrate(host,'build','Concept built. The real win is the language in your pitch.');else host.querySelector('[data-build-note]').textContent='Finish four choices, write at least 18 words, and use the checklist before saving.'};
    }
  });

  G.register({
    id:'boss', title:'Road Trip Boss', skill:'FINAL COMMUNICATION', blurb:'Choose one mission brief. Plan, speak for up to 45 seconds, then handle tutor follow-up questions.',
    render(host){
      const briefs=[
        ['Motor Show Day — London','You are going with a cousin. Say who is in your group, what each person has got, where the venue is and how you get there from the station.'],
        ['Model Car Expo — Tokyo','Invent an exchange student. Give identity, family and appearance clues, describe one model and say whose it is.'],
        ['Bike Weekend — Scotland','Plan a safe family bike weekend. Describe the people, two possessions and a route using at least three compass directions.']
      ];
      const {me}=state('boss');me.brief=me.brief??-1;me.notes=me.notes||'';me.check=me.check||{};me.time=Number.isFinite(me.time)?me.time:45;
      const chosen=briefs[me.brief];
      host.innerHTML='<div class="boss-briefs">'+briefs.map((b,i)=>'<button data-boss-brief="'+i+'" class="'+(me.brief===i?'active':'')+'"><small>BRIEF 0'+(i+1)+'</small><b>'+esc(b[0])+'</b><span>'+esc(b[1])+'</span></button>').join('')+'</div>'+(chosen?'<div class="garage-brief"><b>YOUR MISSION</b><p>'+esc(chosen[1])+'</p></div>':'')+'<label class="garage-write"><b>PLAN — KEY WORDS ONLY</b><textarea data-boss-notes placeholder="names · family · appearance · possessions · route · place">'+esc(me.notes)+'</textarea></label><div class="boss-timer"><b data-boss-clock>'+me.time+'</b><span>SEC</span><button class="solid-btn" data-boss-start>'+(me.running?'PAUSE':'START OPTIONAL TIMER')+'</button><button class="ghost-btn" data-boss-reset-time>RESET 45</button></div><div class="selfcheck">'+['I used full sentences.','I used language from at least 4 missions.','I gave a reason or extra detail.','I answered two tutor follow-up questions.'].map((x,i)=>'<label><input type="checkbox" data-boss-check="'+i+'" '+(me.check[i]?'checked':'')+'> '+esc(x)+'</label>').join('')+'</div><div class="garage-actions"><button class="solid-btn" data-boss-done>MISSION COMPLETE</button><button class="ghost-btn" data-boss-hint>NEED A HINT?</button></div><div class="garage-note" data-boss-note>No automatic “correct/incorrect” here. Tutor feedback: one strong point + one upgrade, then a second attempt if useful.</div>';
      host._boss={briefs,me};
    },
    bind(host){
      const {me}=host._boss; let timer=null;
      host.querySelectorAll('[data-boss-brief]').forEach(b=>b.onclick=()=>{me.brief=+b.dataset.bossBrief;save('boss',me);G.openGame('boss')});
      host.querySelector('[data-boss-notes]').oninput=e=>{me.notes=e.target.value;save('boss',me)};
      host.querySelectorAll('[data-boss-check]').forEach(c=>c.onchange=()=>{me.check[c.dataset.bossCheck]=c.checked;save('boss',me)});
      const run=()=>{if(timer)return;me.running=true;save('boss',me);host.querySelector('[data-boss-start]').textContent='PAUSE';timer=setInterval(()=>{me.time=Math.max(0,me.time-1);host.querySelector('[data-boss-clock]').textContent=me.time;save('boss',me);if(me.time===0){clearInterval(timer);timer=null;me.running=false;save('boss',me);G.toast('Time. Finish the sentence — no penalty.')}},1000)};
      host.querySelector('[data-boss-start]').onclick=e=>{if(timer){clearInterval(timer);timer=null;me.running=false;e.currentTarget.textContent='START OPTIONAL TIMER';save('boss',me)}else run()};
      host.querySelector('[data-boss-reset-time]').onclick=()=>{if(timer)clearInterval(timer);me.time=45;me.running=false;save('boss',me);G.openGame('boss')};
      host.querySelector('[data-boss-hint]').onclick=()=>G.toast('Route: identity → family → object → place/route → reason. Use because, and, but.');
      host.querySelector('[data-boss-done]').onclick=()=>{const ok=me.brief>=0&&me.notes.trim()&&[0,1,2,3].every(i=>me.check[i]);if(ok)celebrate(host,'boss','Boss cleared. You combined the module into real communication.');else host.querySelector('[data-boss-note]').textContent='Choose a brief, make a short plan, speak, then complete the four-point self/tutor check.'};
    }
  });
})();