(() => {
  'use strict';
  const G = window.PPMGARAGE = window.PPMGARAGE || {};
  G.KEY = 'ppm_spotlight6_sidequests_v1';
  G.MAIN_KEY = 'ppm_spotlight6_module1_v2';
  G.games = G.games || {};
  G.esc = (v='') => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  G.read = () => { try { return JSON.parse(localStorage.getItem(G.KEY) || '{}'); } catch { return {}; } };
  G.write = s => localStorage.setItem(G.KEY, JSON.stringify(s));
  G.patch = (k,v) => { const s=G.read(); s[k]=v; G.write(s); return s; };
  G.complete = id => { const s=G.read(); s.done=s.done||{}; s.done[id]=true; G.write(s); G.renderHub(); G.toast('Quest key earned.'); };
  G.doneCount = () => Object.values(G.read().done||{}).filter(Boolean).length;
  G.shuffle = a => { const x=[...a]; for(let i=x.length-1;i;i--){ const j=Math.floor(Math.random()*(i+1)); [x[i],x[j]]=[x[j],x[i]]; } return x; };
  G.toast = msg => {
    document.querySelector('.garage-toast')?.remove();
    const n=document.createElement('div'); n.className='garage-toast'; n.textContent=msg; document.body.appendChild(n);
    setTimeout(()=>n.remove(),2300);
  };
  G.speak = (text, status) => {
    if(!('speechSynthesis' in window)){ if(status) status.textContent='Audio is not available in this browser. Ask your tutor to read the script.'; return; }
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text); u.lang='en-GB'; u.rate=.92;
    const vs=speechSynthesis.getVoices(); u.voice=vs.find(v=>/^en-GB/i.test(v.lang))||vs.find(v=>/^en/i.test(v.lang))||null;
    speechSynthesis.speak(u); if(status) status.textContent='Playing. First listen for the big idea.';
  };
  G.register = game => { G.games[game.id]=game; };
  G.icons = {
    gear:'◈', map:'⌖', crew:'◎', radio:'◉', shift:'↯', build:'◇', boss:'★'
  };
  G.order=['gear','map','crew','radio','shift','build','boss'];
  G.missionQuest = {family:'crew',face:'crew',whose:'gear',identity:'radio',passport:'crew',world:'map',country:'map',final:'boss'};

  function carArt(){
    return '<svg class="garage-car" viewBox="0 0 420 190" role="img" aria-label="Graphic sports car silhouette"><path d="M35 121 L67 91 L130 78 L169 43 L276 44 L323 81 L373 95 L392 124 L384 144 L42 144 Z" fill="#FFD400" stroke="#111" stroke-width="8" stroke-linejoin="round"/><path d="M154 78 L181 54 L265 54 L297 81 Z" fill="#3D3BFF" stroke="#111" stroke-width="6"/><circle cx="112" cy="145" r="31" fill="#111"/><circle cx="112" cy="145" r="13" fill="#F7F4ED"/><circle cx="322" cy="145" r="31" fill="#111"/><circle cx="322" cy="145" r="13" fill="#F7F4ED"/><path d="M78 105h44M337 107h28" stroke="#FF4FA3" stroke-width="8" stroke-linecap="round"/></svg>';
  }
  function progress(){
    const n=G.doneCount();
    return '<div class="garage-progress"><span>'+n+'/7 QUEST KEYS</span><div><i style="width:'+(n/7*100)+'%"></i></div></div>';
  }
  function gameCard(id){
    const g=G.games[id]; if(!g) return '';
    const done=!!G.read().done?.[id];
    return '<button class="garage-game-card '+(done?'done':'')+'" data-garage-open="'+id+'"><span class="garage-icon">'+G.icons[id]+'</span><small>'+G.esc(g.skill)+'</small><b>'+G.esc(g.title)+'</b><em>'+G.esc(g.blurb)+'</em><strong>'+(done?'✓ KEY EARNED':'OPEN QUEST →')+'</strong></button>';
  }
  G.homePanel = () => {
    const host=document.querySelector('.map-grid'); if(!host || document.querySelector('.garage-home')) return;
    const sec=document.createElement('section'); sec.className='garage-home';
    sec.innerHTML='<div class="garage-home-copy"><div class="eyebrow">Optional non-linear game layer</div><h2>SIDE QUEST <span>GARAGE</span></h2><p>Choose a challenge when you need a change of pace. Cars, bikes, maps and tech are the context — English is still the mission.</p>'+progress()+'<div class="garage-home-actions"><button class="solid-btn" data-garage-hub>OPEN GARAGE →</button><span>7 games · no lives · no penalties</span></div></div><div class="garage-home-art">'+carArt()+'<img src="./assets/keks/keks-sitting.webp" alt="Keks, the course mascot, sitting beside the garage challenge"></div>';
    host.closest('section')?.after(sec);
  };
  G.missionPanel = () => {
    if(document.querySelector('.garage-mission-card')) return;
    const main=(()=>{try{return JSON.parse(localStorage.getItem(G.MAIN_KEY)||'{}')}catch{return {}}})();
    if(main.view!=='mission') return;
    const id=G.missionQuest[main.currentMission]||'shift', g=G.games[id]; if(!g) return;
    const side=document.querySelector('.sidebar-stack'); if(!side) return;
    const d=document.createElement('div'); d.className='side-card garage-mission-card';
    d.innerHTML='<div class="eyebrow">OPTIONAL SIDE QUEST</div><h4>'+G.icons[id]+' '+G.esc(g.title)+'</h4><p>'+G.esc(g.blurb)+'</p><button class="ghost-btn small-btn" data-garage-open="'+id+'">PLAY THIS QUEST</button>';
    side.appendChild(d);
  };
  G.topButton = () => {
    const nav=document.querySelector('.top-actions'); if(!nav || nav.querySelector('[data-garage-hub]')) return;
    const b=document.createElement('button'); b.className='icon-btn garage-top'; b.setAttribute('data-garage-hub',''); b.textContent='QUESTS'; nav.prepend(b);
  };
  G.ensureModal = () => {
    if(document.querySelector('.garage-modal')) return;
    const m=document.createElement('div'); m.className='garage-modal'; m.hidden=true;
    m.innerHTML='<div class="garage-backdrop" data-garage-close></div><section class="garage-dialog" role="dialog" aria-modal="true" aria-label="Side Quest Garage"><button class="garage-close" data-garage-close aria-label="Close Side Quest Garage">×</button><div data-garage-content></div></section>';
    document.body.appendChild(m);
  };
  G.renderHub = () => {
    G.ensureModal(); const m=document.querySelector('.garage-modal'), box=m.querySelector('[data-garage-content]');
    box.innerHTML='<div class="garage-hub-head"><div><div class="eyebrow">People, Places & Me</div><h2>SIDE QUEST <span>GARAGE</span></h2><p>Pick the language skill you need now. You do not have to play these in order.</p></div><img src="./assets/keks/keks-pointing.webp" alt="Keks pointing to the quest board"></div>'+progress()+'<div class="garage-grid">'+G.order.map(gameCard).join('')+'</div><div class="garage-hub-foot"><b>Teacher move:</b> choose one quest after input, then return to speaking or writing. Two short games beat six repetitive drills.</div>';
    G.bindInside();
  };
  G.openHub = () => {
    G.ensureModal(); G.lastFocus=document.activeElement; const m=document.querySelector('.garage-modal'); m.hidden=false; document.body.classList.add('garage-open'); G.renderHub(); setTimeout(()=>m.querySelector('.garage-close')?.focus(),0);
  };
  G.openGame = id => {
    const g=G.games[id]; if(!g) return; G.ensureModal(); const m=document.querySelector('.garage-modal'); m.hidden=false; document.body.classList.add('garage-open');
    const box=m.querySelector('[data-garage-content]'); box.innerHTML='<button class="garage-back" data-garage-hub>← QUEST BOARD</button><header class="garage-game-head"><span class="garage-big-icon">'+G.icons[id]+'</span><div><small>'+G.esc(g.skill)+'</small><h2>'+G.esc(g.title)+'</h2><p>'+G.esc(g.blurb)+'</p></div></header><div data-game-host></div>';
    g.render(box.querySelector('[data-game-host]')); G.bindInside(); g.bind?.(box.querySelector('[data-game-host]'));
  };
  G.close = () => { const m=document.querySelector('.garage-modal'); if(!m)return; m.hidden=true; document.body.classList.remove('garage-open'); speechSynthesis?.cancel?.(); G.lastFocus?.focus?.(); };
  G.bindInside = () => {
    document.querySelectorAll('[data-garage-hub]').forEach(b=>b.onclick=G.openHub);
    document.querySelectorAll('[data-garage-open]').forEach(b=>b.onclick=()=>G.openGame(b.dataset.garageOpen));
    document.querySelectorAll('[data-garage-close]').forEach(b=>b.onclick=G.close);
  };
  G.enhance = () => { G.topButton(); G.homePanel(); G.missionPanel(); G.bindInside(); };
  G.init = () => {
    G.ensureModal(); G.enhance();
    new MutationObserver(()=>requestAnimationFrame(G.enhance)).observe(document.getElementById('app')||document.body,{childList:true,subtree:true});
    document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&!document.querySelector('.garage-modal')?.hidden)G.close(); });
    document.addEventListener('click',e=>{
      if(e.target.closest?.('[data-new]')) setTimeout(()=>{ if(!localStorage.getItem(G.MAIN_KEY)){localStorage.removeItem(G.KEY); speechSynthesis?.cancel?.();} },0);
    },true);
  };
  setTimeout(G.init,0);
})();