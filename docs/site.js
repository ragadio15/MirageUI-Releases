'use strict';
(()=>{
 document.documentElement.classList.add('js');
 const panels=[...document.querySelectorAll('[data-slide-panel]')];
 const thumbs=[...document.querySelectorAll('.thumb')];
 const counter=document.getElementById('slide-count');
 const play=document.getElementById('autoplay');
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 let current=0,timer=null;
 function stop(){if(timer!==null){clearInterval(timer);timer=null;}play.textContent='▶';play.setAttribute('aria-label','Play slideshow');play.setAttribute('aria-pressed','false');}
 function show(i){current=(i+panels.length)%panels.length;panels.forEach((p,n)=>p.hidden=n!==current);thumbs.forEach((b,n)=>b.setAttribute('aria-current',String(n===current)));counter.textContent=String(current+1).padStart(2,'0')+' / '+String(panels.length).padStart(2,'0');}
 function move(n){stop();show(n);}
 show(0);document.querySelector('.carousel-nav').hidden=false;
 document.getElementById('previous').addEventListener('click',()=>move(current-1));document.getElementById('next').addEventListener('click',()=>move(current+1));
 thumbs.forEach((b,i)=>b.addEventListener('click',()=>move(i)));
 document.querySelectorAll('.module-open').forEach(b=>b.addEventListener('click',()=>{move(Number(b.dataset.slide));document.getElementById('experience').scrollIntoView({behavior:reduce.matches?'auto':'smooth'});thumbs[current].focus({preventScroll:true});}));
 play.addEventListener('click',()=>{if(timer!==null){stop();return;}play.textContent='Ⅱ';play.setAttribute('aria-label','Pause slideshow');play.setAttribute('aria-pressed','true');timer=setInterval(()=>show(current+1),6000);});
 document.querySelector('.showcase').addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(current+(e.key==='ArrowRight'?1:-1));}});
 document.querySelector('.showcase').addEventListener('focusin',e=>{if(e.target!==play&&timer!==null)stop();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});reduce.addEventListener?.('change',()=>{if(reduce.matches)stop();});
 // Prevent an automatic show from changing the slide during inspection.
 const dialog=document.getElementById('lightbox'),large=document.getElementById('lightbox-image'),clip=document.getElementById('lightbox-video');let source=null;
 document.querySelectorAll('[data-zoom]').forEach(b=>b.addEventListener('click',()=>{stop();source=b;clip.hidden=true;large.hidden=false;large.src=b.dataset.zoom;large.alt=b.dataset.title;document.getElementById('lightbox-title').textContent=b.dataset.title;dialog.showModal();document.getElementById('close-lightbox').focus();}));
 document.querySelectorAll('[data-motion]').forEach(b=>b.addEventListener('click',()=>{stop();source=b;large.hidden=true;clip.hidden=false;clip.src=b.dataset.motion;clip.poster=b.dataset.poster;document.getElementById('lightbox-title').textContent=b.dataset.title;dialog.showModal();document.getElementById('close-lightbox').focus();}));
 document.getElementById('close-lightbox').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog.addEventListener('close',()=>{clip.pause();clip.removeAttribute('src');clip.load();source?.focus();});
 const split=document.getElementById('split');split.addEventListener('input',()=>document.querySelector('.comparison-stage').style.setProperty('--split',split.value+'%'));
 // Only query the public release repository, never the private source repository.
 // Keep the accurate snapshot available offline and in case of API failure.
 const root='https://api.github.com/repos/ragadio15/MirageUI-Releases';const repo='https://github.com/ragadio15/MirageUI-Releases';const status=document.getElementById('release-status');const refresh=document.getElementById('refresh-releases');
 const snapshot='Packaged snapshot · verified November 23, 2026. For current availability, consult GitHub Releases.';
 function safeReleaseUrl(value){try{const u=new URL(value);return u.protocol==='https:'&&u.hostname==='github.com'&&u.pathname.startsWith('/ragadio15/MirageUI-Releases/releases/tag/')?u.href:repo+'/releases';}catch{return repo+'/releases';}}
 function validRelease(r,test){return r&&typeof r.tag_name==='string'&&r.tag_name.length>0&&!r.draft&&r.prerelease===test;}
 function render(channel,r,empty){const title=document.getElementById(channel+'-title'),desc=document.getElementById(channel+'-desc'),link=document.getElementById(channel+'-link');if(!r){title.textContent=empty;desc.textContent=channel==='stable'?'No standard release was returned by GitHub.':'No pre-release was found among the recent public releases.';link.textContent='Browse all releases ↗';link.href=repo+'/releases';return;}title.textContent=r.tag_name;const date=new Date(r.published_at);const published=Number.isFinite(date.valueOf())?date.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}):'Publication date unavailable';desc.textContent=channel==='stable'?`Standard release · ${published}. Review the release notes before installing.`:`Test release · ${published}. Review the release notes for verification status and known issues.`;link.href=safeReleaseUrl(r.html_url);link.textContent=channel==='stable'?'Read stable release notes ↗':'Read test release notes ↗';}
 async function update(){refresh.disabled=true;status.textContent='Checking the public GitHub releases…';const c=new AbortController();const timeout=setTimeout(()=>c.abort(),6500);try{const headers={Accept:'application/vnd.github+json'};const [latest,recent]=await Promise.all([fetch(root+'/releases/latest',{headers,signal:c.signal,cache:'no-store'}),fetch(root+'/releases?per_page=30',{headers,signal:c.signal,cache:'no-store'})]);if(!recent.ok)throw Error('Recent release lookup failed');const list=await recent.json();if(!Array.isArray(list))throw Error('Invalid list');let stable=null;if(latest.ok){stable=await latest.json();if(!validRelease(stable,false))throw Error('Invalid stable release');}else if(latest.status!==404)throw Error('Stable lookup failed');const test=list.filter(r=>validRelease(r,true)).sort((a,b)=>Date.parse(b.published_at)-Date.parse(a.published_at))[0];render('stable',stable,'No stable release published');render('test',test,'No recent test release found');lastSuccess=true;status.textContent='Live GitHub release information · checked '+new Date().toLocaleString()+'.';}catch{status.textContent=lastSuccess?'Live refresh unavailable · showing last successful check. Consult GitHub Releases.':'Live check unavailable · '+snapshot;}finally{clearTimeout(timeout);refresh.disabled=false;} }
 let lastSuccess=false;
 // Local preview does not need network.
 refresh.hidden=false;refresh.addEventListener('click',update);if(location.protocol==='https:'||location.protocol==='http:')update();else status.textContent=snapshot+' (Local preview.)';
})();
