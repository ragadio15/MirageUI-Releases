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
 // v1.1: exact-tag release facts, explicit unknown states and validated asset links.
 const root='https://api.github.com/repos/ragadio15/MirageUI-Releases';
 const repo='https://github.com/ragadio15/MirageUI-Releases';
 const status=document.getElementById('release-status'),refresh=document.getElementById('refresh-releases'),ribbonSource=document.getElementById('ribbon-source');
 const data=window.MirageReleaseData;
 const snapshot=data?.snapshot;
 const checked=data?.checked||'unknown date';
 const snapshotText='Packaged snapshot · checked '+checked+'. Consult GitHub Releases for current availability.';
 let lastSuccess=false,lastChecked='';
 const validRelease=(r,test)=>!!r&&typeof r.tag_name==='string'&&r.tag_name.trim()!==''&&r.draft===false&&r.prerelease===test;
 function safeUrl(value,prefix){try{const u=new URL(value);return u.protocol==='https:'&&u.hostname==='github.com'&&!u.port&&!u.username&&!u.password&&!u.search&&!u.hash&&u.pathname.startsWith('/ragadio15/MirageUI-Releases/releases/'+prefix+'/')?u.href:null;}catch{return null;}}
 function notesUrl(r){return safeUrl(r?.html_url,'tag')||repo+'/releases';}
 const nativeLabel={NOT_RUN:'Not run',PASS:'Pass (as reported)',FAIL:'Fail (as reported)',PARTIAL:'Partial (as reported)',PENDING:'Pending (as reported)',NOT_VERIFIED:'Not verified',VERIFIED:'Verified (as reported)'};
 function facts(r){
  const m=data?.metadata&&Object.prototype.hasOwnProperty.call(data.metadata,r.tag_name)?data.metadata[r.tag_name]:{};
  // Only parse explicitly named fields; never infer verification from release channel or generic prose.
  const explicit=typeof r.body==='string'?r.body.match(/\bX-MirageUI-Native-Verification\s*:\s*([A-Z_]+)\b/i):null;
  const native=explicit?explicit[1].toUpperCase():m.native;
  return {client:m.client||'Not documented here — see release notes',interface:m.interface||'Not documented here — see release notes',native:nativeLabel[native]||'Not documented here — see release notes',nativeKey:native,installer:m.installer||'See release notes',notice:m.notice||''};
 }
 function dateText(r){const d=new Date(r.published_at||'');return Number.isFinite(d.valueOf())?d.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}):'Publication date unavailable';}
 function make(tag,value,cls){const n=document.createElement(tag);if(value!==undefined)n.textContent=value;if(cls)n.className=cls;return n;}
 function assetLabel(a,test){const n=a.name;if(n==='MirageUIInstaller.exe')return 'Portable installer (Windows x64)';if(/^MirageUI[_-]Suite.*\.zip$/i.test(n))return 'Suite archive'+(test?' (test build)':'');if(n==='SHA256SUMS.txt')return 'SHA-256 checksums';return null;}
 function appendAssets(el,r,test){
  const assets=Array.isArray(r.assets)?r.assets:[];const digests=[];
  for(const a of assets){if(!a||typeof a.name!=='string')continue;const label=assetLabel(a,test),url=safeUrl(a.browser_download_url,'download');if(!label||!url)continue;
   // Require an exact decoded release-tag and filename match in addition to repository origin.
   try{const expected='/ragadio15/MirageUI-Releases/releases/download/'+r.tag_name+'/'+a.name;if(decodeURIComponent(new URL(url).pathname)!==expected)continue;}catch{continue;}
   const link=make('a',label+' ↗');link.href=url;el.append(link);
   if(typeof a.digest==='string'&&/^sha256:[0-9a-f]{64}$/i.test(a.digest))digests.push([a.name,a.digest]);
  }
  if(digests.length){const det=make('details');det.append(make('summary','Published asset SHA-256 digests'));for(const [n,h] of digests){det.append(make('p',n+': '+h,'digest'));}el.append(det);}
 }
 function render(channel,r,empty){
  const title=document.getElementById(channel+'-title'),desc=document.getElementById(channel+'-desc'),link=document.getElementById(channel+'-link'),dl=document.getElementById(channel+'-facts'),assetEl=document.getElementById(channel+'-assets');
  dl.replaceChildren();assetEl.replaceChildren();dl.hidden=!r;
  if(!r){title.textContent=empty;desc.textContent=channel==='stable'?'No standard Suite release was found. Wait for a stable build for regular use.':'No pre-release was found among the recent public releases.';link.textContent='Browse all releases ↗';link.href=repo+'/releases';return;}
  const f=facts(r);title.textContent=r.tag_name;desc.textContent=(channel==='stable'?'Standard release':'Test release')+' · '+dateText(r)+'. '+(f.notice||'Read the release notes for compatibility, verification and known issues.');
  for(const [key,val] of [['Client',f.client],['Interface',f.interface],['Native verification',f.native],['Release installer',f.installer]]){dl.append(make('dt',key),make('dd',val,key==='Native verification'&&f.nativeKey!=='PASS'&&f.nativeKey!=='VERIFIED'?'native-caution':''));}
  appendAssets(assetEl,r,channel==='test');link.href=notesUrl(r);link.textContent=channel==='stable'?'Read stable release notes ↗':'Read test release notes ↗';
 }
 function renderChannels(stable,test){
  render('stable',stable,'No stable release published');render('test',test,'No recent test release found');
  const title=document.getElementById('hero-release'),detail=document.getElementById('hero-release-detail');
  title.textContent=stable?'Stable release available':test?'Test channel only':'No public Suite release found';
  const active=stable||test;detail.textContent=active?active.tag_name+' · Native verification: '+facts(active).native:'Visit GitHub Releases for current availability.';
 }
 function byDate(a,b){return (Date.parse(b.published_at)||0)-(Date.parse(a.published_at)||0);}
 async function update(){
  refresh.disabled=true;status.textContent='Checking public GitHub releases…';ribbonSource.textContent=lastSuccess?'RELEASE STATUS · LAST CHECK':'RELEASE STATUS · SNAPSHOT';const c=new AbortController();const timeout=setTimeout(()=>c.abort(),6500);
  try{
   const headers={Accept:'application/vnd.github+json'};const [latest,recent]=await Promise.all([fetch(root+'/releases/latest',{headers,signal:c.signal,cache:'no-store'}),fetch(root+'/releases?per_page=30',{headers,signal:c.signal,cache:'no-store'})]);
   if(!recent.ok)throw Error('Recent release lookup failed');const list=await recent.json();if(!Array.isArray(list))throw Error('Invalid list');
   let stable=null;if(latest.ok){stable=await latest.json();if(!validRelease(stable,false))throw Error('Invalid stable release');}else if(latest.status===404){stable=list.filter(r=>validRelease(r,false)).sort(byDate)[0]||null;}else throw Error('Stable lookup failed');
   const test=list.filter(r=>validRelease(r,true)).sort(byDate)[0]||null;renderChannels(stable,test);lastSuccess=true;lastChecked=new Date().toLocaleString();ribbonSource.textContent='RELEASE STATUS · LIVE';status.textContent='Live GitHub release information · checked '+lastChecked+'.';
  }catch{ribbonSource.textContent=lastSuccess?'RELEASE STATUS · LAST CHECK':'RELEASE STATUS · SNAPSHOT';status.textContent=lastSuccess?'Live refresh unavailable · showing last successful check ('+lastChecked+'). Consult GitHub Releases.':'Live check unavailable · '+snapshotText;}
  finally{clearTimeout(timeout);refresh.disabled=false;}
 }
 if(snapshot){renderChannels(snapshot.stable,snapshot.test);document.getElementById('hero-release-detail').textContent+=' · '+checked;}
 refresh.hidden=false;refresh.addEventListener('click',update);if(location.protocol==='https:'||location.protocol==='http:')update();else status.textContent=snapshotText+' (Local preview.)';
})();
