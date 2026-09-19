(() => {
  const DATA = window.COURSE_DATA;
  const STORAGE_KEY = 'ppm_spotlight6_module1_v2';
  const app = document.getElementById('app');

  const freshState = () => ({
    view: 'home', currentMission: 'family', stageIndex: 0,
    answers: {}, attempts: {}, checked: {}, completed: {}, profiles: {}, memory: {}, wordLab: {group:'family',mode:'see'}
  });
  let state = loadState();
  let teacherOpen = false;

  function loadState(){
    try { return {...freshState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')}; }
    catch { return freshState(); }
  }
  function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function escapeHTML(value=''){
    return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }
  function norm(value=''){
    return String(value).trim().toLowerCase().replace(/[’‘]/g,"'").replace(/\s+/g,' ').replace(/[.!?]+$/,'');
  }
  function activityKey(missionId, idx){ return `${missionId}:${idx}`; }
  function mission(){ return DATA.missions.find(m => m.id === state.currentMission) || DATA.missions[0]; }
  function totalActivities(){ return DATA.missions.reduce((a,m)=>a+m.stages.filter(s=>!s.extra).length,0); }
  function progressCount(){ let count=0; DATA.missions.forEach(m=>m.stages.forEach((s,i)=>{ if(!s.extra && state.completed[activityKey(m.id,i)]) count++; })); return count; }
  function progressPct(){ return Math.round(progressCount()/totalActivities()*100); }
  function missionCompleted(m){ return m.stages.every((s,i)=>s.extra || state.completed[activityKey(m.id,i)]); }
  function toast(msg){
    document.querySelector('.toast')?.remove();
    const t=document.createElement('div'); t.className='toast'; t.textContent=msg; document.body.appendChild(t); setTimeout(()=>t.remove(),2400);
  }
  function shuffle(arr){
    const out=[...arr]; for(let i=out.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [out[i],out[j]]=[out[j],out[i]]; } return out;
  }

  function render(){
    app.innerHTML = `<div class="app-shell">${renderTopbar()}<main>${state.view==='home'?renderHome():state.view==='wordlab'?renderWordLab():renderMission()}</main>${renderTeacherDrawer()}</div>`;
    bindGlobal();
    if(state.view==='mission') bindActivity();
    if(state.view==='wordlab') bindWordLab();
  }

  function renderTopbar(){
    const current = state.view==='mission' ? mission() : null;
    return `<header class="topbar">
      <button class="brand" data-go-home aria-label="Course home">
        <span class="brand-mark">PPM</span><span class="brand-copy"><strong>PEOPLE, PLACES & ME</strong><span>Spotlight 6 · Module 1 companion</span></span>
      </button>
      <div class="progress-wrap" aria-label="Course progress">
        <span class="progress-label">${current ? `MISSION ${current.no} / 08` : `${progressCount()} / ${totalActivities()} ACTIVITIES`}</span>
        <div class="progress-track"><div class="progress-fill" style="width:${progressPct()}%"></div></div>
        <span class="progress-label">${progressPct()}%</span>
      </div>
      <nav class="top-actions" aria-label="Course tools">
        <button class="icon-btn" data-wordlab>WORD LAB</button>
        <button class="icon-btn" data-teacher>TEACHER</button>
        <button class="icon-btn danger-btn" data-new>NEW STUDENT</button>
      </nav>
    </header>`;
  }

  function renderHome(){
    const cont = progressCount() > 0;
    return `<div class="page">
      <section class="hero">
        <div class="hero-copy">
          <div class="eyebrow">Interactive English course · A1+ → A2</div>
          <h1 class="display display-xl"><span class="blue-line">PEOPLE</span><br>PLACES <span class="accent-line">&</span><br>ME</h1>
          <p class="lede tagline">Meet people. Crack the clues. Build your world. A mission-based companion to Module 1 for one student + one tutor.</p>
          <div class="hero-stickers"><span class="sticker">FAMILY</span><span class="sticker">IDENTITY</span><span class="sticker">WORLD</span></div>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <button class="solid-btn" data-start>${cont?'CONTINUE COURSE →':'START MISSION 01 →'}</button>
            <button class="accent-btn" data-wordlab>OPEN WORD LAB</button>
          </div>
        </div>
        <div class="hero-art" aria-label="Keks the course mascot reading">
          <div class="speech">“New file. Same English. Better reasons to use it.”</div>
          <img src="./assets/keks/keks-reading.webp" alt="Keks, a silver-grey tabby cat, reading a book" />
        </div>
      </section>
      <section>
        <div class="section-head"><div><div class="eyebrow">Course map</div><h2 class="display display-md">8 MISSIONS. ONE WORLD FILE.</h2></div><p>Core practice, retrieval games and tutor interaction are mixed deliberately. Open a mission in any order, or follow the route.</p></div>
        <div class="rule"></div>
        <div class="map-grid">${DATA.missions.map((m,i)=>`
          <button class="mission-card ${m.id==='final'?'final':''}" data-open-mission="${m.id}">
            <span class="mission-no">${m.no}</span><div class="eyebrow">${i===7?'Final mission':'Mission'}</div>
            <h3>${escapeHTML(m.title)}</h3><p>${escapeHTML(m.focus)}</p><span class="mission-meta">${m.stages.filter(s=>!s.extra).length} core${m.stages.some(s=>s.extra)?` + ${m.stages.filter(s=>s.extra).length} extra`:``} · ${escapeHTML(m.outcome)}</span>
            ${missionCompleted(m)?'<span class="mission-done">✓ FILE CLOSED</span>':''}
          </button>`).join('')}</div>
      </section>
      <p class="footer-note">Original learning contexts inspired by the Module 1 syllabus. Textbook pages are not reproduced.</p>
    </div>`;
  }

  function artName(m){ return `./assets/keks/keks-${m.art}.webp`; }
  function renderMission(){
    const m=mission(); const idx=Math.max(0,Math.min(state.stageIndex,m.stages.length-1)); state.stageIndex=idx; const st=m.stages[idx]; const key=activityKey(m.id,idx);
    const accentClass=m.color==='blue'?'blue':m.color==='pink'?'pink':'';
    return `<div class="page">
      <section class="mission-hero">
        <div class="mission-title"><span class="mission-index">${m.no}</span><div class="eyebrow">Mission ${m.no} · ${escapeHTML(m.focus)}</div><h1 class="display display-lg">${escapeHTML(m.title)}</h1><div class="outcome"><b>MISSION OUTCOME</b><br>${escapeHTML(m.outcome)}</div></div>
        <div class="mission-art ${accentClass}"><div class="speech">${escapeHTML(m.keks)}</div><img src="${artName(m)}" alt="Keks mascot" /></div>
      </section>
      ${m.reading?`<section class="side-card" style="margin-top:24px"><div class="eyebrow">Original reading file</div><h3 style="font-family:Oswald;text-transform:uppercase;font-size:28px;margin:8px 0">${escapeHTML(m.reading.title)}</h3><p style="font-size:15px;line-height:1.65;max-width:920px">${escapeHTML(m.reading.text)}</p></section>`:''}
      <div class="stage-bar" aria-label="Mission stages">${m.stages.map((s,i)=>`<button class="stage-pill ${i===idx?'active':''} ${state.completed[activityKey(m.id,i)]?'done':''}" data-stage="${i}">${String(i+1).padStart(2,'0')} ${escapeHTML(s.title)}</button>`).join('')}</div>
      <section class="activity-shell">
        <div>${renderActivity(m,st,idx,key)}${renderStageNav(m,idx)}</div>
        <aside class="sidebar-stack">
          <div class="side-card yellow"><h4>CORE ROUTE</h4><p>Do the current stage, then use <b>Next</b>. Need more retrieval? Open <b>Word Lab</b> at any time.</p></div>
          <div class="side-card"><img class="side-keks" src="./assets/keks/keks-skeptical.webp" alt="Keks looking thoughtful"><h4>TUTOR FOLLOW-UP</h4><p>${tutorPrompt(m.id,idx)}</p></div>
          <div class="side-card pink"><h4>KEKS CHALLENGE</h4><p>${challengePrompt(m.id,idx)}</p></div>
        </aside>
      </section>
    </div>`;
  }

  function tutorPrompt(id,idx){
    const prompts={
      family:["Tell your tutor about one person in a real or fictional family.","Name one word that can describe a man and one that can describe a woman.","Make a new relationship clue for your tutor.","Spell one family word aloud before you type it.","Ask your tutor one Have you got …? question.","Explain one clue without looking at the answer.","Use two matched words in short sentences.","Ask your tutor one follow-up family question."],
      face:["Describe your tutor's fictional character, not a real person's body.","Give two hair clues.","Make one sentence with is and one with has got.","Spell wavy or straight aloud.","Why do we say She is tall but She has got long hair?","Fix one sentence aloud before typing.","Say both opposites aloud.","Add one question: Has your character got …?"],
      whose:["Point to one object: Whose is it?","Say one pair aloud: my → mine.","Explain why mine cannot go before bag.","Make a new phrase with a classmate's fictional name.","Ask Whose …? about one screen object.","Read the dialogue with different voices.","Explain the its note in Russian if useful.","Swap roles after two questions."],
      identity:["Which details should stay fictional online?","Spell your fictional surname aloud.","Ask one question about the card.","Role-play both parts.","Make one casual and one polite greeting.","Use one identity word in a sentence.","Read your fictional card aloud.","Tutor: ask one unexpected follow-up."],
      passport:["Say one country-nationality pair from memory.","Tutor says country; you say nationality.","Spell Polish and Spanish aloud.","Ask Where are you from? then What nationality are you?","Do you notice any endings? Don't make a rule yet.","Explain the error before choosing.","Add one guest from a country you know.","Ask your tutor about one fictional guest."],
      world:["Point to north without looking at the compass words.","Give the opposite immediately.","Spell south-west aloud.","Create one new map clue.","Say one sentence with in the … of.","Read the clues from broad to specific.","Use two directions in one mini-map sentence.","Tutor draws; you direct."],
      country:["Predict two facts before reading again.","Explain one word without translating it.","Find evidence in the reading.","Name all four UK parts from memory.","Tutor says capital; you say the country.","Read 71% and 12,756 aloud.","Add one accurate fact you already know.","Tutor asks one follow-up without the screen."],
      final:["Do this round without Word Lab.","Describe one fictional face in 10 seconds.","Make one new my/mine pair.","Role-play a receptionist question.","Say 3 country-nationality pairs fast.","Point north-west, then south-east.","Make the character surprising but believable.","First attempt: no model. Second attempt: improve one thing."]
    };
    return prompts[id]?.[idx] || "Explain one answer to your tutor.";
  }
  function challengePrompt(id,idx){
    const generic=["Close the screen for 10 seconds and recall three target words.","Create one extra example that is true for a fictional person.","Find one mistake you might make and correct it.","Use the target language in a question."];
    return generic[(idx + id.length)%generic.length];
  }

  function renderStageNav(m,idx){
    const last=idx===m.stages.length-1;
    return `<div class="stage-nav"><button class="ghost-btn" data-prev ${idx===0?'disabled':''}>← PREVIOUS</button><button class="solid-btn" data-next>${last?(m.id==='final'?'COURSE MAP →':'NEXT MISSION →'):'NEXT STAGE →'}</button></div>`;
  }

  function activityHeader(st,idx){ return `<div class="activity-kicker">Stage ${String(idx+1).padStart(2,'0')}</div><h2>${escapeHTML(st.title)}</h2><p class="activity-intro">${escapeHTML(st.intro)}</p>`; }
  function renderActivity(m,st,idx,key){
    let body='';
    if(st.type==='choice') body=renderChoice(st,key);
    else if(st.type==='match') body=renderMatch(st,key);
    else if(st.type==='input') body=renderInput(st,key);
    else if(st.type==='sort') body=renderSort(st,key);
    else if(st.type==='memory') body=renderMemory(st,key);
    else if(st.type==='reorder') body=renderReorder(st,key);
    else if(st.type==='clues') body=renderClues(st,key);
    else if(st.type==='speaking') body=renderSpeaking(st,key);
    else if(st.type==='profile') body=renderProfile(st,key);
    return `<article class="activity-card" data-activity-key="${key}">${activityHeader(st,idx)}${body}</article>`;
  }

  function feedbackFor(key,i,correct,answer,hint){
    const result=state.checked[key]?.[i]; if(!result) return '';
    if(result==='correct') return `<div class="item-feedback good">✓ ${i%2?'Exactly.':'Good catch.'}</div>`;
    const attempts=state.attempts[key]||0;
    const msg=attempts>=3?`Answer: ${escapeHTML(answer)}`:(hint?escapeHTML(hint):'Almost. Check the meaning and form, then try again.');
    return `<div class="item-feedback bad">${attempts>=3?'→':'↺'} ${msg}</div>`;
  }
  function renderChoice(st,key){
    const ans=state.answers[key]||{}; const check=state.checked[key]||{};
    return `<div class="items">${st.items.map((it,i)=>{
      const [prompt,opts,correct,hint]=it; const val=ans[i]; const cls=check[i]==='correct'?'correct':check[i]==='wrong'?'wrong':'';
      return `<div class="item ${cls}"><div class="item-prompt">${escapeHTML(prompt)}</div><div class="options">${opts.map(o=>`<button class="option ${val===o?'selected':''}" data-choice-index="${i}" data-choice-value="${escapeHTML(o)}">${escapeHTML(o)}</button>`).join('')}</div>${feedbackFor(key,i,correct,hint)}</div>`;
    }).join('')}</div>${closedActions(key,st.items.length)}`;
  }
  function renderMatch(st,key){
    const ans=state.answers[key]||{}; const check=state.checked[key]||{};
    return `<div class="match-grid">${st.items.map((it,i)=>{
      const [prompt,opts,correct,hint]=it; const cls=check[i]==='correct'?'correct':check[i]==='wrong'?'wrong':'';
      return `<div class="match-card item ${cls}"><b>${escapeHTML(prompt)}</b><select data-select-index="${i}" aria-label="Answer for ${escapeHTML(prompt)}"><option value="">Choose…</option>${opts.map(o=>`<option ${ans[i]===o?'selected':''}>${escapeHTML(o)}</option>`).join('')}</select>${feedbackFor(key,i,correct,hint)}</div>`;
    }).join('')}</div>${closedActions(key,st.items.length)}`;
  }
  function renderInput(st,key){
    const ans=state.answers[key]||{}; const check=state.checked[key]||{};
    return `<div class="items">${st.items.map((it,i)=>{
      const [prompt,correct,hint]=it; const cls=check[i]==='correct'?'correct':check[i]==='wrong'?'wrong':'';
      return `<label class="item ${cls}"><div class="item-prompt">${escapeHTML(prompt)}</div><input class="input-line" data-input-index="${i}" value="${escapeHTML(ans[i]||'')}" autocomplete="off" />${feedbackFor(key,i,correct,hint)}</label>`;
    }).join('')}</div>${closedActions(key,st.items.length)}`;
  }
  function closedActions(key,count){
    const completed=!!state.completed[key];
    return `<div class="activity-actions"><button class="solid-btn" data-check>CHECK</button><button class="ghost-btn" data-reset-activity>RESET</button><span class="score-note">${completed?'✓ ATTEMPT SAVED':`${count} items`}</span></div>`;
  }

  function renderSort(st,key){
    const pos=state.answers[key]||{}; const check=state.checked[key]||{};
    const unassigned=st.cards.filter(([word])=>!pos[word]);
    const chip=(word)=>`<button class="chip drag-chip" draggable="true" data-sort-card="${escapeHTML(word)}" title="Drag, or click to move">${escapeHTML(word)}</button>`;
    return `<div class="chip-cloud" data-sort-bank>${unassigned.map(([w])=>chip(w)).join('') || '<span class="muted">All cards placed.</span>'}</div>
      <div class="sort-zones">${st.categories.map(cat=>`<div class="sort-zone" data-sort-zone="${escapeHTML(cat)}"><h4>${escapeHTML(cat)}</h4>${st.cards.filter(([w])=>pos[w]===cat).map(([w,correct])=>`<span class="item ${check[w]==='correct'?'correct':check[w]==='wrong'?'wrong':''}" style="display:inline-block;padding:0;border:0;background:transparent">${chip(w)}</span>`).join('')}</div>`).join('')}</div>
      <div class="activity-actions"><button class="solid-btn" data-check-sort>CHECK</button><button class="ghost-btn" data-reset-activity>RESET</button><span class="score-note">${state.completed[key]?'✓ ATTEMPT SAVED':'Drag or click cards'}</span></div>`;
  }

  function getMemoryDeck(st,key){
    if(!state.memory[key]?.deck){
      const deck=[]; st.pairs.forEach(([a,b],pi)=>{deck.push({id:`${pi}a`,pair:pi,text:a},{id:`${pi}b`,pair:pi,text:b});});
      state.memory[key]={deck:shuffle(deck),open:[],matched:[]}; save();
    }
    return state.memory[key];
  }
  function renderMemory(st,key){
    const mem=getMemoryDeck(st,key);
    return `<div class="memory-grid">${mem.deck.map(card=>{
      const revealed=mem.open.includes(card.id)||mem.matched.includes(card.pair); const matched=mem.matched.includes(card.pair);
      return `<button class="memory-card ${revealed?'revealed':''} ${matched?'matched':''}" data-memory-card="${card.id}" ${matched?'disabled':''}>${revealed?escapeHTML(card.text):'?'}</button>`;
    }).join('')}</div><div class="activity-actions"><button class="ghost-btn" data-reset-activity>RESHUFFLE</button><span class="score-note">${mem.matched.length} / ${st.pairs.length} pairs${state.completed[key]?' · ✓ COMPLETE':''}</span></div>`;
  }
  function renderReorder(st,key){
    if(!state.answers[key]?.order) state.answers[key]={order:shuffle(st.lines)};
    const order=state.answers[key].order; const status=state.checked[key]?.order;
    return `<div class="reorder-list ${status==='correct'?'correct':''}">${order.map((line,i)=>`<div class="reorder-item"><span>${i+1}. ${escapeHTML(line)}</span><div class="reorder-controls"><button data-move-up="${i}" aria-label="Move line up">↑</button><button data-move-down="${i}" aria-label="Move line down">↓</button></div></div>`).join('')}</div>${status==='wrong'?`<div class="item-feedback bad">↺ The order is not natural yet. Look at question → answer links.</div>`:''}${status==='correct'?`<div class="item-feedback good">✓ Natural sequence.</div>`:''}<div class="activity-actions"><button class="solid-btn" data-check-reorder>CHECK</button><button class="ghost-btn" data-reset-activity>SHUFFLE AGAIN</button></div>`;
  }
  function renderClues(st,key){
    const open=state.answers[key]?.open||[];
    return `<div class="clue-grid">${st.items.map((it,i)=>`<div class="clue-card"><div class="eyebrow">Clue ${i+1}</div><p>${escapeHTML(it[0])}</p>${open.includes(i)?`<div class="clue-answer">→ ${escapeHTML(it[1])}</div>`:`<button class="ghost-btn small-btn reveal" data-reveal="${i}">REVEAL ANSWER</button>`}</div>`).join('')}</div><div class="activity-actions"><button class="solid-btn done-btn" data-mark-done data-done="${!!state.completed[key]}">${state.completed[key]?'✓ DONE':'MARK STAGE DONE'}</button><button class="ghost-btn" data-reset-activity>RESET</button></div>`;
  }
  function renderSpeaking(st,key){
    const checks=state.answers[key]?.checks||{};
    return `<div class="side-card" style="box-shadow:none;margin-bottom:16px;background:#f8f7ff"><div class="eyebrow">Useful prompts</div><div class="chip-cloud" style="margin-top:12px">${st.prompts.map(p=>`<span class="chip">${escapeHTML(p)}</span>`).join('')}</div></div><div class="items">${st.check.map((c,i)=>`<label class="item item-row"><span>${escapeHTML(c)}</span><input type="checkbox" data-speak-check="${i}" ${checks[i]?'checked':''} /></label>`).join('')}</div><div class="activity-actions"><button class="solid-btn done-btn" data-mark-done data-done="${!!state.completed[key]}">${state.completed[key]?'✓ DONE':'DONE'}</button><button class="ghost-btn" data-reset-activity>RESET</button><span class="score-note">Tutor/self check · no fake auto-marking</span></div>`;
  }
  function renderProfile(st,key){
    const profile=state.profiles[key]||{};
    return `<div class="profile-form">${st.fields.map(([id,label,ph])=>`<label class="item"><div class="item-prompt">${escapeHTML(label)}</div><input class="input-line" data-profile-field="${id}" placeholder="${escapeHTML(ph)}" value="${escapeHTML(profile[id]||'')}" /></label>`).join('')}</div>
      <div class="profile-preview"><div class="eyebrow">Live file preview</div><h3>${escapeHTML(profile.name||profile.country||'Your file')}</h3><div class="profile-facts">${st.fields.slice(1).map(([id,label])=>`<div><b>${escapeHTML(label)}</b><br>${escapeHTML(profile[id]||'—')}</div>`).join('')}</div></div>
      <div class="activity-actions"><button class="solid-btn done-btn" data-mark-done data-done="${!!state.completed[key]}">${state.completed[key]?'✓ FILE SAVED':'SAVE FILE / DONE'}</button><button class="ghost-btn" data-reset-activity>RESET</button></div>`;
  }

  function renderWordLab(){
    const groupKey=state.wordLab?.group||'family', mode=state.wordLab?.mode||'see', group=DATA.wordGroups[groupKey];
    return `<div class="page"><section class="mission-title" style="margin-top:10px"><span class="mission-index">WL</span><div class="eyebrow">Persistent retrieval space</div><h1 class="display display-lg">WORD LAB</h1><div class="outcome"><b>SEE → SORT → MATCH → RECALL → SPELL → USE</b><br>Vocabulary should come back more than once.</div></section>
      <div class="stage-bar">${Object.entries(DATA.wordGroups).map(([k,g])=>`<button class="stage-pill ${k===groupKey?'active':''}" data-word-group="${k}">${escapeHTML(g.title)}</button>`).join('')}</div>
      <div class="wordlab-tabs">${['see','sort','match','recall','spell','use'].map(x=>`<button class="wordtab ${mode===x?'active':''}" data-word-mode="${x}">${x.toUpperCase()}</button>`).join('')}</div>
      <section class="activity-shell"><div><article class="activity-card"><div class="activity-kicker">${escapeHTML(group.title)}</div><h2>${mode.toUpperCase()}</h2>${renderWordMode(groupKey,group,mode)}</article></div>
      <aside class="sidebar-stack"><div class="side-card yellow"><img class="side-keks" src="./assets/keks/keks-headphones.webp" alt="Keks wearing headphones"><h4>RETRIEVAL RULE</h4><p>Look only when you need to. A little struggle before the answer is useful.</p></div><div class="side-card"><h4>TUTOR MODE</h4><p>Hide the English side and ask for meaning, spelling, or a sentence. Switch direction after one round.</p></div></aside></section>
    </div>`;
  }
  function wordKey(group,mode){return `wordlab:${group}:${mode}`;}
  function sampleWords(group,n=8){ return group.words.slice(0,n); }
  function renderWordMode(groupKey,group,mode){
    const key=wordKey(groupKey,mode);
    if(mode==='see') return `<p class="activity-intro">Scan the set. Tap another mode when the words feel familiar.</p><div class="word-bank">${group.words.map(([en,ru])=>`<div class="word-tile"><b>${escapeHTML(en)}</b><span>${escapeHTML(ru)}</span></div>`).join('')}</div>`;
    if(mode==='match'){
      const words=sampleWords(group,8), opts=shuffle(words.map(x=>x[1]));
      const st={items:words.map(([en,ru])=>[en,opts,ru])}; return `<p class="activity-intro">Match English to Russian meaning.</p>${renderMatch(st,key)}`;
    }
    if(mode==='recall'){
      const words=sampleWords(group,8); const st={items:words.map(([en,ru])=>[ru,en,"Say the English word first, then type it."])}; return `<p class="activity-intro">Russian cue → English recall.</p>${renderInput(st,key)}`;
    }
    if(mode==='spell'){
      const words=sampleWords(group,8); const st={items:words.map(([en])=>[scrambleWord(en),en,"Look at the letter pattern again."])}; return `<p class="activity-intro">Unscramble and type the correct word.</p>${renderInput(st,key)}`;
    }
    if(mode==='sort') return renderWordSort(groupKey,group,key);
    const words=sampleWords(group,4); const saved=state.answers[key]||{};
    return `<p class="activity-intro">Use each word in a short original sentence. Tutor checks meaning and form.</p><div class="items">${words.map(([en],i)=>`<label class="item"><div class="item-prompt">${escapeHTML(en)}</div><textarea class="text-area" data-word-use="${i}" placeholder="Write one sentence…">${escapeHTML(saved[i]||'')}</textarea></label>`).join('')}</div><div class="activity-actions"><button class="solid-btn done-btn" data-word-done data-key="${key}" data-done="${!!state.completed[key]}">${state.completed[key]?'✓ DONE':'DONE'}</button><button class="ghost-btn" data-word-reset data-key="${key}">RESET</button></div>`;
  }
  function scrambleWord(word){
    return word.split(' ').map(part=>part.length>3?shuffle(part.replace(/-/g,'').split('')).join(''):part).join(' ');
  }
  function sortSchema(groupKey){
    const schemas={
      family:{cats:['people','appearance','age / data'], map:(w)=>['aunt','brother','child','children','cousin','daughter','dad','husband','mum','parents','sister','son','twins','uncle','wife'].includes(w)?'people':['curly','fair','fat','grey','long','middle-aged','old','short','slim','straight','wavy','young','big'].includes(w)?'appearance':'age / data'},
      identity:{cats:['personal info','objects / documents','actions'],map:(w)=>['address','nationality','postcode','surname','date of birth','expiry date','full name','home address','identification number','telephone number'].includes(w)?'personal info':['join a club','register'].includes(w)?'actions':'objects / documents'},
      countries:{cats:['country','nationality'],map:(w)=>['Brazil','Britain','Chile','Germany','Japan','Poland','Russia','Spain'].includes(w)?'country':'nationality'},
      location:{cats:['direction','land / place','factfile'],map:(w)=>['east','north','north-east','north-west','south','south-east','south-west','west'].includes(w)?'direction':['desert','mountains','valley','location'].includes(w)?'land / place':'factfile'},
      uk:{cats:['UK place / culture','Earth data','communication'],map:(w)=>['diameter','distance','Earth','per cent','total','conditions suitable for life','solar system','surface area'].includes(w)?'Earth data':['greet','introduce somebody to somebody'].includes(w)?'communication':'UK place / culture'}
    }; return schemas[groupKey];
  }
  function renderWordSort(groupKey,group,key){
    const schema=sortSchema(groupKey); const cards=group.words.slice(0,Math.min(group.words.length,16)).map(([w])=>[w,schema.map(w)]); const st={categories:schema.cats,cards}; return `<p class="activity-intro">Sort by function or meaning.</p>${renderSort(st,key)}`;
  }

  function renderTeacherDrawer(){
    const m=state.view==='mission'?mission():null;
    return `<div class="teacher-drawer ${teacherOpen?'open':''}" aria-hidden="${teacherOpen?'false':'true'}"><div class="drawer-backdrop" data-close-teacher></div><aside class="drawer-panel" role="dialog" aria-modal="true" aria-label="Teacher notes"><button class="ghost-btn small-btn close-drawer" data-close-teacher>✕</button><div class="eyebrow">Teacher mode</div><h2>${m?escapeHTML(m.title):'Course Notes'}</h2>
      <div class="teacher-block"><h4>Method</h4><p>Context → notice → understand → practise → retrieve → personalise → communicate. Closed tasks self-check; speaking/writing use tutor check.</p></div>
      ${m?`<div class="teacher-block"><h4>Suggested timing</h4><p>${escapeHTML(m.teacher.time)}</p></div><div class="teacher-block"><h4>Target language</h4><p>${escapeHTML(m.teacher.target)}</p></div><div class="teacher-block"><h4>Anticipated problems</h4><p>${escapeHTML(m.teacher.problems)}</p></div><div class="teacher-block"><h4>Extension</h4><p>${escapeHTML(m.teacher.extension)}</p></div>`:`<div class="teacher-block"><h4>Course route</h4><p>Seven core missions + one mixed final mission. Word Lab is available throughout for optional retrieval.</p></div>`}
      <div class="teacher-block"><h4>Correction</h4><p>Do not interrupt the first speaking attempt. Note one successful feature and one target improvement, then repeat if useful.</p></div>
    </aside></div>`;
  }

  function bindGlobal(){
    document.querySelectorAll('[data-go-home]').forEach(b=>b.onclick=()=>{state.view='home';save();render();window.scrollTo(0,0)});
    document.querySelectorAll('[data-wordlab]').forEach(b=>b.onclick=()=>{state.view='wordlab';save();render();window.scrollTo(0,0)});
    document.querySelectorAll('[data-teacher]').forEach(b=>b.onclick=()=>{teacherOpen=true;render();});
    document.querySelectorAll('[data-close-teacher]').forEach(b=>b.onclick=()=>{teacherOpen=false;render();});
    document.querySelectorAll('[data-new]').forEach(b=>b.onclick=()=>{if(confirm('Start a new student? This clears all answers and progress on this device.')){localStorage.removeItem(STORAGE_KEY);state=freshState();teacherOpen=false;render();window.scrollTo(0,0);toast('New student file ready.');}});
    document.querySelector('[data-start]')?.addEventListener('click',()=>{state.view='mission'; if(progressCount()===0){state.currentMission='family';state.stageIndex=0;} save();render();window.scrollTo(0,0)});
    document.querySelectorAll('[data-open-mission]').forEach(b=>b.onclick=()=>{state.view='mission';state.currentMission=b.dataset.openMission;state.stageIndex=0;save();render();window.scrollTo(0,0)});
  }

  function currentContext(){ const m=mission(), idx=state.stageIndex, st=m.stages[idx], key=activityKey(m.id,idx); return {m,idx,st,key}; }
  function bindActivity(){
    const {m,idx,st,key}=currentContext();
    document.querySelectorAll('[data-stage]').forEach(b=>b.onclick=()=>{state.stageIndex=+b.dataset.stage;save();render();window.scrollTo({top:360,behavior:'smooth'})});
    document.querySelector('[data-prev]')?.addEventListener('click',()=>{if(idx>0){state.stageIndex=idx-1;save();render();window.scrollTo({top:360,behavior:'smooth'})}});
    document.querySelector('[data-next]')?.addEventListener('click',()=>{
      if(idx<m.stages.length-1){state.stageIndex=idx+1;}
      else if(m.id==='final'){state.view='home';}
      else {const mi=DATA.missions.findIndex(x=>x.id===m.id); state.currentMission=DATA.missions[Math.min(mi+1,DATA.missions.length-1)].id; state.stageIndex=0;}
      save();render();window.scrollTo(0,0);
    });
    document.querySelectorAll('[data-choice-index]').forEach(b=>b.onclick=()=>{state.answers[key]=state.answers[key]||{};state.answers[key][b.dataset.choiceIndex]=b.dataset.choiceValue;delete state.checked[key];save();render();});
    document.querySelectorAll('[data-select-index]').forEach(s=>s.onchange=()=>{state.answers[key]=state.answers[key]||{};state.answers[key][s.dataset.selectIndex]=s.value;delete state.checked[key];save();});
    document.querySelectorAll('[data-input-index]').forEach(inp=>inp.oninput=()=>{state.answers[key]=state.answers[key]||{};state.answers[key][inp.dataset.inputIndex]=inp.value;delete state.checked[key];save();});
    document.querySelector('[data-check]')?.addEventListener('click',()=>checkClosed(st,key));
    document.querySelector('[data-reset-activity]')?.addEventListener('click',()=>resetActivity(key));
    bindSort(st,key);
    bindMemory(st,key);
    bindReorder(st,key);
    document.querySelectorAll('[data-reveal]').forEach(b=>b.onclick=()=>{state.answers[key]=state.answers[key]||{open:[]};state.answers[key].open=state.answers[key].open||[];if(!state.answers[key].open.includes(+b.dataset.reveal))state.answers[key].open.push(+b.dataset.reveal);save();render();});
    document.querySelectorAll('[data-speak-check]').forEach(c=>c.onchange=()=>{state.answers[key]=state.answers[key]||{checks:{}};state.answers[key].checks=state.answers[key].checks||{};state.answers[key].checks[c.dataset.speakCheck]=c.checked;save();});
    document.querySelectorAll('[data-profile-field]').forEach(inp=>inp.oninput=()=>{state.profiles[key]=state.profiles[key]||{};state.profiles[key][inp.dataset.profileField]=inp.value;save();updateProfilePreviewLive(st,key);});
    document.querySelector('[data-mark-done]')?.addEventListener('click',()=>{state.completed[key]=true;save();toast('Stage saved.');render();});
  }
  function checkClosed(st,key){
    const answers=state.answers[key]||{}; const items=st.items||[];
    const allAnswered=items.every((_,i)=>String(answers[i]??'').trim()!=='');
    if(!allAnswered){toast('Finish every item before checking.');return;}
    state.attempts[key]=(state.attempts[key]||0)+1; state.checked[key]={}; let score=0;
    items.forEach((it,i)=>{const correct=it[2]??it[1]; const ok=norm(answers[i])===norm(correct); state.checked[key][i]=ok?'correct':'wrong'; if(ok)score++;});
    state.completed[key]=true; save(); render(); toast(score===items.length?`Perfect: ${score}/${items.length}`:`Checked: ${score}/${items.length}. Fix the marked items and try again.`);
  }
  function resetActivity(key){
    delete state.answers[key];delete state.checked[key];delete state.attempts[key];delete state.completed[key];delete state.profiles[key];delete state.memory[key];save();render();toast('Activity reset.');
  }
  function bindSort(st,key){
    if(st.type!=='sort') return;
    document.querySelectorAll('[data-sort-card]').forEach(chip=>{
      chip.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',chip.dataset.sortCard);chip.classList.add('dragging')});
      chip.addEventListener('dragend',()=>chip.classList.remove('dragging'));
      chip.addEventListener('click',()=>{
        const word=chip.dataset.sortCard; state.answers[key]=state.answers[key]||{}; const cats=st.categories; const cur=state.answers[key][word]; const next=cur?cats[(cats.indexOf(cur)+1)%cats.length]:cats[0]; state.answers[key][word]=next; delete state.checked[key];save();render();
      });
    });
    document.querySelectorAll('[data-sort-zone]').forEach(zone=>{
      zone.addEventListener('dragover',e=>e.preventDefault());
      zone.addEventListener('drop',e=>{e.preventDefault();const word=e.dataTransfer.getData('text/plain');state.answers[key]=state.answers[key]||{};state.answers[key][word]=zone.dataset.sortZone;delete state.checked[key];save();render();});
    });
    document.querySelector('[data-check-sort]')?.addEventListener('click',()=>{
      const pos=state.answers[key]||{}; if(st.cards.some(([w])=>!pos[w])){toast('Place every card before checking.');return;}
      state.attempts[key]=(state.attempts[key]||0)+1;state.checked[key]={};let score=0;st.cards.forEach(([w,c])=>{const ok=pos[w]===c;state.checked[key][w]=ok?'correct':'wrong';if(ok)score++;});state.completed[key]=true;save();render();toast(`Checked: ${score}/${st.cards.length}.`);
    });
  }
  function bindMemory(st,key){
    if(st.type!=='memory') return;
    document.querySelectorAll('[data-memory-card]').forEach(btn=>btn.onclick=()=>{
      const mem=getMemoryDeck(st,key); const id=btn.dataset.memoryCard; if(mem.open.includes(id)||mem.open.length>=2)return; mem.open.push(id);
      if(mem.open.length===2){ const a=mem.deck.find(x=>x.id===mem.open[0]), b=mem.deck.find(x=>x.id===mem.open[1]); if(a.pair===b.pair){mem.matched.push(a.pair);mem.open=[];if(mem.matched.length===st.pairs.length)state.completed[key]=true;save();render();} else {save();render();setTimeout(()=>{const latest=state.memory[key];if(latest){latest.open=[];save();render();}},650);} } else {save();render();}
    });
  }
  function bindReorder(st,key){
    if(st.type!=='reorder')return;
    document.querySelectorAll('[data-move-up]').forEach(b=>b.onclick=()=>moveLine(key,+b.dataset.moveUp,-1));
    document.querySelectorAll('[data-move-down]').forEach(b=>b.onclick=()=>moveLine(key,+b.dataset.moveDown,1));
    document.querySelector('[data-check-reorder]')?.addEventListener('click',()=>{const order=state.answers[key]?.order||[];const ok=order.every((x,i)=>x===st.answer[i]);state.checked[key]={order:ok?'correct':'wrong'};state.completed[key]=true;save();render();toast(ok?'Dialogue order works.':'Not yet. Follow the conversational links.');});
  }
  function moveLine(key,i,delta){const arr=state.answers[key].order;const j=i+delta;if(j<0||j>=arr.length)return;[arr[i],arr[j]]=[arr[j],arr[i]];delete state.checked[key];save();render();}
  function updateProfilePreviewLive(st,key){
    const preview=document.querySelector('.profile-preview'); if(!preview)return; const p=state.profiles[key]||{};
    preview.querySelector('h3').textContent=p.name||p.country||'Your file'; const facts=preview.querySelectorAll('.profile-facts div');st.fields.slice(1).forEach(([id,label],i)=>{if(facts[i])facts[i].innerHTML=`<b>${escapeHTML(label)}</b><br>${escapeHTML(p[id]||'—')}`;});
  }

  function bindWordLab(){
    document.querySelectorAll('[data-word-group]').forEach(b=>b.onclick=()=>{state.wordLab.group=b.dataset.wordGroup;state.wordLab.mode='see';save();render();});
    document.querySelectorAll('[data-word-mode]').forEach(b=>b.onclick=()=>{state.wordLab.mode=b.dataset.wordMode;save();render();});
    const groupKey=state.wordLab.group, mode=state.wordLab.mode, group=DATA.wordGroups[groupKey], key=wordKey(groupKey,mode);
    document.querySelectorAll('[data-select-index]').forEach(s=>s.onchange=()=>{state.answers[key]=state.answers[key]||{};state.answers[key][s.dataset.selectIndex]=s.value;delete state.checked[key];save();});
    document.querySelectorAll('[data-input-index]').forEach(inp=>inp.oninput=()=>{state.answers[key]=state.answers[key]||{};state.answers[key][inp.dataset.inputIndex]=inp.value;delete state.checked[key];save();});
    document.querySelector('[data-check]')?.addEventListener('click',()=>{
      if(mode==='match'){const words=sampleWords(group,8), opts=words.map(x=>x[1]);checkClosed({items:words.map(([en,ru])=>[en,opts,ru])},key);} 
      else if(mode==='recall'){const words=sampleWords(group,8);checkClosed({items:words.map(([en,ru])=>[ru,en])},key);} 
      else if(mode==='spell'){const words=sampleWords(group,8);checkClosed({items:words.map(([en])=>['',en])},key);} 
    });
    if(mode==='sort') bindSort({type:'sort',categories:sortSchema(groupKey).cats,cards:group.words.slice(0,Math.min(group.words.length,16)).map(([w])=>[w,sortSchema(groupKey).map(w)])},key);
    document.querySelectorAll('[data-sort-card]').forEach(()=>{});
    document.querySelectorAll('[data-word-use]').forEach(t=>t.oninput=()=>{state.answers[key]=state.answers[key]||{};state.answers[key][t.dataset.wordUse]=t.value;save();});
    document.querySelector('[data-word-done]')?.addEventListener('click',()=>{state.completed[key]=true;save();render();toast('Word Lab round saved.');});
    document.querySelectorAll('[data-reset-activity],[data-word-reset]').forEach(b=>b.onclick=()=>resetActivity(key));
  }

  render();
})();
