(() => {
  const DATA = window.COURSE_DATA;
  const MAIN_KEY = 'ppm_spotlight6_module1_v2';
  const SKILL_KEY = 'ppm_spotlight6_skills_v2';
  if (!DATA) return;

  const esc = (v='') => String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const readMain = () => { try { return JSON.parse(localStorage.getItem(MAIN_KEY) || '{}'); } catch { return {}; } };
  const readSkill = () => { try { return JSON.parse(localStorage.getItem(SKILL_KEY) || '{}'); } catch { return {}; } };
  const writeSkill = v => localStorage.setItem(SKILL_KEY, JSON.stringify(v));
  const current = () => {
    const st = readMain();
    if (st.view !== 'mission') return null;
    const m = DATA.missions.find(x => x.id === st.currentMission) || DATA.missions[0];
    const idx = Math.max(0, Math.min(Number(st.stageIndex || 0), m.stages.length - 1));
    return {state:st, mission:m, stage:m.stages[idx], idx, key:`${m.id}:${idx}`};
  };

  function enrich(){
    const ctx = current();
    const card = document.querySelector('.activity-card');
    if (!ctx || !card || card.dataset.skillsEnhanced === ctx.key) {
      decorateStageBar(ctx);
      return;
    }
    card.dataset.skillsEnhanced = ctx.key;
    decorateStageBar(ctx);
    const {stage,key} = ctx;
    if(stage.extra){
      const coreNote=document.querySelector('.sidebar-stack .side-card.yellow p');
      if(coreNote) coreNote.innerHTML='This is <b>EXTRA PRACTICE</b>. Use it when this language needs another retrieval round, or skip with <b>Next</b>.';
    }
    const intro = card.querySelector('.activity-intro');
    if (!intro) return;

    const strip = document.createElement('div');
    strip.className='skill-strip';
    strip.innerHTML = `<span class="skill-badge core">${esc(stage.skill || 'LANGUAGE')}</span>${stage.optional || stage.extra ? '<span class="skill-badge extra">EXTRA PRACTICE</span>' : '<span class="skill-badge">CORE ROUTE</span>'}`;
    intro.after(strip);

    if (stage.readingText) insertReading(card, strip, stage);
    if (stage.listenScript) insertListening(card, strip, stage, key);
    if (stage.video) insertVideo(card, strip, stage);
    if (stage.writingTask) insertWriting(card, strip, stage, key);
  }

  function decorateStageBar(ctx){
    if (!ctx) return;
    document.querySelectorAll('.stage-pill').forEach((pill,i)=>{
      const s=ctx.mission.stages[i]; if(!s) return;
      pill.classList.toggle('extra-stage', !!(s.optional||s.extra));
      ['reading','listening','video','writing'].forEach(k=>pill.classList.toggle(`skill-${k}`, String(s.skill||'').toLowerCase()===k));
      if(s.skill) pill.setAttribute('title', `${s.skill}${s.optional||s.extra?' · Extra practice':' · Core route'}`);
    });
  }

  function insertReading(card, anchor, stage){
    const panel=document.createElement('section'); panel.className='receptive-panel';
    panel.innerHTML=`<div class="eyebrow">Read in two passes</div>${stage.preQuestion?`<div class="pre-question"><b>PREDICT</b><br>${esc(stage.preQuestion)}</div>`:''}<div class="reading-text">${esc(stage.readingText)}</div>`;
    anchor.after(panel);
  }

  function chooseVoice(){
    const voices = window.speechSynthesis?.getVoices?.() || [];
    return voices.find(v=>/^en-GB/i.test(v.lang)) || voices.find(v=>/^en-US/i.test(v.lang)) || voices.find(v=>/^en/i.test(v.lang)) || null;
  }

  function insertListening(card, anchor, stage, key){
    const panel=document.createElement('section'); panel.className='listen-panel';
    const attempts = readMain().attempts?.[key] || 0;
    panel.innerHTML=`<div class="eyebrow">Listen → gist → detail</div><p>${esc(stage.listenLead || 'Listen twice. First for the big idea, then for details.')}</p><div class="listen-controls"><button class="solid-btn small-btn" data-skill-play>▶ PLAY</button><button class="ghost-btn small-btn" data-skill-stop>■ STOP</button>${attempts>0?'<button class="ghost-btn small-btn" data-skill-transcript>TRANSCRIPT</button>':'<button class="ghost-btn small-btn" disabled title="Check your answers once before opening the transcript">TRANSCRIPT AFTER CHECK</button>'}</div><div class="listen-status" aria-live="polite">Use headphones if possible. A British/English system voice is chosen when available.</div><div data-transcript-slot></div>`;
    anchor.after(panel);
    panel.querySelector('[data-skill-play]')?.addEventListener('click',()=>{
      if(!('speechSynthesis' in window)){ panel.querySelector('.listen-status').textContent='Audio is not available in this browser. Ask your tutor to read the script from the Teacher Guide.'; return; }
      speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(stage.listenScript); u.lang='en-GB'; u.rate=.92; u.pitch=1; const v=chooseVoice(); if(v)u.voice=v; speechSynthesis.speak(u); panel.querySelector('.listen-status').textContent='Playing. Listen once without pausing.';
    });
    panel.querySelector('[data-skill-stop]')?.addEventListener('click',()=>{window.speechSynthesis?.cancel?.();panel.querySelector('.listen-status').textContent='Stopped. Replay when you are ready.';});
    panel.querySelector('[data-skill-transcript]')?.addEventListener('click',e=>{
      const slot=panel.querySelector('[data-transcript-slot]'); const open=!!slot.firstElementChild; slot.innerHTML=open?'':`<div class="transcript"><b>TRANSCRIPT</b><br>${esc(stage.listenScript)}</div>`; e.currentTarget.textContent=open?'TRANSCRIPT':'HIDE TRANSCRIPT';
    });
  }

  function insertVideo(card, anchor, stage){
    const v=stage.video; const start=Number(v.start||0), end=Number(v.end||0);
    const qs=[start?`start=${start}`:'',end?`end=${end}`:'','rel=0'].filter(Boolean).join('&');
    const panel=document.createElement('section'); panel.className='video-panel';
    const tasks=(stage.videoPrompts||[]).map((p,i)=>`<div class="item"><b>${i+1}.</b> ${esc(p)}</div>`).join('');
    panel.innerHTML=`<div class="eyebrow">Optional authentic video</div><p><b>${esc(v.title)}</b><br><span class="video-meta">${esc(v.channel||'YouTube')} ${start||end?'· selected short section':''}</span></p><div class="video-frame"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?${qs}" title="${esc(v.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>${tasks?`<div class="items" style="margin-bottom:12px">${tasks}</div>`:''}<div class="video-meta">If YouTube is blocked or unavailable, skip the video. The Core Route still works without it.</div><a class="video-link" href="${esc(v.url)}" target="_blank" rel="noopener noreferrer">OPEN ON YOUTUBE ↗</a>`;
    anchor.after(panel);
  }

  function insertWriting(card, anchor, stage, key){
    const store=readSkill(); const saved=store[key]?.writing || '';
    const panel=document.createElement('section'); panel.className='writing-panel';
    panel.innerHTML=`<div class="eyebrow">Draft → check → improve</div><p><b>YOUR TASK</b><br>${esc(stage.writingTask)}</p><textarea data-skill-writing aria-label="Writing answer" placeholder="Write here…">${esc(saved)}</textarea><div class="writing-count" data-word-count></div><div class="writing-tools"><button class="ghost-btn small-btn" data-frame>NEED A FRAME?</button><button class="ghost-btn small-btn" data-model>SHOW MODEL AFTER YOUR FIRST DRAFT</button></div><div data-writing-support></div>`;
    anchor.after(panel);
    const ta=panel.querySelector('[data-skill-writing]'); const counter=panel.querySelector('[data-word-count]');
    const count=()=>{const n=ta.value.trim()?ta.value.trim().split(/\s+/).length:0;counter.textContent=`${n} words · your draft saves on this device`;}; count();
    ta.addEventListener('input',()=>{const s=readSkill();s[key]=s[key]||{};s[key].writing=ta.value;writeSkill(s);count();});
    panel.querySelector('[data-frame]')?.addEventListener('click',()=>{panel.querySelector('[data-writing-support]').innerHTML=`<div class="writing-support"><b>FRAME</b><br>${esc(stage.writingFrame||'Plan → write → check.')}</div>`;});
    panel.querySelector('[data-model]')?.addEventListener('click',e=>{if(!ta.value.trim()){counter.textContent='Write your own first draft before opening the model.';ta.focus();return;} panel.querySelector('[data-writing-support]').innerHTML=`<div class="writing-support"><b>MODEL — compare, don’t copy</b><br>${esc(stage.writingModel||'')}</div>`;e.currentTarget.textContent='MODEL SHOWN';});
  }

  document.addEventListener('click',e=>{
    if(e.target.closest?.('[data-new]')){localStorage.removeItem(SKILL_KEY);window.speechSynthesis?.cancel?.();return;}
    if(e.target.closest?.('[data-reset-activity]')){
      const ctx=current(); if(!ctx) return;
      const store=readSkill(); delete store[ctx.key]; writeSkill(store); window.speechSynthesis?.cancel?.();
    }
  },true);
  window.addEventListener('beforeunload',()=>window.speechSynthesis?.cancel?.());
  const observer=new MutationObserver(()=>requestAnimationFrame(enrich));
  observer.observe(document.getElementById('app') || document.body,{childList:true,subtree:true});
  if(window.speechSynthesis) speechSynthesis.onvoiceschanged=()=>{};
  requestAnimationFrame(enrich);
})();
