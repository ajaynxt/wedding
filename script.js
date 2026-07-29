const $=(s,p=document)=>p.querySelector(s),$$=(s,p=document)=>[...p.querySelectorAll(s)];const WA='919929562585';
const images={
coupleHero:'https://images.pexels.com/photos/32379184/pexels-photo-32379184.jpeg?auto=compress&cs=tinysrgb&w=2000',
coupleBokeh:'https://images.pexels.com/photos/33144628/pexels-photo-33144628.jpeg?auto=compress&cs=tinysrgb&w=2000',
coupleRed:'https://images.pexels.com/photos/33088121/pexels-photo-33088121.jpeg?auto=compress&cs=tinysrgb&w=2000',
coupleStage:'https://images.pexels.com/photos/24334945/pexels-photo-24334945.jpeg?auto=compress&cs=tinysrgb&w=2000',
ceremony:'https://images.pexels.com/photos/32325264/pexels-photo-32325264.jpeg?auto=compress&cs=tinysrgb&w=2000',
haldi:'https://images.pexels.com/photos/32325926/pexels-photo-32325926.jpeg?auto=compress&cs=tinysrgb&w=2000',
haldiCouple:'https://images.pexels.com/photos/32151004/pexels-photo-32151004.jpeg?auto=compress&cs=tinysrgb&w=2000',
mehendi:'https://images.pexels.com/photos/33088135/pexels-photo-33088135.jpeg?auto=compress&cs=tinysrgb&w=1600',
bride:'https://images.pexels.com/photos/32107209/pexels-photo-32107209.jpeg?auto=compress&cs=tinysrgb&w=1800',
brideSolo:'https://images.pexels.com/photos/27212066/pexels-photo-27212066.jpeg?auto=compress&cs=tinysrgb&w=1800',
palace:'https://images.pexels.com/photos/33485965/pexels-photo-33485965.jpeg?auto=compress&cs=tinysrgb&w=2000',
courtyard:'https://images.pexels.com/photos/33361417/pexels-photo-33361417.jpeg?auto=compress&cs=tinysrgb&w=2000',
portrait:'https://images.pexels.com/photos/36248920/pexels-photo-36248920.jpeg?auto=compress&cs=tinysrgb&w=1800',
coupleOutdoor:'https://images.pexels.com/photos/37850754/pexels-photo-37850754.jpeg?auto=compress&cs=tinysrgb&w=1800',
mehendiDetail:'https://images.pexels.com/photos/33469015/pexels-photo-33469015.jpeg?auto=compress&cs=tinysrgb&w=1500'
};
const colors=[{name:'Antique Gold',hex:'#be8a58'},{name:'Deep Maroon',hex:'#9f3045'},{name:'Emerald',hex:'#16715e'},{name:'Royal Blue',hex:'#315fbd'},{name:'Dusty Rose',hex:'#b46c78'},{name:'Plum',hex:'#754d84'},{name:'Saffron',hex:'#d98926'},{name:'Ivory Grey',hex:'#918681'}];
const texts=[
{name:'Cinematic',k:'Wedding Photography · Films · Planning',t:'Your Wedding, Remembered Like a Film.',p:'A luxury Indian wedding experience built around real emotion, thoughtful planning and imagery that still feels alive years later.'},
{name:'Planner',k:'Planning · Production · Hospitality',t:'A Celebration Designed Around Your People.',p:'From venue and vendors to guest movement and event flow, every detail works toward one coherent wedding experience.'},
{name:'Editorial',k:'Portraits · Fashion · Architecture',t:'Wedding Imagery With an Editorial Point of View.',p:'Elegant portrait direction, thoughtful composition and a visual language shaped around the couple.'},
{name:'Emotional',k:'Candid Stories · Family · Rituals',t:'The Small Moments Become the Whole Story.',p:'Emotion-led photography and films that preserve family, rituals and the energy between planned moments.'},
{name:'Destination',k:'Destination Weddings Across India',t:'Take the Celebration Somewhere Unforgettable.',p:'Venue, guest logistics, production and storytelling brought together for a destination wedding weekend.'},
{name:'Modern',k:'Modern Indian Weddings',t:'Tradition, Framed for the Present.',p:'A refined mix of ceremonies, contemporary design, social content and timeless visual storytelling.'},
{name:'Studio',k:'Photo · Film · Album Studio',t:'One Studio for Every Version of the Memory.',p:'Photography, films, reels, albums and delivery organised through one accountable creative team.'}
];
const heroStyles=[
{name:'Royal Wedding Cinema',className:'hero-01',photo:images.coupleHero,color:'#be8a58',text:0,card:['Featured Celebration','A Royal Udaipur Wedding','Three days · Palace venue · Photography, films and guest experience']},
{name:'Editorial Couple',className:'hero-02',photo:images.coupleBokeh,color:'#315fbd',text:2,card:['Editorial Story','Midnight Portraits','Ceremony · Couple session · Reception film']},
{name:'Red Ceremony',className:'hero-03',photo:images.coupleRed,color:'#9f3045',text:3,card:['Ceremony Story','The Sacred Vows','Rituals · Family · Full ceremony edit']},
{name:'Ivory Minimal',className:'hero-04',photo:images.coupleStage,color:'#a6784e',text:2,card:['Classic Celebration','The Ivory Wedding','Portraits · Ceremony · Signature album']},
{name:'Haldi Celebration',className:'hero-05',photo:images.haldi,color:'#d98926',text:3,card:['Pre-Wedding Event','The Haldi Edit','Candid coverage · Family · Social reels']},
{name:'Modern Wedding Studio',className:'hero-06',photo:images.portrait,color:'#754d84',text:6,card:['Studio Collection','The Complete Story','Photo · Film · Album · Reels']},
{name:'Destination Palace',className:'hero-07',photo:images.palace,color:'#be8a58',text:4,card:['Destination Wedding','The Palace Weekend','Venue · Planning · Guests · Visual story']},
{name:'Bride Editorial',className:'hero-08',photo:images.bride,color:'#b46c78',text:2,card:['Bridal Portraits','The Bridal Study','Jewellery · Attire · Beauty · Emotion']},
{name:'Mehendi Detail',className:'hero-09',photo:images.mehendi,color:'#16715e',text:5,card:['Pre-Wedding Story','The Mehendi Chapter','Details · Candid frames · Short-form film']},
{name:'Palace Courtyard',className:'hero-10',photo:images.courtyard,color:'#c38b50',text:1,card:['Full-Service Planning','The Courtyard Celebration','Design · Production · Hospitality · Photography']}
];
const stories=[
{label:'Royal Wedding',title:'Palace Vows',text:'A multi-day destination story across welcome, mehendi, sangeet and ceremony.',image:images.palace},
{label:'Ceremony',title:'Sacred Rituals',text:'Family, vows, details and the energy around the mandap.',image:images.ceremony},
{label:'Portraits',title:'After the Vows',text:'Editorial couple portraits with a timeless finish.',image:images.coupleBokeh},
{label:'Haldi',title:'Colour & Chaos',text:'Fast-moving candid moments and social-ready reels.',image:images.haldi},
{label:'Bride',title:'The Bridal Study',text:'Attire, jewellery, beauty and quiet moments before the ceremony.',image:images.brideSolo},
{label:'Mehendi',title:'Intricate Details',text:'Hands, jewellery, colour and family interactions.',image:images.mehendiDetail}
];
const films=[
{name:'Highlight Film',title:'The Palace Vows',duration:'08:42 minutes',image:images.palace},
{name:'Wedding Teaser',title:'A Weekend in Colour',duration:'01:18 minutes',image:images.haldi},
{name:'Ceremony Edit',title:'The Sacred Vows',duration:'42:10 minutes',image:images.ceremony},
{name:'Vertical Reels',title:'Wedding Week in Motion',duration:'06 social edits',image:images.coupleBokeh}
];
const albumSpreads=[
{title:'The Ceremony Edit',text:'A narrative album combining rituals, family portraits, couple frames and celebration details.',left:images.ceremony,right:images.coupleHero},
{title:'The Portrait Book',text:'A clean editorial sequence focused on couple portraits, bridal fashion and architectural frames.',left:images.bride,right:images.coupleBokeh},
{title:'The Destination Story',text:'Venue, guest experience, décor, events and celebration atmosphere across the full wedding weekend.',left:images.palace,right:images.courtyard},
{title:'The Colour Chapter',text:'Haldi, mehendi, candid family frames and vivid pre-wedding details.',left:images.haldi,right:images.mehendi}
];
let state={style:0,film:0,album:0,colorLocked:false,textLocked:false,fontLocked:false,auto:true},timer;
function rgb(hex){hex=hex.replace('#','');const n=parseInt(hex,16);return[(n>>16)&255,(n>>8)&255,n&255].join(',')}
function setColor(hex){document.documentElement.style.setProperty('--accent',hex);document.documentElement.style.setProperty('--accent-rgb',rgb(hex));$('#colorPicker').value=hex}
function setText(i){const x=texts[i];$('#heroKicker').textContent=x.k;$('#heroTitle').textContent=x.t;$('#heroText').textContent=x.p;$$('#textList button').forEach((b,n)=>b.classList.toggle('active',n===i))}
function setStyle(i,user=false){state.style=(i+heroStyles.length)%heroStyles.length;const x=heroStyles[state.style];const hero=$('.hero');hero.className=`hero ${x.className}`;$('#heroPhoto').style.backgroundImage=`url("${x.photo}")`;if(!state.colorLocked)setColor(x.color);if(!state.textLocked)setText(x.text);$('#heroCardLabel').textContent=x.card[0];$('#heroCardTitle').textContent=x.card[1];$('#heroCardText').textContent=x.card[2];$('#styleName').textContent=`${String(state.style+1).padStart(2,'0')} · ${x.name}`;$$('#styleDots button').forEach((b,n)=>b.classList.toggle('active',n===state.style));$$('#styleList button').forEach((b,n)=>b.classList.toggle('active',n===state.style));if(user)restartAuto()}
function restartAuto(){clearInterval(timer);if(state.auto)timer=setInterval(()=>setStyle(state.style+1),60000)}
heroStyles.forEach((x,i)=>{const d=document.createElement('button');d.textContent=String(i+1).padStart(2,'0');d.onclick=()=>setStyle(i,true);$('#styleDots').appendChild(d);const b=document.createElement('button');b.textContent=x.name;b.onclick=()=>setStyle(i,true);$('#styleList').appendChild(b)});
colors.forEach(c=>{const b=document.createElement('button');b.style.background=c.hex;b.title=c.name;b.setAttribute('aria-label',c.name);b.onclick=()=>setColor(c.hex);$('#colorList').appendChild(b)});
texts.forEach((x,i)=>{const b=document.createElement('button');b.textContent=x.name;b.onclick=()=>setText(i);$('#textList').appendChild(b)});
stories.forEach(s=>{const b=document.createElement('button');b.className='story-card reveal visible';b.innerHTML=`<img src="${s.image}" alt="${s.title}" loading="lazy"><div><small>${s.label}</small><h3>${s.title}</h3><p>${s.text}</p></div>`;b.onclick=()=>openMedia(s.title,s.image);$('#storiesGrid').appendChild(b)});
films.forEach((f,i)=>{const b=document.createElement('button');b.textContent=f.name;b.onclick=()=>setFilm(i);$('#filmTabs').appendChild(b)});
function setFilm(i){state.film=i;const f=films[i];$('#filmType').textContent=f.name;$('#filmTitle').textContent=f.title;$('#filmDuration').textContent=f.duration;$('#filmPhoto').style.backgroundImage=`url("${f.image}")`;$$('#filmTabs button').forEach((b,n)=>b.classList.toggle('active',n===i))}
function setAlbum(i){state.album=(i+albumSpreads.length)%albumSpreads.length;const a=albumSpreads[state.album];$('#albumLeft').style.backgroundImage=`url("${a.left}")`;$('#albumRight').style.backgroundImage=`url("${a.right}")`;$('#albumTitle').textContent=a.title;$('#albumText').textContent=a.text}
function openMedia(title,image){$('#modalTitle').textContent=title;$('#modalVisual').style.backgroundImage=`url("${image}")`;$('#mediaModal').classList.add('open')}
function wa(message){window.open(`https://wa.me/${WA}?text=${encodeURIComponent(message)}`,'_blank')}
$('#quickEnquiry').onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);wa(`Wedding availability enquiry\nDate: ${f.get('date')}\nCity / destination: ${f.get('city')}\nGuest count: ${f.get('guests')}\nRequirement: ${f.get('requirement')}\nPhone: ${f.get('phone')}`)};
$('#contactForm').onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);wa(`Wedding website enquiry\nName: ${f.get('name')}\nStudio: ${f.get('company')}\nPhone: ${f.get('phone')}\nWebsite type: ${f.get('type')}\nMessage: ${f.get('message')}`)};
$$('[data-package]').forEach(b=>b.onclick=()=>wa(`Please share a scope and quotation for the ${b.dataset.package} package.`));
$('#albumEnquiry').onclick=()=>wa('Please share album formats, selection workflow and delivery timeline.');
$('#reelEnquiry').onclick=()=>wa('Please share details for social reel and rapid preview coverage.');
$$('[data-reel]').forEach(b=>b.onclick=()=>openMedia(b.dataset.reel,images.haldi));
$('#watchShowreel').onclick=()=>openMedia('Wedding Showreel',heroStyles[state.style].photo);
$('#playFilm').onclick=()=>openMedia(films[state.film].title,films[state.film].image);
$('#filmPlayer').onclick=()=>openMedia(films[state.film].title,films[state.film].image);
$('#modalClose').onclick=()=>$('#mediaModal').classList.remove('open');
$('#mediaModal').onclick=e=>{if(e.target.id==='mediaModal')e.currentTarget.classList.remove('open')};
document.addEventListener('keydown',e=>{if(e.key==='Escape')$('#mediaModal').classList.remove('open')});
$('#previousAlbum').onclick=()=>setAlbum(state.album-1);$('#nextAlbum').onclick=()=>setAlbum(state.album+1);

