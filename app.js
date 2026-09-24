/* TASKPOINT V6
   Functional static build: tasks are rendered directly in JS so they cannot disappear
   because tasks.json is missing. External stock-video URLs are used when available,
   with the supplied hero MP4 as a local playback fallback.
*/
const CONFIG={registrationUrl:'https://adsblog.app/page/reg.php?reg=BMAPESA',whatsappUrl:'https://wa.me/255772947543',smsNumber:'0764540225',channelUrl:'https://whatsapp.com/channel/0029VbDyHlgATRSw8eXeZx1R',phoneDisplay:'0772947543',email:'taskpointpro@gmail.com',anchorDate:'2026-09-02',heroVideo:'VID-20260902-WA0001.mp4',activationFee:14500,activationData:'GB 10',activationBonus:5000};
const STOCK=[
[7821861,'Smartphone'],[7191504,'Laptop'],[5450247,'Pikipiki Showroom'],[30225108,'Luxury Car'],[36124120,'Smart Watch'],[8005482,'Headphones'],[8005481,'Headphones Pro'],[8005470,'Wireless Headphones'],[8005851,'Headset'],[35315351,'Smartphone Demo'],[31685249,'Laptops Tech Store'],[8551507,'Gaming Controller'],[19897022,'Printer'],[31526595,'Office Printer'],[2849945,'Coffee Machine'],[1194719,'Espresso Machine'],[6913276,'Digital Tablet'],[5498986,'Washing Machine'],[7579947,'Tablet Business'],[7579661,'Tablet Office'],[7082853,'Tablet Lifestyle'],[7195750,'Tablet Browsing'],[31183721,'Gaming Mouse'],[8888529,'Vintage Keyboard'],[7534239,'Backlit Keyboard'],[7534238,'Tech Keyboard'],[7534236,'RGB Keyboard'],[7652817,'Digital Tablet Pro'],[7308234,'E-commerce Tablet'],[4962316,'Computer Set'],[25189787,'Computer Mouse'],[33974735,'Mouse Close-up'],[11999581,'Television'],[28436813,'Bicycle Shop'],[5450250,'Motorcycle Deal'],[5450253,'Motorcycle Purchase'],[5450248,'Motorcycle Selection'],[5450249,'Motorcycle Showroom'],[5450246,'Motorbike Display'],[7774568,'Gaming Controller Pro'],[6374206,'Smartphone Display']
].map(([id,title])=>({id,title,video:`https://www.pexels.com/download/video/${id}/`}));
const PRODUCTS=[['Smartphone','📱'],['Laptop','💻'],['Pikipiki','🏍️'],['Gari','🚗'],['Smart Watch','⌚'],['Headphones','🎧'],['Headphones Pro','🎧'],['Wireless Headphones','🎧'],['Headset','🎧'],['Smartphone Pro','📱'],['Laptop Store','💻'],['Gaming Controller','🎮'],['Printer','🖨️'],['Office Printer','🖨️'],['Coffee Machine','☕'],['Espresso Machine','☕'],['Tablet','📱'],['Washing Machine','🧺'],['Business Tablet','📱'],['Office Tablet','📱'],['Tablet Lifestyle','📱'],['Tablet Browsing','📱'],['Gaming Mouse','🖱️'],['Keyboard','⌨️'],['Backlit Keyboard','⌨️'],['Tech Keyboard','⌨️'],['RGB Keyboard','⌨️'],['Digital Tablet','📱'],['E-commerce Tablet','📱'],['Computer Set','🖥️'],['Computer Mouse','🖱️'],['Mouse Close-up','🖱️'],['Television','📺'],['Bicycle','🚲'],['Motorcycle Deal','🏍️'],['Motorcycle Purchase','🏍️'],['Motorcycle Selection','🏍️'],['Motorcycle Showroom','🏍️'],['Gaming Controller Pro','🎮'],['Smartphone Display','📱'],['Laptop Pro','💻'],['Car Showroom','🚘'],['Electric Scooter','🛵'],['Tablet Pro','📲'],['Camera','📷'],['Speaker','🔊'],['Monitor','🖥️'],['Air Conditioner','❄️'],['Fridge','🧊'],['Microwave','♨️'],['Keyboard Pro','⌨️'],['Mouse Pro','🖱️'],['Phone Accessories','📱'],['Car Accessories','🚗'],['Motorbike Accessories','🏍️'],['Smart TV','📺'],['Printer Pro','🖨️'],['Game Console','🎮'],['Earbuds','🎧'],['Power Bank','🔋']];
const COMMUNITY=[['AM','Asha M.','🇹🇿 Tanzania','Mfumo ni rahisi kutumia na task zinaeleweka vizuri.'],
['DK','Daniel K.','🇹🇿 Tanzania','Napenda jinsi task zinavyopangwa; ni rahisi kufuata.'],
['MR','Michael R.','🌍 International','The platform is clean, simple and easy to navigate.'],
['NJ','Neema J.','🇹🇿 Tanzania','Nimependa muonekano na namna task zinavyofunguka.'],
['JW','James W.','🌍 International','Everything is clearly presented and easy to understand.'],
['RP','Rehema P.','🇹🇿 Tanzania','Kwa mtu anayeanza, mfumo ni rahisi sana kufuata.'],
['FA','Fatma A.','🇹🇿 Tanzania','Maelekezo ya task yanaonekana wazi na rahisi kuelewa.'],
['JM','Juma M.','🇹🇿 Tanzania','Nimependa jinsi mfumo ulivyo rahisi kutumia kwenye simu.'],
['HA','Halima S.','🇹🇿 Tanzania','Muonekano wa website ni mzuri na navigation ni rahisi.'],
['BA','Baraka P.','🇹🇿 Tanzania','Nimeweza kuelewa hatua za kutumia mfumo bila shida.'],
['GE','George M.','🇹🇿 Tanzania','Mfumo unaonekana vizuri na maelekezo yako wazi.'],
['SA','Salma K.','🇹🇿 Tanzania','Nimependa urahisi wa kutumia TaskPoint Pro kwenye simu.'],
['IB','Ibrahim A.','🇹🇿 Tanzania','Website iko simple na ni rahisi kufuata hatua.'],
['JO','Joyce P.','🇹🇿 Tanzania','Task zinaeleweka vizuri na mfumo una navigation nzuri.'],
['AG','Agnes J.','🇹🇿 Tanzania','Nimependa mpangilio wa mfumo na jinsi taarifa zinavyoonekana.'],
['YO','Yusuf M.','🇹🇿 Tanzania','Ni rahisi kujifunza namna ya kutumia mfumo.'],
['PR','Prisca N.','🇹🇿 Tanzania','Muonekano ni mzuri na taarifa muhimu zinaonekana wazi.'],
['EM','Emmanuel K.','🇹🇿 Tanzania','Nimependa mfumo kwa sababu maelekezo yake ni rahisi kuelewa.'],
['JA','Janeth S.','🇹🇿 Tanzania','TaskPoint Pro inaonekana professional na rahisi kutumia.'],
['MO','Moses R.','🇹🇿 Tanzania','Nimependa namna task zinavyoonyeshwa kwenye simu.'],
['HE','Hellen A.','🇹🇿 Tanzania','Mfumo ni mwepesi kufuatilia na maelekezo yako wazi.'],
['AB','Abdallah J.','🇹🇿 Tanzania','Nimefurahia urahisi wa navigation kwenye website.'],
['JO','Joseph P.','🇹🇿 Tanzania','Kila kitu muhimu kinaonekana vizuri kwenye ukurasa.'],
['ME','Mercy A.','🇹🇿 Tanzania','Nimependa design na namna information ilivyopangwa.'],
['SO','Sophia M.','🌍 International','The interface is simple and easy to understand.'],
['HA','Hassan K.','🇹🇿 Tanzania','Mfumo unaeleweka vizuri hata kwa mtu anayeanza.'],
['GR','Grace N.','🇹🇿 Tanzania','Nimependa jinsi website ilivyo rahisi kutumia.'],
['PE','Peter J.','🇹🇿 Tanzania','Maelekezo yako wazi na task zinaonekana vizuri.'],
['MA','Mary S.','🇹🇿 Tanzania','Muonekano wa mfumo ni mzuri na unaeleweka haraka.'],
['SA','Samuel K.','🇹🇿 Tanzania','Nimependa mpangilio wa task na taarifa zake.']
];
const DEMO_NOTIFICATIONS=[
['Amina','100,000'],['John','120,000'],['Neema','200,000'],['Brian','100,000'],
['Zawadi','120,000'],['David','200,000'],['Rehema','100,000'],['Michael','120,000'],
['Esther','200,000'],['Kelvin','100,000'],['Asha','120,000'],['Daniel','200,000'],
['Grace','100,000'],['Peter','120,000'],['Mercy','200,000'],['Joseph','100,000'],
['Sophia','120,000'],['Hassan','200,000'],['Mary','100,000'],['Samuel','120,000'],
['Halima','200,000'],['Ibrahim','100,000'],['Fatma','120,000'],['Juma','200,000'],
['Salma','100,000'],['Moses','120,000'],['Agnes','200,000'],['Emmanuel','100,000'],
['Joyce','120,000'],['Abdallah','200,000'],['Prisca','100,000'],['George','120,000'],
['Janeth','200,000'],['Baraka','100,000'],['Hellen','120,000'],['Yusuf','200,000']
];

