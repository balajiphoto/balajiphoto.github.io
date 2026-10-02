var G=[["Forever Begins","wedding","radial-gradient(circle at 50% 40%,#fff,#f1dfd0 35%,#b88a7a)"],
["Natural Beauty","portrait","radial-gradient(circle at 70% 30%,#fff3dc,#e7c9a1 25%,#5b4636 75%)"],
["Into The Wild","nature","linear-gradient(#b7d0d6,#e4eef0 40%,#4f7a63 41%,#2c4a3c 70%,#16281f)"],
["Lost In Nature","travel","linear-gradient(#f6c177,#e0764a 45%,#3b2a38 46%)"],
["Human Stories","portrait","linear-gradient(135deg,#f3b562,#e5604d 60%,#512d4a)"],
["Love Story","wedding","radial-gradient(circle at 30% 70%,#ffd9a0,#c76b5a 40%,#2b1d2e)","love-story-thumb.jpg","love-story.jpg"]];
var gal=document.getElementById('gallery'),fl=document.getElementById('filters'),lb=document.getElementById('lightbox');
G.forEach(function(g){var d=document.createElement('div');d.className='gallery-item';d.dataset.category=g[1];d.tabIndex=0;d.setAttribute('role','button');d.setAttribute('aria-label','Open '+g[0]);
d.innerHTML='<div class="ph" style="background:'+(g[3]?'url('+g[3]+') center/cover':g[2])+'"></div><div class="gallery-info"><span>'+g[1][0].toUpperCase()+g[1].slice(1)+'</span><h3>'+g[0]+'</h3></div>';
function open(){var lp=document.getElementById('lbph');if(g[4]){lp.style.background='url('+g[4]+') center/contain no-repeat #000';lp.style.aspectRatio='1000/1250';lp.style.width='min(90vw,calc(88vh*0.8))'}else{lp.style.background=g[2];lp.style.aspectRatio='';lp.style.width=''}lb.classList.add('open');document.getElementById('closeLightbox').focus()}
d.onclick=open;d.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}};gal.appendChild(d)});
['all','wedding','portrait','nature','travel'].forEach(function(c,i){var b=document.createElement('button');b.className='filter-btn'+(i?'':' active');b.textContent=c[0].toUpperCase()+c.slice(1);
b.onclick=function(){Array.prototype.forEach.call(fl.children,function(x){x.classList.remove('active')});b.classList.add('active');
Array.prototype.forEach.call(gal.children,function(it){it.hidden=c!=='all'&&it.dataset.category!==c})};fl.appendChild(b)});
document.getElementById('closeLightbox').onclick=function(){lb.classList.remove('open')};
lb.onclick=function(e){if(e.target===lb)lb.classList.remove('open')};
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('open')});
document.getElementById('aboutph').style.background=G[1][2];
[0,3,4,5].forEach(function(n){var d=document.createElement('div');d.className='ph';d.style.background=G[n][3]?'url('+G[n][3]+') center/cover':G[n][2];document.getElementById('insta').appendChild(d)});
var mt=document.getElementById('menuToggle'),nm=document.getElementById('navMenu');
mt.onclick=function(){var o=nm.classList.toggle('open');mt.setAttribute('aria-expanded',o)};
nm.onclick=function(){nm.classList.remove('open')};
document.getElementById('contactForm').onsubmit=function(e){e.preventDefault();
var v=function(i){return document.getElementById(i).value};
location.href='mailto:vishalgautam4796@email.com?subject='+encodeURIComponent(v('subject'))+'&body='+encodeURIComponent(v('message')+'\n\n'+v('name')+' ('+v('email')+')')};