let calendarDate=new Date(),selectedDate=null;
calendarDate.setDate(1);
function dateStatus(y,m,d){const key=(y*13+m*7+d*11)%10;if(key<=1)return'booked';if(key<=3)return'limited';return'available'}
function renderCalendar(){const y=calendarDate.getFullYear(),m=calendarDate.getMonth();$('#calendarTitle').textContent=calendarDate.toLocaleDateString('en-IN',{month:'long',year:'numeric'});const first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate();let html='';for(let i=0;i<first;i++)html+='<button class="calendar-day empty" disabled></button>';for(let d=1;d<=days;d++){const status=dateStatus(y,m,d),iso=`${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`,sel=selectedDate===iso?' selected':'';html+=`<button class="calendar-day ${status}${sel}" data-date="${iso}" ${status==='booked'?'disabled':''}>${d}</button>`}$('#calendarDays').innerHTML=html;$$('[data-date]').forEach(b=>b.onclick=()=>{selectedDate=b.dataset.date;$('#selectedDate').textContent=new Date(selectedDate+'T12:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});renderCalendar()})}
$('#previousMonth').onclick=()=>{calendarDate.setMonth(calendarDate.getMonth()-1);renderCalendar()};$('#nextMonth').onclick=()=>{calendarDate.setMonth(calendarDate.getMonth()+1);renderCalendar()};

$('#previousStyle').onclick=()=>setStyle(state.style-1,true);$('#nextStyle').onclick=()=>setStyle(state.style+1,true);
$('#autoToggle').onclick=e=>{state.auto=!state.auto;e.target.textContent=state.auto?'Pause Auto':'Play Auto';restartAuto()};
$('#customizerToggle').onclick=()=>$('#customizerPanel').classList.toggle('open');
$('#colorPicker').oninput=e=>setColor(e.target.value);
$('#colorSearch').onchange=e=>{const v=e.target.value.trim().toLowerCase(),found=colors.find(c=>c.name.toLowerCase().includes(v));if(found)setColor(found.hex);else if(/^#[0-9a-f]{6}$/i.test(v))setColor(v)};
$('#lockColor').onclick=e=>{state.colorLocked=!state.colorLocked;e.target.classList.toggle('locked',state.colorLocked);e.target.textContent=state.colorLocked?'Color Locked':'Lock Color'};
$('#lockText').onclick=e=>{state.textLocked=!state.textLocked;e.target.classList.toggle('locked',state.textLocked);e.target.textContent=state.textLocked?'Text Locked':'Lock Text'};
$('#fontSelect').onchange=e=>document.documentElement.style.setProperty('--font',e.target.value);
$('#fontSearch').onchange=e=>{const v=e.target.value.trim();if(v)document.documentElement.style.setProperty('--font',`${v}, Arial, sans-serif`)};
$('#lockFont').onclick=e=>{state.fontLocked=!state.fontLocked;e.target.classList.toggle('locked',state.fontLocked);e.target.textContent=state.fontLocked?'Font Locked':'Lock Font'};
$('#themeToggle').onclick=e=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';e.target.textContent=dark?'Light Mode':'Dark Mode'};
$('#menuToggle').onclick=()=>{const n=$('#navLinks');n.classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',n.classList.contains('open'))};$$('#navLinks a').forEach(a=>a.onclick=()=>$('#navLinks').classList.remove('open'));
const observer=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')}),{threshold:.1});$$('.reveal').forEach(x=>observer.observe(x));
setFilm(0);setAlbum(0);renderCalendar();setStyle(0);restartAuto();