function dailyShuffle(items){
  const seed=Number(tzDateISO().replace(/-/g,''));
  const arr=[...items];
  let x=seed;
  for(let i=arr.length-1;i>0;i--){
    x=(x*9301+49297)%233280;
    const j=x%(i+1);
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],money=n=>new Intl.NumberFormat('sw-TZ').format(n);
$$('[data-link="registration"]').forEach(a=>a.href=CONFIG.registrationUrl);$$('[data-link="whatsapp"]').forEach(a=>a.href=CONFIG.whatsappUrl);$$('[data-link="channel"]').forEach(a=>a.href=CONFIG.channelUrl);$('#phoneText').textContent=CONFIG.phoneDisplay;$('#emailText').textContent=CONFIG.email;$('#activationFee').textContent=money(CONFIG.activationFee);$('#activationBonus').textContent=money(CONFIG.activationBonus);
/* =========================================================
   TASKPOINT PRO — REGISTRATION REQUIREMENT NOTICE
   ========================================================= */

(function setupRegistrationNotice(){

  if(document.getElementById('tpRegistrationNotice')) return;

  const style=document.createElement('style');

  style.id='tpRegistrationNoticeStyles';

  style.textContent=`
    #tpRegistrationNotice{
      position:fixed;
      inset:0;
      z-index:100000;
      display:none;
      align-items:center;
      justify-content:center;
      padding:18px;
      background:rgba(2,9,18,.78);
      backdrop-filter:blur(7px);
    }

    #tpRegistrationNotice.show{
      display:flex;
      animation:tpRegFade .2s ease;
    }

    .tp-reg-card{
      position:relative;
      width:min(470px,100%);
      padding:28px 22px 22px;
      border-radius:24px;
      background:#fff;
      box-shadow:0 30px 90px rgba(0,0,0,.4);
      text-align:center;
    }

    .tp-reg-close{
      position:absolute;
      right:12px;
      top:12px;
      width:38px;
      height:38px;
      border:0;
      border-radius:50%;
      background:#eef2f6;
      color:#172235;
      font-size:24px;
      cursor:pointer;
    }

    .tp-reg-badge{
      display:inline-flex;
      padding:7px 12px;
      border-radius:999px;
      background:#eefbf4;
      color:#08783d;
      font-size:11px;
      font-weight:900;
      margin-bottom:10px;
    }

    .tp-reg-card h2{
      margin:0 0 10px;
      color:#102033;
      font-size:24px;
      font-weight:950;
    }

    .tp-reg-card p{
      margin:0 0 16px;
      color:#5f6e7e;
      font-size:13px;
      line-height:1.65;
    }

    .tp-reg-fee{
      margin:0 0 16px;
      padding:14px;
      border-radius:15px;
      background:#f7f9fb;
      border:1px solid #e2e8ef;
      color:#102033;
      font-size:22px;
      font-weight:950;
    }

    .tp-reg-fee small{
      display:block;
      margin-top:4px;
      color:#718092;
      font-size:10px;
      font-weight:800;
    }

    .tp-reg-actions{
      display:grid;
      gap:10px;
    }

    .tp-reg-continue,
    .tp-reg-cancel{
      width:100%;
      padding:13px 16px;
      border-radius:13px;
      font-weight:900;
      font-size:12px;
      cursor:pointer;
    }

    .tp-reg-continue{
      border:0;
      background:#16d96f;
      color:#062016;
    }

    .tp-reg-cancel{
      border:1px solid #dce3ea;
      background:#fff;
      color:#334155;
    }

    @keyframes tpRegFade{
      from{opacity:0}
      to{opacity:1}
    }

    @media(max-width:600px){
      .tp-reg-card{
        padding:25px 16px 18px;
      }

      .tp-reg-card h2{
        font-size:21px;
      }
    }
  `;

  document.head.appendChild(style);

  const modal=document.createElement('div');

  modal.id='tpRegistrationNotice';

  modal.setAttribute('aria-hidden','true');

  modal.innerHTML=`
    <div
      class="tp-reg-card"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tpRegTitle"
    >

      <button
        type="button"
        class="tp-reg-close"
        id="tpRegClose"
        aria-label="Funga"
      >
        ×
      </button>

      <span class="tp-reg-badge">
        ACCOUNT ACTIVATION
      </span>

      <h2 id="tpRegTitle">
        KUJISAJILI NA TASKPOINT PRO
      </h2>

      <p>
        Ili kuwezesha akaunti yako na kuanza kutumia mfumo
        wa TaskPoint Pro, unahitaji kuwa na
        <strong>mtaji wa TSh 14,500</strong>.
      </p>

      <p>
        Kiasi hiki kinahitajika kwa ajili ya kuwezesha namba
        uliyotumia wakati wa usajili ili akaunti yako iwe tayari
        kwa matumizi na malipo ya mfumo.
      </p>

      <div class="tp-reg-fee">
        TSh 14,500
        <small>Ada/Mtaji wa kuwezesha akaunti</small>
      </div>

      <div class="tp-reg-actions">

        <button
          type="button"
          class="tp-reg-continue"
          id="tpRegContinue"
        >
          NINAENDELEA NA USAJILI →
        </button>

        <button
          type="button"
          class="tp-reg-cancel"
          id="tpRegCancel"
        >
          SITAKI KUENDELEA
        </button>

      </div>

    </div>
  `;

  document.body.appendChild(modal);

  let pendingUrl=CONFIG.registrationUrl;

  function closeNotice(){

    modal.classList.remove('show');

    modal.setAttribute(
      'aria-hidden',
      'true'
    );

  }

  function openNotice(url){

    pendingUrl=url || CONFIG.registrationUrl;

    modal.classList.add('show');

    modal.setAttribute(
      'aria-hidden',
      'false'
    );

  }

  document.addEventListener('click',function(event){

    const link=
      event.target.closest('[data-link="registration"]');

    if(!link) return;

    event.preventDefault();

    openNotice(
      link.href || CONFIG.registrationUrl
    );

  });

  document.getElementById('tpRegClose').onclick=
    closeNotice;

  document.getElementById('tpRegCancel').onclick=
    closeNotice;

  document.getElementById('tpRegContinue').onclick=
    function(){

      const url=
        pendingUrl || CONFIG.registrationUrl;

      closeNotice();

      window.open(
        url,
        '_blank',
        'noopener,noreferrer'
      );

    };

  modal.addEventListener('click',function(event){

    if(event.target===modal){
      closeNotice();
    }

  });

  document.addEventListener('keydown',function(event){

    if(
      event.key==='Escape' &&
      modal.classList.contains('show')
    ){
      closeNotice();
    }

  });

})();
function tzDateISO(){const p=new Intl.DateTimeFormat('en-CA',{timeZone:'Africa/Dar_es_Salaam',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());const o=Object.fromEntries(p.map(x=>[x.type,x.value]));return `${o.year}-${o.month}-${o.day}`}
const TODAY_NOTIFICATIONS=dailyShuffle(DEMO_NOTIFICATIONS);
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

const dailyTaskKey = `tp_daily_tasks_${tzDateISO()}`;

function safeReadJSON(key, fallback){
  try{
    const raw = localStorage.getItem(key);

    if(!raw) return fallback;

    const parsed = JSON.parse(raw);

    return parsed ?? fallback;
  }catch(error){
    console.warn('TaskPoint Pro storage reset:', key, error);

    try{
      localStorage.removeItem(key);
    }catch(_){}

    return fallback;
  }
}

const storedDaily = safeReadJSON(dailyTaskKey, null);
const usedEver = safeReadJSON('tp_used_task_keys', []);

const usedSet = new Set(
  Array.isArray(usedEver) ? usedEver : []
);

let TASKS = [];

if(Array.isArray(storedDaily) && storedDaily.length){

  const savedTasks = storedDaily
    .map(key => taskPool.find(t => t.key === key))
    .filter(Boolean);

  if(savedTasks.length){
    TASKS = savedTasks;
  }
}

if(!TASKS.length){

  const ordered = seededOrder(taskPool, di + 1);

  let fresh = ordered.filter(t => !usedSet.has(t.key));

  // Ikiwa tasks zilizotumika zimefika mwisho,
  // anza mzunguko mpya bila kuvunja website.
  if(fresh.length < countToday){
    usedSet.clear();
    fresh = ordered;
  }

  TASKS = fresh.slice(0, countToday);

  try{
    localStorage.setItem(
      dailyTaskKey,
      JSON.stringify(TASKS.map(t => t.key))
    );

    TASKS.forEach(t => usedSet.add(t.key));

    localStorage.setItem(
      'tp_used_task_keys',
      JSON.stringify([...usedSet])
    );
  }catch(error){
    console.warn('TaskPoint Pro could not save task state:', error);
  }
}

const grid=$('#taskGrid');
const completedToday = new Set(
  safeReadJSON(`tp_completed_${tzDateISO()}`, [])
);

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
/* =========================================================
   TASKPOINT PRO — PROFESSIONAL WALLET / WITHDRAWAL V2
   Wallet data is persistent and independent of the daily task date.
   ========================================================= */

const WALLET_KEY='tp_wallet_v10';
const WITHDRAWAL_VERSION=2;
const WITHDRAW_REGISTRATION_URL=CONFIG.registrationUrl;

function normalizeWallet(raw){
  const w=(raw&&typeof raw==='object')?raw:{};

  return {
    balance:Math.max(0,Number(w.balance)||0),
    total:Math.max(0,Number(w.total)||0),
    withdrawn:Math.max(0,Number(w.withdrawn)||0),

    pendingWithdrawal:
      w.pendingWithdrawal&&typeof w.pendingWithdrawal==='object'
        ? w.pendingWithdrawal
        : null,

    withdrawalHistory:
      Array.isArray(w.withdrawalHistory)
        ? w.withdrawalHistory
        : [],

    version:WITHDRAWAL_VERSION
  };
}

function getWallet(){
  try{
    const raw=localStorage.getItem(WALLET_KEY);
    return normalizeWallet(raw?JSON.parse(raw):null);
  }catch(_){
    return normalizeWallet(null);
  }
}

function saveWallet(w){
  const safe=normalizeWallet(w);
  localStorage.setItem(WALLET_KEY,JSON.stringify(safe));
  updateWalletUI(safe);
}

function ensureWithdrawnCard(){
  const stats=$('.wallet-stats');
  if(!stats)return null;

  let card=$('#withdrawnStat');

  if(!card){
    card=document.createElement('div');
    card.id='withdrawnStat';
    card.className='wallet-stat withdrawn-stat';

    card.innerHTML=`
      <span>💸 WITHDRAWN</span>
      <strong id="withdrawnAmount">Tsh 0</strong>
      <small>Jumla ya kiasi kilichotolewa</small>
    `;

    stats.appendChild(card);
  }

  return card;
}

function updateWalletUI(w=getWallet()){
  const safe=normalizeWallet(w);

  $('#balanceAmount').textContent=`Tsh ${money(safe.balance)}`;
  $('#totalAmount').textContent=`Tsh ${money(safe.total)}`;

  ensureWithdrawnCard();

  const withdrawn=$('#withdrawnAmount');

  if(withdrawn){
    withdrawn.textContent=`Tsh ${money(safe.withdrawn)}`;
  }
}

function addEarnings(amount){
  const w=getWallet();
  const value=Math.max(0,Number(amount)||0);

  w.balance+=value;
  w.total+=value;

  saveWallet(w);
}

/* =========================================================
   WITHDRAWAL HISTORY — PROFESSIONAL MENU
   ========================================================= */

function ensureWithdrawalHistoryUI(){

  const stats=$('.wallet-stats');

  if(!stats)return;

  let wrapper=$('#withdrawalHistoryWrapper');

  if(wrapper)return;

  wrapper=document.createElement('div');
  wrapper.id='withdrawalHistoryWrapper';
  wrapper.className='withdrawal-history-wrapper';

  wrapper.innerHTML=`

    <button
      type="button"
      class="withdrawal-history-btn"
      id="withdrawalHistoryBtn"
    >
      <span class="wh-icon">📋</span>

      <span class="wh-content">
        <strong>WITHDRAWAL HISTORY</strong>
        <small>Angalia historia ya maombi yako ya kutoa pesa</small>
      </span>

      <span class="wh-arrow">›</span>

    </button>

  `;

  stats.parentNode.insertBefore(
    wrapper,
    stats.nextSibling
  );


  /* =======================================================
     HISTORY MODAL
     ======================================================= */

  const modal=document.createElement('div');

  modal.id='withdrawalHistoryModal';
  modal.className='withdrawal-history-modal';
  modal.setAttribute('aria-hidden','true');

  modal.innerHTML=`

    <div
      class="withdrawal-history-card"
      role="dialog"
      aria-modal="true"
      aria-labelledby="withdrawalHistoryTitle"
    >

      <button
        type="button"
        class="withdrawal-history-close"
        id="withdrawalHistoryClose"
        aria-label="Funga"
      >
        ×
      </button>

      <div class="withdrawal-history-header">

        <div class="withdrawal-history-header-icon">
          📋
        </div>

        <div>
          <h3 id="withdrawalHistoryTitle">
            WITHDRAWAL HISTORY
          </h3>

          <p>
            Historia ya maombi yako ya kutoa pesa
          </p>
        </div>

      </div>

      <div
        id="withdrawalHistoryList"
        class="withdrawal-history-list"
      ></div>

    </div>

  `;

  document.body.appendChild(modal);


  /* =======================================================
     OPEN HISTORY
     ======================================================= */

  $('#withdrawalHistoryBtn').onclick=()=>{

    renderWithdrawalHistory();

    modal.classList.add('show');

    modal.setAttribute(
      'aria-hidden',
      'false'
    );

  };


  /* =======================================================
     CLOSE HISTORY
     ======================================================= */

  $('#withdrawalHistoryClose').onclick=()=>{

    modal.classList.remove('show');

    modal.setAttribute(
      'aria-hidden',
      'true'
    );

  };


  modal.addEventListener('click',e=>{

    if(e.target===modal){

      modal.classList.remove('show');

      modal.setAttribute(
        'aria-hidden',
        'true'
      );

    }

  });

}


/* =========================================================
   RENDER WITHDRAWAL HISTORY
   ========================================================= */

function renderWithdrawalHistory(){

  const list=$('#withdrawalHistoryList');

  if(!list)return;

  const w=getWallet();

  const history=Array.isArray(w.withdrawalHistory)
    ? [...w.withdrawalHistory].reverse()
    : [];


  if(!history.length){

    list.innerHTML=`

      <div class="withdrawal-history-empty">

        <div class="empty-icon">
          📋
        </div>

        <strong>
          Hakuna Withdrawal History
        </strong>

        <span>
          Maombi yako ya kutoa pesa yataonekana hapa.
        </span>

      </div>

    `;

    return;

  }


  list.innerHTML=history.map(item=>{

    const amount=money(item.amount);

    const date=item.createdAt
      ? new Date(item.createdAt).toLocaleString(
          'sw-TZ',
          {
            day:'2-digit',
            month:'2-digit',
            year:'numeric',
            hour:'2-digit',
            minute:'2-digit'
          }
        )
      : '—';


    let statusText='OMBI LIMEPOKELEWA';

    if(item.status==='awaiting_activation'){
      statusText='INASUBIRI UWEZESHAJI';
    }

    if(item.status==='ready_for_payout'){
      statusText='IKO TAYARI KWA MALIPO';
    }

    if(item.status==='submitted'){
      statusText='MALIPO YAMEKAMILIKA✅';
    }


    return `

      <div class="withdrawal-history-item">

        <div class="wh-item-top">

          <div class="wh-item-money">
            💸 Tsh ${amount}
          </div>

          <span class="wh-status">
            ${statusText}
          </span>

        </div>

        <div class="wh-item-details">

          <span>
            📅 ${date}
          </span>

          ${
            item.phone
              ? `<span>📱 ${item.phone}</span>`
              : ''
          }

        </div>

      </div>

    `;

  }).join('');

}


/* =========================================================
   HISTORY DESIGN
   ========================================================= */

(function injectWithdrawalHistoryStyles(){

  if(document.getElementById('tpWithdrawalHistoryStyles'))
    return;

  const style=document.createElement('style');

  style.id='tpWithdrawalHistoryStyles';

  style.textContent=`

    .withdrawal-history-wrapper{
      width:100%;
      margin-top:14px;
    }

    .withdrawal-history-btn{
      width:100%;
      display:flex;
      align-items:center;
      gap:12px;
      padding:14px 16px;
      border:1px solid #d9e2eb;
      border-radius:15px;
      background:linear-gradient(135deg,#ffffff,#f7fafc);
      color:#102033;
      cursor:pointer;
      text-align:left;
      box-shadow:0 8px 22px rgba(0,0,0,.07);
    }

    .withdrawal-history-btn:hover{
      transform:translateY(-1px);
    }

    .wh-icon{
      width:40px;
      height:40px;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:12px;
      background:#eef5ff;
      font-size:20px;
      flex-shrink:0;
    }

    .wh-content{
      flex:1;
      min-width:0;
    }

    .wh-content strong{
      display:block;
      font-size:13px;
      font-weight:950;
      letter-spacing:.3px;
    }

    .wh-content small{
      display:block;
      margin-top:4px;
      color:#657487;
      font-size:10px;
      line-height:1.4;
    }

    .wh-arrow{
      font-size:28px;
      color:#657487;
      line-height:1;
    }


    /* HISTORY POPUP */

    .withdrawal-history-modal{
      position:fixed;
      inset:0;
      z-index:99999;
      display:none;
      align-items:center;
      justify-content:center;
      padding:20px;
      background:rgba(3,10,20,.72);
      backdrop-filter:blur(6px);
    }

    .withdrawal-history-modal.show{
      display:flex;
    }

    .withdrawal-history-card{
      position:relative;
      width:min(560px,100%);
      max-height:82vh;
      overflow:auto;
      border-radius:22px;
      padding:22px;
      background:#ffffff;
      box-shadow:0 30px 80px rgba(0,0,0,.35);
    }

    .withdrawal-history-close{
      position:absolute;
      top:12px;
      right:12px;
      width:38px;
      height:38px;
      border:0;
      border-radius:50%;
      background:#eef2f6;
      color:#172235;
      font-size:24px;
      cursor:pointer;
    }

    .withdrawal-history-header{
      display:flex;
      align-items:center;
      gap:12px;
      padding-right:45px;
      margin-bottom:18px;
    }

    .withdrawal-history-header-icon{
      width:48px;
      height:48px;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:14px;
      background:#eef5ff;
      font-size:23px;
    }

    .withdrawal-history-header h3{
      margin:0;
      color:#102033;
      font-size:16px;
      font-weight:950;
    }

    .withdrawal-history-header p{
      margin:4px 0 0;
      color:#687789;
      font-size:11px;
    }


    /* HISTORY ITEMS */

    .withdrawal-history-list{
      display:grid;
      gap:10px;
    }

    .withdrawal-history-item{
      padding:14px;
      border:1px solid #e1e7ee;
      border-radius:15px;
      background:#f9fbfd;
    }

    .wh-item-top{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
    }

    .wh-item-money{
      color:#102033;
      font-size:14px;
      font-weight:950;
    }

    .wh-status{
      padding:5px 8px;
      border-radius:8px;
      background:#fff4cf;
      color:#805d00;
      font-size:8px;
      font-weight:950;
      text-align:center;
    }

    .wh-item-details{
      display:flex;
      flex-wrap:wrap;
      gap:8px 14px;
      margin-top:9px;
      color:#69798a;
      font-size:10px;
    }


    /* EMPTY HISTORY */

    .withdrawal-history-empty{
      display:flex;
      flex-direction:column;
      align-items:center;
      text-align:center;
      padding:35px 20px;
      color:#667688;
    }

    .withdrawal-history-empty .empty-icon{
      font-size:35px;
      margin-bottom:10px;
    }

    .withdrawal-history-empty strong{
      color:#172235;
      font-size:14px;
    }

    .withdrawal-history-empty span{
      margin-top:5px;
      font-size:11px;
      line-height:1.5;
    }


    @media(max-width:760px){

      .withdrawal-history-card{
        width:100%;
        max-height:85vh;
        padding:18px;
        border-radius:20px;
      }

      .wh-item-top{
        align-items:flex-start;
        flex-direction:column;
        gap:8px;
      }

      .wh-status{
        align-self:flex-start;
      }

    }

  `;

  document.head.appendChild(style);

})();


/* Create History UI */

ensureWithdrawalHistoryUI();

/* =========================================================
   PROFESSIONAL WALLET DESIGN
   ========================================================= */

(function injectWalletStyles(){

  if(document.getElementById('tpWalletV2Styles'))return;

  const style=document.createElement('style');

  style.id='tpWalletV2Styles';

  style.textContent=`

    .wallet-stats{
      grid-template-columns:1fr 1fr!important;
    }

    .wallet-stat.withdrawn-stat{
      border-color:#f1c56b;
      background:linear-gradient(135deg,#fffaf0,#fffdf8);
    }

    .withdrawn-stat strong{
      color:#b56b00!important;
    }

    .withdraw-v2-box{
      margin-top:16px;
      padding:18px;
      border-radius:18px;
      background:linear-gradient(135deg,#071a2b,#0e2d46);
      color:#fff;
      border:1px solid rgba(255,216,77,.28);
      box-shadow:0 16px 35px rgba(7,26,43,.18);
    }

    .withdraw-v2-box .wv2-title{
      font-size:15px;
      font-weight:950;
      margin:0 0 7px;
    }

    .withdraw-v2-box .wv2-text{
      font-size:12px;
      line-height:1.65;
      color:#dbe8f4;
      margin:0;
    }

    .withdraw-v2-amount{
      display:inline-block;
      margin:10px 0 4px;
      padding:8px 12px;
      border-radius:10px;
      background:rgba(255,216,77,.12);
      color:#ffd84d;
      font-weight:950;
    }

    .withdraw-v2-actions{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:10px;
      margin-top:14px;
    }

    .withdraw-v2-actions button{
      border:0;
      border-radius:12px;
      padding:13px 10px;
      font-weight:950;
      font-size:11px;
      cursor:pointer;
    }

    .withdraw-v2-paid{
      background:#16d96f;
      color:#062016;
    }

    .withdraw-v2-unpaid{
      background:#ffd84d;
      color:#271f00;
    }

    .withdraw-v2-form{
      margin-top:14px;
      padding-top:14px;
      border-top:1px solid rgba(255,255,255,.12);
    }

    .withdraw-v2-form label{
      display:block;
      color:#dbe8f4;
      font-size:11px;
      font-weight:900;
      margin-bottom:7px;
    }

    .withdraw-v2-form input{
      width:100%;
      box-sizing:border-box;
      padding:13px;
      border-radius:11px;
      border:1px solid #cbd7e2;
      font:800 15px Inter,Arial;
      color:#102033;
      outline:none;
    }

    .withdraw-v2-submit{
      width:100%;
      margin-top:10px;
      border:0;
      border-radius:12px;
      padding:13px;
      background:#16d96f;
      color:#062016;
      font-weight:950;
      cursor:pointer;
    }

    .withdraw-v2-status{
      margin-top:11px;
      font-size:11px;
      line-height:1.6;
      color:#dbe8f4;
    }

    @media(max-width:760px){

      .wallet-stats{
        grid-template-columns:1fr 1fr!important;
      }

      .withdrawn-stat{
        grid-column:1/-1;
      }

      .withdraw-v2-actions{
        grid-template-columns:1fr;
      }

    }

  `;

  document.head.appendChild(style);

})();


/* =========================================================
   WALLET INITIALIZATION
   ========================================================= */

updateWalletUI();

const withdrawModal=$('#withdrawModal');
const withdrawInput=$('#withdrawAmount');
const withdrawMessage=$('#withdrawMessage');

const withdrawStrong=withdrawMessage?.querySelector('strong');
const withdrawSpan=withdrawMessage?.querySelector('span');

function clearWithdrawMessage(){

  withdrawMessage.classList.remove('show');

  if(withdrawStrong){
    withdrawStrong.textContent='';
  }

  if(withdrawSpan){
    withdrawSpan.textContent='';
  }

}


/* =========================================================
   PENDING WITHDRAWAL
   ========================================================= */

function savePendingStatus(status,extra={}){

  const w=getWallet();

  if(!w.pendingWithdrawal)return;

  w.pendingWithdrawal={
    ...w.pendingWithdrawal,
    status,
    ...extra
  };

  saveWallet(w);

}


/* =========================================================
   PHONE / PAYOUT FORM
   ========================================================= */

function showPayoutForm(){

  const pending=getWallet().pendingWithdrawal;

  if(!pending)return;

  savePendingStatus('ready_for_payout');

  const box=$('#withdrawV2Dynamic');

  if(!box)return;

  box.innerHTML=`

    <div class="withdraw-v2-form">

      <label for="withdrawPhoneV2">
        Namba ya simu ya kupokea pesa
      </label>

      <input
        id="withdrawPhoneV2"
        type="tel"
        inputmode="numeric"
        maxlength="15"
        placeholder="Mfano: 07XXXXXXXX"
      >

      <button
        type="button"
        class="withdraw-v2-submit"
        id="withdrawFinalBtn"
      >
        WASILISHA OMBI LA MALIPO →
      </button>

      <div
        class="withdraw-v2-status"
        id="withdrawV2Status"
      >
        Kiasi cha ombi:
        <b>Tsh ${money(pending.amount)}</b>
      </div>

    </div>

  `;

  const phoneInput=$('#withdrawPhoneV2');

$('#withdrawFinalBtn').onclick=()=>{

  const phone=phoneInput.value.trim();

  if(!/^0\d{9}$/.test(phone)){

    $('#withdrawV2Status').textContent=
      '⚠️ Weka namba sahihi ya simu yenye tarakimu 10, mfano 07XXXXXXXX.';

    phoneInput.focus();

    return;
  }

  const w=getWallet();

  const pending=w.pendingWithdrawal;

  if(!pending || !pending.amount){

    $('#withdrawV2Status').textContent=
      '⚠️ Hakuna ombi la withdrawal linalopatikana.';

    return;
  }

  const amount=Number(pending.amount)||0;

  const submittedAt=new Date().toISOString();


  /* SAVE WITHDRAWAL TO HISTORY */

  w.withdrawalHistory.push({

    id:'WD-'+Date.now(),

    amount:amount,

    phone:phone,

    status:'submitted',

    createdAt:pending.createdAt || submittedAt,

    submittedAt:submittedAt

  });


  /* CLEAR ACTIVE WITHDRAWAL */

  w.pendingWithdrawal=null;


  /* SAVE WALLET */

  saveWallet(w);


  /* SHOW FINAL POPUP */

  showFinalWithdrawalPopup(
    amount,
    phone,
    submittedAt
  );

};

}


/* =========================================================
   WITHDRAWAL CHOICE
   ========================================================= */

function showWithdrawalChoice(amount){

  withdrawMessage.classList.add('show');

  withdrawMessage.innerHTML=`

    <div class="withdraw-v2-box">

      <p class="wv2-title">
        🎉 HONGERA! OMBI LA WITHDRAWAL
      </p>

      <span class="withdraw-v2-amount">
        Tsh ${money(amount)}
      </span>

      <p class="wv2-text">

        Unataka kutoa kiasi hiki.
        Kiasi kimehifadhiwa kwenye ombi lako la withdrawal.
        Ili kuendelea, jaza taarifa zako na uwezeshe
        account yako kwa mtaji wa
        <b>Tsh ${money(CONFIG.activationFee)}</b>.

      </p>

      <div class="withdraw-v2-actions">

        <button
          type="button"
          class="withdraw-v2-paid"
          id="withdrawPaidBtn"
        >
          ✓ NIMESHALIPIA
        </button>

        <button
          type="button"
          class="withdraw-v2-unpaid"
          id="withdrawUnpaidBtn"
        >
          SIJALIPIA
        </button>

      </div>

      <div id="withdrawV2Dynamic"></div>

    </div>

  `;


  /* NIMESHALIPIA */

  $('#withdrawPaidBtn').onclick=showPayoutForm;


  /* SIJALIPIA */

  $('#withdrawUnpaidBtn').onclick=()=>{

    savePendingStatus('awaiting_activation');

    window.open(
      WITHDRAW_REGISTRATION_URL,
      '_blank',
      'noopener'
    );

  };

}
/* =========================================================
   FINAL WITHDRAWAL SUCCESS POPUP
   ========================================================= */

function showFinalWithdrawalPopup(amount,phone,submittedAt){

  let popup=$('#tpFinalWithdrawalPopup');

  if(!popup){

    popup=document.createElement('div');

    popup.id='tpFinalWithdrawalPopup';

    popup.className='tp-final-withdrawal-popup';

    popup.innerHTML=`

      <div
        class="tp-final-withdrawal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tpFinalWithdrawalTitle"
      >

        <button
          type="button"
          class="tp-final-withdrawal-close"
          id="tpFinalWithdrawalClose"
          aria-label="Funga"
        >
          ×
        </button>

        <div class="tp-final-withdrawal-success">
          ✓
        </div>

        <h2 id="tpFinalWithdrawalTitle">
          HONGERA! 🎉
        </h2>

        <p class="tp-final-withdrawal-main">
          OMBI LA WITHDRAWAL LIMEPOKELEWA
        </p>

        <div class="tp-final-withdrawal-amount">
          Tsh ${money(amount)}
        </div>

        <div class="tp-final-withdrawal-info">

          <div>
            <span>Kiasi ulicachoomba</span>
            <strong>Tsh ${money(amount)}</strong>
          </div>

          <div>
            <span>Namba ya kupokea</span>
            <strong>${phone}</strong>
          </div>

        </div>

        <p class="tp-final-withdrawal-note">
          ✅ Taarifa za ombi lako zimehifadhiwa kwenye
          <b>WITHDRAWAL HISTORY</b>.
        </p>

        <button
          type="button"
          class="tp-final-withdrawal-done"
          id="tpFinalWithdrawalDone"
        >
          SAWA, NIMEELEWA
        </button>

      </div>

    `;

    document.body.appendChild(popup);

    const closePopup=()=>{

      popup.classList.remove('show');

      popup.setAttribute(
        'aria-hidden',
        'true'
      );

    };

    $('#tpFinalWithdrawalClose').onclick=closePopup;

    $('#tpFinalWithdrawalDone').onclick=closePopup;

    popup.addEventListener('click',e=>{

      if(e.target===popup){
        closePopup();
      }

    });

  }

  popup.classList.add('show');

  popup.setAttribute(
    'aria-hidden',
    'false'
  );

}

/* =========================================================
   FINAL WITHDRAWAL POPUP DESIGN
   ========================================================= */

(function injectFinalWithdrawalPopupStyles(){

  if(document.getElementById('tpFinalWithdrawalStyles'))
    return;

  const style=document.createElement('style');

  style.id='tpFinalWithdrawalStyles';

  style.textContent=`

    .tp-final-withdrawal-popup{
      position:fixed;
      inset:0;
      z-index:100000;
      display:none;
      align-items:center;
      justify-content:center;
      padding:20px;
      background:rgba(2,9,18,.78);
      backdrop-filter:blur(8px);
    }

    .tp-final-withdrawal-popup.show{
      display:flex;
      animation:tpPopupFade .22s ease;
    }

    .tp-final-withdrawal-card{
      position:relative;
      width:min(520px,100%);
      max-height:88vh;
      overflow:auto;
      padding:30px 24px 24px;
      border-radius:26px;
      background:#fff;
      text-align:center;
      box-shadow:0 35px 100px rgba(0,0,0,.45);
      animation:tpPopupScale .25s ease;
    }

    .tp-final-withdrawal-close{
      position:absolute;
      top:13px;
      right:13px;
      width:40px;
      height:40px;
      border:0;
      border-radius:50%;
      background:#eef2f6;
      color:#172235;
      font-size:26px;
      line-height:1;
      cursor:pointer;
    }

    .tp-final-withdrawal-success{
      width:68px;
      height:68px;
      margin:0 auto 14px;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:50%;
      background:#16d96f;
      color:#062016;
      font-size:34px;
      font-weight:950;
      box-shadow:0 12px 30px rgba(22,217,111,.25);
    }

    .tp-final-withdrawal-card h2{
      margin:0;
      color:#102033;
      font-size:28px;
      font-weight:950;
    }

    .tp-final-withdrawal-main{
      margin:7px 0 16px;
      color:#657487;
      font-size:12px;
      font-weight:900;
      letter-spacing:.5px;
    }

    .tp-final-withdrawal-amount{
      padding:15px;
      border-radius:16px;
      background:linear-gradient(135deg,#071a2b,#0e2d46);
      color:#ffd84d;
      font-size:25px;
      font-weight:950;
      margin-bottom:15px;
    }

    .tp-final-withdrawal-info{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:10px;
      text-align:left;
    }

    .tp-final-withdrawal-info div{
      padding:12px;
      border-radius:13px;
      background:#f5f8fb;
      border:1px solid #e2e8ef;
    }

    .tp-final-withdrawal-info span{
      display:block;
      color:#718092;
      font-size:9px;
      font-weight:800;
      margin-bottom:5px;
    }

    .tp-final-withdrawal-info strong{
      display:block;
      color:#172235;
      font-size:12px;
      font-weight:950;
    }

    .tp-final-withdrawal-note{
      margin:16px 0;
      padding:12px;
      border-radius:12px;
      background:#f0fff6;
      color:#315b45;
      font-size:10px;
      line-height:1.55;
    }

    .tp-final-withdrawal-done{
      width:100%;
      padding:14px;
      border:0;
      border-radius:13px;
      background:#16d96f;
      color:#062016;
      font-size:12px;
      font-weight:950;
      cursor:pointer;
    }

    @keyframes tpPopupFade{
      from{opacity:0}
      to{opacity:1}
    }

    @keyframes tpPopupScale{
      from{
        opacity:0;
        transform:scale(.92) translateY(10px);
      }

      to{
        opacity:1;
        transform:scale(1) translateY(0);
      }
    }

    @media(max-width:600px){

      .tp-final-withdrawal-card{
        padding:27px 17px 18px;
        border-radius:22px;
      }

      .tp-final-withdrawal-card h2{
        font-size:24px;
      }

      .tp-final-withdrawal-amount{
        font-size:22px;
      }

      .tp-final-withdrawal-info{
        grid-template-columns:1fr;
      }

    }

  `;

  document.head.appendChild(style);

})();
/* =========================================================
   RESUME PREVIOUS WITHDRAWAL
   ========================================================= */

function resumePendingWithdrawal(){

  const w=getWallet();

  if(!w.pendingWithdrawal)return false;

  withdrawInput.value='';

  withdrawModal.classList.add('show');

  withdrawModal.setAttribute(
    'aria-hidden',
    'false'
  );

  showWithdrawalChoice(
    Number(w.pendingWithdrawal.amount)||0
  );

  return true;

}


/* =========================================================
   OPEN WITHDRAW
   ========================================================= */

$('#withdrawBtn').onclick=()=>{

  if(resumePendingWithdrawal())return;

  withdrawModal.classList.add('show');

  withdrawModal.setAttribute(
    'aria-hidden',
    'false'
  );

  withdrawInput.value='';

  clearWithdrawMessage();

  setTimeout(
    ()=>withdrawInput.focus(),
    50
  );

};
/* =========================================================
   COMPLETION WITHDRAW BUTTON
   Uses the exact same withdrawal flow as Dashboard.
   ========================================================= */

const completionWithdrawBtn=$('#completionWithdrawBtn');

if(completionWithdrawBtn){

  completionWithdrawBtn.onclick=()=>{

    $('#withdrawBtn').click();

  };

   }

/* =========================================================
   CLOSE WITHDRAW
   ========================================================= */

$('#withdrawClose').onclick=()=>{

  withdrawModal.classList.remove('show');

  withdrawModal.setAttribute(
    'aria-hidden',
    'true'
  );

};

withdrawModal.addEventListener('click',e=>{

  if(e.target===withdrawModal){

    withdrawModal.classList.remove('show');

    withdrawModal.setAttribute(
      'aria-hidden',
      'true'
    );

  }

});


/* =========================================================
   SUBMIT WITHDRAWAL
   ========================================================= */

$('#withdrawSubmit').onclick=()=>{

  const amount=
    Math.floor(
      Number(withdrawInput.value)||0
    );

  const w=getWallet();


  /* INVALID AMOUNT */

  if(!amount || amount<=0){

    withdrawMessage.classList.add('show');

    if(withdrawStrong){
      withdrawStrong.textContent=
        '⚠️ Weka kiasi sahihi cha kutoa';
    }

    if(withdrawSpan){
      withdrawSpan.textContent=
        'Andika kiasi cha fedha unachotaka kutoa kisha bonyeza WITHDRAW tena.';
    }

    return;

  }


  /* BALANCE NOT ENOUGH */

  if(amount>w.balance){

    withdrawMessage.classList.add('show');

    if(withdrawStrong){
      withdrawStrong.textContent=
        '⚠️ Balance haitoshi';
    }

    if(withdrawSpan){
      withdrawSpan.textContent=
        `Balance yako ni Tsh ${money(w.balance)}. Weka kiasi kisichozidi Balance.`;
    }

    return;

  }


  /* REMOVE FROM BALANCE */

  w.balance-=amount;


  /* ADD TO WITHDRAWN */

  w.withdrawn+=amount;


  /* SAVE WITHDRAWAL REQUEST */

  w.pendingWithdrawal={
    amount,
    status:'awaiting_activation',
    createdAt:new Date().toISOString()
  };


  saveWallet(w);


  /* SHOW SUCCESS / CHOICE */

  showWithdrawalChoice(amount);

};

let audio;function notificationSound(index=0){try{audio||=new(window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();const now=audio.currentTime;const freqs=[660,880,1047,740,988];const f=freqs[index%freqs.length];const o=audio.createOscillator(),g=audio.createGain();o.type='sine';o.frequency.setValueAtTime(f,now);o.frequency.exponentialRampToValueAtTime(f*1.35,now+.10);g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(.055,now+.025);g.gain.exponentialRampToValueAtTime(.0001,now+.32);o.connect(g);g.connect(audio.destination);o.start(now);o.stop(now+.34)}catch(_){} }
// Demo notifications are clearly marked as demo data. Replace with verified backend records before production.
const stack=$('#toastStack');let ni=0;const toastClasses=['toast-violet','toast-cyan','toast-orange','toast-pink','toast-green'];function showNotification(){const index=ni++%TODAY_NOTIFICATIONS.length;const [name,amt]=TODAY_NOTIFICATIONS[index];const t=document.createElement('div');t.className=`evidence-toast ${toastClasses[index%toastClasses.length]}`;t.innerHTML=`<div class="toast-head"><b>TAARIFA MPYA</b><span class="toast-time">6s</span></div><span>${name} — Nimelipwa Tsh ${amt}/=</span><small>Pesa Zinatoka Muda Wote; ni malipo halali.</small><div class="toast-progress"><i></i></div>`;stack.appendChild(t);notificationSound(index);let left=6;const tick=setInterval(()=>{left--;const el=t.querySelector('.toast-time');if(el)el.textContent=`${Math.max(left,0)}s`;if(left<=0)clearInterval(tick)},1000);setTimeout(()=>{clearInterval(tick);t.remove();showNotification()},6000)}setTimeout(showNotification,2200);
const tg=$('#testimonialGrid');dailyShuffle(COMMUNITY).slice(0,6).forEach((t,i)=>{const e=document.createElement('article');e.className='testimonial';e.innerHTML=`<div class="person"><div class="avatar avatar-${i%4}" aria-hidden="true">${t[0]}</div><div><b>${t[1]}</b><span class="country">${t[2]}</span><div class="stars" aria-label="5 stars">★★★★★</div></div></div><p>“${t[3]}”</p>`;tg.appendChild(e)});
$('#menuBtn').onclick=()=>$('#drawer').classList.add('open');$('#drawerClose').onclick=()=>$('#drawer').classList.remove('open');$$('.drawer a').forEach(a=>a.onclick=()=>$('#drawer').classList.remove('open'));
const cm=$('#certModal'),cv=$('#certViewer');$$('[data-cert]').forEach(b=>b.onclick=()=>{cv.src=b.dataset.cert;cm.classList.add('show')});$('#certModalClose').onclick=()=>cm.classList.remove('show');cm.addEventListener('click',e=>{if(e.target===cm)cm.classList.remove('show')});
/* =========================================================
   TASKPOINT PRO — APP INSTALL SYSTEM
   ========================================================= */

let deferredInstallPrompt = null;
let installPromptReady = null;

window.addEventListener("beforeinstallprompt", (event) => {

  event.preventDefault();

  deferredInstallPrompt = event;

  if (installPromptReady) {
    installPromptReady.resolve(event);
    installPromptReady = null;
  }

});

function waitForInstallPrompt(timeout = 2500) {

  if (deferredInstallPrompt) {
    return Promise.resolve(deferredInstallPrompt);
  }

  return new Promise((resolve) => {

    installPromptReady = {
      resolve: resolve
    };

    setTimeout(() => {

      if (installPromptReady) {
        installPromptReady = null;
        resolve(null);
      }

    }, timeout);

  });

}

async function installTaskPointApp() {

  /* Kama tayari ipo kwenye App */
  if (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  ) {

    showAppMessage(
      "TASKPOINT PRO APP",
      "App tayari imewekwa kwenye simu yako. ✅"
    );

    return;
  }

  /* Subiri install prompt ikiwa bado haijafika */
  const promptEvent = await waitForInstallPrompt();

  if (promptEvent) {

    promptEvent.prompt();

    const result = await promptEvent.userChoice;

    if (result.outcome === "accepted") {

      deferredInstallPrompt = null;

    }

    return;
  }

  /* Ikiwa browser hairuhusu install */
  showAppMessage(
    "PAKUA APP",
    "Fungua TaskPointPro.com kwa Chrome kisha bonyeza PAKUA APP."
  );

}

function showAppMessage(title, message) {

  const old = document.getElementById("tpAppMessage");

  if (old) old.remove();

  const box = document.createElement("div");

  box.id = "tpAppMessage";

  box.innerHTML = `
    <div class="tp-app-message-box">

      <button
        class="tp-app-message-close"
        onclick="this.parentElement.parentElement.remove()">
        ×
      </button>

      <b>${title}</b>

      <span>${message}</span>

    </div>
  `;

  document.body.appendChild(box);

}

/* Connect Pakua App buttons */
document.addEventListener("click", (event) => {

  const btn = event.target.closest("[data-app-install]");

  if(!btn) return;

  event.preventDefault();

  installTaskPointApp();

});


/* =========================================================
   APP UPDATE DETECTION
   ========================================================= */

if("serviceWorker" in navigator){

  window.addEventListener("load", async () => {

    try{

      const registration =
        await navigator.serviceWorker.register("/service-worker.js");

      console.log("TaskPoint Pro Service Worker registered");

      /* Check for new version */
      registration.update();

      registration.addEventListener("updatefound", () => {

        const newWorker = registration.installing;

        if(!newWorker) return;

        newWorker.addEventListener("statechange", () => {

          if(
            newWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ){

            showUpdateMessage();

          }

        });

      });

    }catch(error){

      console.error(
        "TaskPoint Pro Service Worker error:",
        error
      );

    }

  });

}


/* Update notification */
function showUpdateMessage(){

  if(document.getElementById("tpUpdateBox")) return;

  const box = document.createElement("div");

  box.id = "tpUpdateBox";

  box.innerHTML = `
    <div class="tp-update-box">

      <div class="tp-update-icon">↻</div>

      <div class="tp-update-content">

        <strong>UPDATE MPYA INAPATIKANA</strong>

        <span>
          Toleo jipya la TaskPoint Pro limepatikana.
          Sasisha app ili upate maboresho mapya.
        </span>

        <div class="tp-update-actions">

          <button
            type="button"
            onclick="tpUpdateNow()"
            class="tp-update-btn">
            SASISHA SASA
          </button>

          <button
            type="button"
            onclick="document.getElementById('tpUpdateBox').remove()"
            class="tp-update-later">
            BAADAYE
          </button>

        </div>

      </div>

    </div>
  `;

  document.body.appendChild(box);
}


/* Reload to activate new version */
function tpUpdateNow(){

  if(navigator.serviceWorker.controller){

    navigator.serviceWorker.controller.postMessage({
      type:"SKIP_WAITING"
    });

  }

  setTimeout(() => {
    window.location.reload();
  },300);

}

/* =========================================================
   TASKPOINT PRO — UPDATE DETECTOR V4
   ========================================================= */

if ("serviceWorker" in navigator) {

  navigator.serviceWorker.addEventListener("message", event => {

    if (
      event.data &&
      event.data.type === "TASKPOINT_UPDATE"
    ) {

      showUpdateMessage();

    }

  });

  navigator.serviceWorker.addEventListener(
    "controllerchange",
    () => {

      if (!window.__tpReloading) {

        window.__tpReloading = true;

        window.location.reload();

      }

    }
  );

    }
/* =========================================================
   TASKPOINT PRO — SMS MESSAGE SYSTEM
   ========================================================= */

(function(){
  function initTaskPointSMS(){
    const openBtn = document.getElementById('tpSmsOpen');
    const closeBtn = document.getElementById('tpSmsClose');
    const overlay = document.getElementById('tpSmsOverlay');
    const messageBox = document.getElementById('tpSmsMessage');
    const sendBtn = document.getElementById('tpSmsSend');
    const count = document.getElementById('tpSmsCount');

    if(!openBtn || !closeBtn || !overlay || !messageBox || !sendBtn) return;

    function openSMS(){
      overlay.classList.add('is-open');

      setTimeout(() => {
        messageBox.focus();
      }, 120);
    }

    function closeSMS(){
      overlay.classList.remove('is-open');
    }

    openBtn.addEventListener('click', openSMS);
    closeBtn.addEventListener('click', closeSMS);

    overlay.addEventListener('click', function(e){
      if(e.target === overlay) closeSMS();
    });

    messageBox.addEventListener('input', function(){
      if(count){
        count.textContent = messageBox.value.length;
      }
    });

    sendBtn.addEventListener('click', function(){
      const message = messageBox.value.trim();

      if(!message){
        messageBox.focus();
        messageBox.setCustomValidity('Tafadhali andika ujumbe wako kwanza.');
        messageBox.reportValidity();
        messageBox.setCustomValidity('');
        return;
      }

      const smsNumber =
        (typeof CONFIG !== 'undefined' && CONFIG.smsNumber)
          ? CONFIG.smsNumber
          : '0764540225';

      const smsUrl =
        'sms:' + smsNumber + '?body=' + encodeURIComponent(message);

      window.location.href = smsUrl;
    });

    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && overlay.classList.contains('is-open')){
        closeSMS();
      }
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initTaskPointSMS);
  }else{
    initTaskPointSMS();
  }
})();
