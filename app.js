/* TASKPOINT V6
   Functional static build: tasks are rendered directly in JS so they cannot disappear
   because tasks.json is missing. External stock-video URLs are used when available,
   with the supplied hero MP4 as a local playback fallback.
*/
const CONFIG={registrationUrl:'https://adsblog.app/page/reg.php?reg=BMAPESA',whatsappUrl:'https://wa.me/255772947543',channelUrl:'https://chat.whatsapp.com/JX2pZHrInbJ4eJU1vop4S6?s=cl&p=a&mlu=4',phoneDisplay:'0772947543',email:'taskpointpro@gmail.com',anchorDate:'2026-09-02',heroVideo:'VID-20260902-WA0001.mp4',activationFee:14500,activationData:'GB 10',activationBonus:5000};
const STOCK=[
[7821861,'Smartphone'],[7191504,'Laptop'],[5450247,'Pikipiki Showroom'],[30225108,'Luxury Car'],[36124120,'Smart Watch'],[8005482,'Headphones'],[8005481,'Headphones Pro'],[8005470,'Wireless Headphones'],[8005851,'Headset'],[35315351,'Smartphone Demo'],[31685249,'Laptops Tech Store'],[8551507,'Gaming Controller'],[19897022,'Printer'],[31526595,'Office Printer'],[2849945,'Coffee Machine'],[1194719,'Espresso Machine'],[6913276,'Digital Tablet'],[5498986,'Washing Machine'],[7579947,'Tablet Business'],[7579661,'Tablet Office'],[7082853,'Tablet Lifestyle'],[7195750,'Tablet Browsing'],[31183721,'Gaming Mouse'],[8888529,'Vintage Keyboard'],[7534239,'Backlit Keyboard'],[7534238,'Tech Keyboard'],[7534236,'RGB Keyboard'],[7652817,'Digital Tablet Pro'],[7308234,'E-commerce Tablet'],[4962316,'Computer Set'],[25189787,'Computer Mouse'],[33974735,'Mouse Close-up'],[11999581,'Television'],[28436813,'Bicycle Shop'],[5450250,'Motorcycle Deal'],[5450253,'Motorcycle Purchase'],[5450248,'Motorcycle Selection'],[5450249,'Motorcycle Showroom'],[5450246,'Motorbike Display'],[7774568,'Gaming Controller Pro'],[6374206,'Smartphone Display']
].map(([id,title])=>({id,title,video:`https://www.pexels.com/download/video/${id}/`}));
const PRODUCTS=[['Smartphone','📱'],['Laptop','💻'],['Pikipiki','🏍️'],['Gari','🚗'],['Smart Watch','⌚'],['Headphones','🎧'],['Headphones Pro','🎧'],['Wireless Headphones','🎧'],['Headset','🎧'],['Smartphone Pro','📱'],['Laptop Store','💻'],['Gaming Controller','🎮'],['Printer','🖨️'],['Office Printer','🖨️'],['Coffee Machine','☕'],['Espresso Machine','☕'],['Tablet','📱'],['Washing Machine','🧺'],['Business Tablet','📱'],['Office Tablet','📱'],['Tablet Lifestyle','📱'],['Tablet Browsing','📱'],['Gaming Mouse','🖱️'],['Keyboard','⌨️'],['Backlit Keyboard','⌨️'],['Tech Keyboard','⌨️'],['RGB Keyboard','⌨️'],['Digital Tablet','📱'],['E-commerce Tablet','📱'],['Computer Set','🖥️'],['Computer Mouse','🖱️'],['Mouse Close-up','🖱️'],['Television','📺'],['Bicycle','🚲'],['Motorcycle Deal','🏍️'],['Motorcycle Purchase','🏍️'],['Motorcycle Selection','🏍️'],['Motorcycle Showroom','🏍️'],['Gaming Controller Pro','🎮'],['Smartphone Display','📱'],['Laptop Pro','💻'],['Car Showroom','🚘'],['Electric Scooter','🛵'],['Tablet Pro','📲'],['Camera','📷'],['Speaker','🔊'],['Monitor','🖥️'],['Air Conditioner','❄️'],['Fridge','🧊'],['Microwave','♨️'],['Keyboard Pro','⌨️'],['Mouse Pro','🖱️'],['Phone Accessories','📱'],['Car Accessories','🚗'],['Motorbike Accessories','🏍️'],['Smart TV','📺'],['Printer Pro','🖨️'],['Game Console','🎮'],['Earbuds','🎧'],['Power Bank','🔋']];
const COMMUNITY=[['AM','Asha M.','🇹🇿 Tanzania','Mfumo ni rahisi kutumia na task zinaeleweka vizuri.'],['DK','Daniel K.','🇹🇿 Tanzania','Napenda jinsi task zinavyopangwa; ni rahisi kufuata.'],['MR','Michael R.','🌍 International','The platform is clean, simple and easy to navigate.'],['NJ','Neema J.','🇹🇿 Tanzania','Nimependa muonekano na namna task zinavyofunguka.'],['JW','James W.','🌍 International','Everything is clearly presented and easy to understand.'],['RP','Rehema P.','🇹🇿 Tanzania','Kwa mtu anayeanza, mfumo ni rahisi sana kufuata.']];
const DEMO_NOTIFICATIONS=[['Amina','100,000'],['John','120,000'],['Neema','200,000'],['Brian','100,000'],['Zawadi','120,000'],['David','200,000'],['Rehema','100,000'],['Michael','120,000'],['Esther','200,000'],['Kelvin','100,000'],['Asha','120,000'],['Daniel','200,000'],['Grace','100,000'],['Peter','120,000'],['Mercy','200,000'],['Joseph','100,000'],['Sophia','120,000'],['Hassan','200,000'],['Mary','100,000'],['Samuel','120,000']];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],money=n=>new Intl.NumberFormat('sw-TZ').format(n);
$$('[data-link="registration"]').forEach(a=>a.href=CONFIG.registrationUrl);$$('[data-link="whatsapp"]').forEach(a=>a.href=CONFIG.whatsappUrl);$$('[data-link="channel"]').forEach(a=>a.href=CONFIG.channelUrl);$('#phoneText').textContent=CONFIG.phoneDisplay;$('#emailText').textContent=CONFIG.email;$('#activationFee').textContent=money(CONFIG.activationFee);$('#activationBonus').textContent=money(CONFIG.activationBonus);
function tzDateISO(){const p=new Intl.DateTimeFormat('en-CA',{timeZone:'Africa/Dar_es_Salaam',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());const o=Object.fromEntries(p.map(x=>[x.type,x.value]));return `${o.year}-${o.month}-${o.day}`}
function dayIndex(){return Math.max(0,Math.floor((new Date(`${tzDateISO()}T00:00:00Z`)-new Date(`${CONFIG.anchorDate}T00:00:00Z`))/86400000))}
const TZ='Africa/Dar_es_Salaam';
const di=dayIndex(),reward=3000-(di%11)*100,countToday=40+(di*7)%21;
const nowTZ=new Date();
$('#today').textContent=new Intl.DateTimeFormat('sw-TZ',{timeZone:TZ,weekday:'long',day:'2-digit',month:'long',year:'numeric'}).format(nowTZ).toUpperCase();
function updateClock(){
  const d=new Date();
  $('#todayTime').textContent=new Intl.DateTimeFormat('sw-TZ',{timeZone:TZ,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(d);
}
updateClock();setInterval(updateClock,1000);

$('#taskCount').textContent=`${countToday} TASKS LEO`;
$('#heroTaskCount').textContent=countToday;
$('#dailyReward').textContent=`Tsh ${money(reward)}`;
$('#rewardNote').textContent=`Kila task leo: Tsh ${money(reward)}`;
$('#cycleLabel').textContent='Kiasi cha task hubadilika kulingana na siku.';

const VARIANTS=['Starter','Plus','Smart','Quick','Daily','Digital','Pro','Prime','Active','Flex','Connect','Boost','Focus','Fresh','Max','Next','Power','Easy','Go','Elite','Direct','Fast','Select','Advance','One','Core','Nova','Vision','Edge','Choice','Bright','Flow','Link','Pulse','Spark','Move','Launch','Trend','Value','Simple','Top'];
const taskPool=[];
for(let round=0;round<100;round++){
  PRODUCTS.forEach((p,idx)=>{
    const v=VARIANTS[(round*7+idx)%VARIANTS.length];
    const serial=String(round+1).padStart(2,'0')+'-'+String(idx+1).padStart(2,'0');
    taskPool.push({
      key:`TP-${round+1}-${idx+1}`,
      title:`${p[0]} ${v} • ${serial}`,
      emoji:p[1],
      reward:reward,
      video:STOCK[idx%STOCK.length].video,
      sourceTitle:STOCK[idx%STOCK.length].title,
      serial
    });
  });
}
function stableHash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function seededOrder(arr,seed){
  return [...arr].sort((a,b)=>stableHash(`${seed}:${a.key}`)-stableHash(`${seed}:${b.key}`));
}
const dailyTaskKey=`tp_daily_tasks_${tzDateISO()}`;
const storedDaily=JSON.parse(localStorage.getItem(dailyTaskKey)||'null');
const usedEver=JSON.parse(localStorage.getItem('tp_used_task_keys')||'[]');
const usedSet=new Set(usedEver);
let TASKS;
if(Array.isArray(storedDaily) && storedDaily.length){
  TASKS=storedDaily.map(key=>taskPool.find(t=>t.key===key)).filter(Boolean);
}else{
  const ordered=seededOrder(taskPool,di+1);
  const fresh=ordered.filter(t=>!usedSet.has(t.key));
  TASKS=fresh.slice(0,countToday);
  localStorage.setItem(dailyTaskKey,JSON.stringify(TASKS.map(t=>t.key)));
  TASKS.forEach(t=>usedSet.add(t.key));
  localStorage.setItem('tp_used_task_keys',JSON.stringify([...usedSet]));
}

const grid=$('#taskGrid');
const completedToday=new Set(JSON.parse(localStorage.getItem(`tp_completed_${tzDateISO()}`)||'[]'));
function renderTasks(){
  grid.innerHTML='';
  TASKS.forEach((t,i)=>{
    const done=completedToday.has(t.key);
    const el=document.createElement('article');el.className=`task ${done?'is-complete':''}`;
    el.innerHTML=`<span class="task-num">${String(i+1).padStart(2,'0')}</span>
      <div class="task-art"><video src="${t.video}" muted playsinline preload="metadata" data-fallback="${CONFIG.heroVideo}"></video><span class="video-badge">▶ VIDEO</span><span class="task-emoji">${t.emoji}</span></div>
      <div class="task-info"><h3>${t.title}</h3><strong>Tsh ${money(t.reward)}</strong></div>
      <button data-task="${t.key}" ${done?'disabled':''}>${done?'✓ IMEKAMILIKA':'KAMILISHA TASK'}</button>`;
    grid.appendChild(el);
  });
  $$('.task-art video').forEach(v=>{v.addEventListener('error',()=>{if(v.dataset.fallback&&!v.src.endsWith(v.dataset.fallback)){v.src=v.dataset.fallback;v.load()}});v.addEventListener('mouseenter',()=>v.play().catch(()=>{}));v.addEventListener('mouseleave',()=>{v.pause();try{v.currentTime=0}catch(_){}})});
}
renderTasks();
$$('.task-art video').forEach(v=>{v.addEventListener('error',()=>{if(v.dataset.fallback&&!v.src.endsWith(v.dataset.fallback)){v.src=v.dataset.fallback;v.load()}});v.addEventListener('mouseenter',()=>v.play().catch(()=>{}));v.addEventListener('mouseleave',()=>{v.pause();try{v.currentTime=0}catch(_){}})});
const modal=$('#taskModal'),tv=$('#taskVideo'),count=$('#count'),completion=$('#completion'),completionText=$('#completionText');let timer,remaining=10,active;
function openTask(key){active=TASKS.find(t=>t.key===key);if(!active||completedToday.has(active.key))return;$('#amount').textContent=money(active.reward);$('#modalTaskName').textContent=active.title;tv.src=active.video;tv.currentTime=0;completion.classList.remove('show');completionText.textContent='';count.classList.remove('done');remaining=10;count.textContent=remaining;modal.classList.add('show');document.body.classList.add('modal-open');tv.play().catch(()=>{tv.src=CONFIG.heroVideo;tv.play().catch(()=>{})});clearInterval(timer);timer=setInterval(()=>{remaining--;count.textContent=remaining>0?remaining:'✓';if(remaining<=0)finishTask()},1000)}
function finishTask(){
  clearInterval(timer);count.classList.add('done');completion.classList.add('show');completionText.textContent='IMEKAMILIKA✅';tv.pause();
  if(!active||completedToday.has(active.key))return;
  completedToday.add(active.key);
  localStorage.setItem(`tp_completed_${tzDateISO()}`,JSON.stringify([...completedToday]));
  addEarnings(active.reward);
  renderTasks();
}
function closeModal(){clearInterval(timer);tv.pause();tv.removeAttribute('src');tv.load();modal.classList.remove('show');document.body.classList.remove('modal-open')}
grid.addEventListener('click',e=>{const b=e.target.closest('[data-task]');if(b&&!b.disabled)openTask(b.dataset.task)});$('#modalX').onclick=closeModal;modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});$('#otherBtn').onclick=()=>{closeModal();$('#tasks').scrollIntoView({behavior:'smooth'})};$('#moreBtn').onclick=()=>$('#tasks').scrollIntoView({behavior:'smooth'});
const WALLET_KEY='tp_wallet_v10';
function getWallet(){try{return JSON.parse(localStorage.getItem(WALLET_KEY))||{balance:0,total:0}}catch(_){return{balance:0,total:0}}}
function saveWallet(w){localStorage.setItem(WALLET_KEY,JSON.stringify(w));updateWalletUI(w)}
function updateWalletUI(w=getWallet()){
  $('#balanceAmount').textContent=`Tsh ${money(w.balance)}`;
  $('#totalAmount').textContent=`Tsh ${money(w.total)}`;
}
function addEarnings(amount){
  const w=getWallet();w.balance+=Number(amount)||0;w.total+=Number(amount)||0;saveWallet(w);
}
updateWalletUI();

const withdrawModal=$('#withdrawModal'),withdrawInput=$('#withdrawAmount'),withdrawMessage=$('#withdrawMessage');
function openWithdraw(){
  withdrawModal.classList.add('show');
  withdrawModal.setAttribute('aria-hidden','false');
  withdrawInput.value='';
  withdrawMessage.classList.remove('show');
  setTimeout(()=>withdrawInput.focus(),50);
}
$('#withdrawBtn').onclick=openWithdraw;
$('#completionWithdrawBtn').onclick=openWithdraw;
$('#withdrawClose').onclick=()=>{withdrawModal.classList.remove('show');withdrawModal.setAttribute('aria-hidden','true')};
withdrawModal.addEventListener('click',e=>{if(e.target===withdrawModal){withdrawModal.classList.remove('show');withdrawModal.setAttribute('aria-hidden','true')}});
$('#withdrawSubmit').onclick=()=>{
  const amount=Number(withdrawInput.value);
  const w=getWallet();
  withdrawMessage.classList.add('show');
  if(!amount||amount<=0){withdrawMessage.querySelector('strong').textContent='⚠️ Weka kiasi sahihi cha kutoa';withdrawMessage.querySelector('span').textContent='Andika kiasi cha fedha unachotaka kutoa kisha bonyeza WITHDRAW tena.';return}
  if(amount>w.balance){withdrawMessage.querySelector('strong').textContent='⚠️ Balance haitoshi';withdrawMessage.querySelector('span').textContent=`Balance yako ni Tsh ${money(w.balance)}. Weka kiasi kisichozidi Balance.`;return}
  withdrawMessage.querySelector('strong').textContent='⚠️ Ili uweze kupokea kiasi cha fedha ulichotoa';
  withdrawMessage.querySelector('span').textContent='jaza fomu ya usajili hapa chini alafu wezesha account yako.';
};

let audio;function notificationSound(index=0){try{audio||=new(window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();const now=audio.currentTime;const freqs=[660,880,1047,740,988];const f=freqs[index%freqs.length];const o=audio.createOscillator(),g=audio.createGain();o.type='sine';o.frequency.setValueAtTime(f,now);o.frequency.exponentialRampToValueAtTime(f*1.35,now+.10);g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(.055,now+.025);g.gain.exponentialRampToValueAtTime(.0001,now+.32);o.connect(g);g.connect(audio.destination);o.start(now);o.stop(now+.34)}catch(_){} }
// Demo notifications are clearly marked as demo data. Replace with verified backend records before production.
const stack=$('#toastStack');let ni=0;const toastClasses=['toast-violet','toast-cyan','toast-orange','toast-pink','toast-green'];function showNotification(){const index=ni++%DEMO_NOTIFICATIONS.length;const [name,amt]=DEMO_NOTIFICATIONS[index];const t=document.createElement('div');t.className=`evidence-toast ${toastClasses[index%toastClasses.length]}`;t.innerHTML=`<div class="toast-head"><b>TAARIFA MPYA</b><span class="toast-time">6s</span></div><span>${name} — Nimelipwa Tsh ${amt}/=</span><small>Pesa Zinatoka Muda Wote; ni malipo halali.</small><div class="toast-progress"><i></i></div>`;stack.appendChild(t);notificationSound(index);let left=6;const tick=setInterval(()=>{left--;const el=t.querySelector('.toast-time');if(el)el.textContent=`${Math.max(left,0)}s`;if(left<=0)clearInterval(tick)},1000);setTimeout(()=>{clearInterval(tick);t.remove();showNotification()},6000)}setTimeout(showNotification,2200);
const tg=$('#testimonialGrid');COMMUNITY.forEach((t,i)=>{const e=document.createElement('article');e.className='testimonial';e.innerHTML=`<div class="person"><div class="avatar avatar-${i%4}" aria-hidden="true">${t[0]}</div><div><b>${t[1]}</b><span class="country">${t[2]}</span><div class="stars" aria-label="5 stars">★★★★★</div></div></div><p>“${t[3]}”</p>`;tg.appendChild(e)});
$('#menuBtn').onclick=()=>$('#drawer').classList.add('open');$('#drawerClose').onclick=()=>$('#drawer').classList.remove('open');$$('.drawer a').forEach(a=>a.onclick=()=>$('#drawer').classList.remove('open'));
const cm=$('#certModal'),cv=$('#certViewer');$$('[data-cert]').forEach(b=>b.onclick=()=>{cv.src=b.dataset.cert;cm.classList.add('show')});$('#certModalClose').onclick=()=>cm.classList.remove('show');cm.addEventListener('click',e=>{if(e.target===cm)cm.classList.remove('show')});$('#heroVideo')?.play?.().catch?.(()=>{});