function route(scroll){var b=location.hash==='#book';document.body.classList.toggle('booking',b);
if(b){window.scrollTo(0,0)}else if(scroll&&location.hash){var t=document.querySelector(location.hash);if(t)t.scrollIntoView()}}
window.addEventListener('hashchange',function(){route(true)});route(false);
var bd=document.getElementById('b_date');bd.min=new Date().toISOString().slice(0,10);
var via='wa';Array.prototype.forEach.call(document.querySelectorAll('#bookForm button'),function(b){b.onclick=function(){via=b.dataset.via}});
document.getElementById('bookForm').onsubmit=function(e){e.preventDefault();
var g=function(i){return document.getElementById(i)},err=g('bookErr'),bad=[];
['b_name','b_phone','b_type','b_date'].forEach(function(i){var el=g(i),ok=el.value.trim()!=='';if(i==='b_phone')ok=/^[0-9+\s-]{10,15}$/.test(el.value.trim());el.classList.toggle('bad',!ok);if(!ok)bad.push(i)});
if(g('b_email').value&&!g('b_email').checkValidity()){g('b_email').classList.add('bad');bad.push('b_email')}else g('b_email').classList.remove('bad');
if(bad.length){err.hidden=false;err.textContent='Please fill the highlighted fields correctly (name, 10-digit phone, shoot type, date).';g(bad[0]).focus();return}
err.hidden=true;
var v=function(i){return g(i).value.trim()||'-'};
var m='Shri Balaji Photo Studio\nNew session booking\nName: '+v('b_name')+'\nPhone: '+v('b_phone')+'\nEmail: '+v('b_email')+'\nCity: '+v('b_city')+'\nShoot: '+v('b_type')+'\nPeople: '+v('b_people')+'\nDate: '+v('b_date')+' ('+g('b_time').value+')\nVenue: '+v('b_venue')+'\nNotes: '+v('b_msg');
if(via==='wa')window.open('https://wa.me/919528950649?text='+encodeURIComponent(m),'_blank','noopener');
else location.href='mailto:vishalgautam4796@email.com?subject='+encodeURIComponent('Session booking - '+g('b_type').value)+'&body='+encodeURIComponent(m)};

(function(){
var f=document.getElementById('rateForm');if(!f)return;
var words=['','Poor','Fair','Good','Very good','Excellent'],via='wa',tx=document.getElementById('starText');
function val(){var c=f.querySelector('input[name=star]:checked');return c?+c.value:0}
Array.prototype.forEach.call(f.querySelectorAll('input[name=star]'),function(r){r.onchange=function(){tx.textContent=val()+' of 5 - '+words[val()]}});
Array.prototype.forEach.call(f.querySelectorAll('button'),function(b){b.onclick=function(){via=b.dataset.via}});
f.onsubmit=function(e){e.preventDefault();
var err=document.getElementById('rateErr'),n=document.getElementById('r_name').value.trim(),m=document.getElementById('r_msg').value.trim();
if(!val()||!n){err.textContent=!val()?'Please choose a star rating.':'Please enter your name.';err.hidden=false;return}
err.hidden=true;
var t='New rating for Shri Balaji Photo Studio\nRating: '+val()+'/5 ('+words[val()]+')\nName: '+n+'\nReview: '+(m||'-');
document.getElementById('rateThanks').hidden=false;
if(via==='wa')window.open('https://wa.me/919528950649?text='+encodeURIComponent(t),'_blank','noopener');
else location.href='mailto:vishalgautam4796@email.com?subject='+encodeURIComponent('New rating: '+val()+'/5')+'&body='+encodeURIComponent(t)};
})();

/* ===== UPI payment settings: put your real UPI ID below, e.g. 'name@oksbi' ===== */
(function(){
var UPI={id:'vishalgautam3746-1@oksbi',name:'Vishal Gautam'};
var box=document.getElementById('payBox'),empty=document.getElementById('payEmpty');
if(!box)return;
if(!UPI.id){box.hidden=true;empty.hidden=false;return}
var link='upi://pay?pa='+encodeURIComponent(UPI.id)+'&pn='+encodeURIComponent(UPI.name)+'&cu=INR';
document.getElementById('upiIdText').textContent=UPI.id;
document.getElementById('upiName').textContent=UPI.name;
document.getElementById('upiOpen').href=link;
})();
