var G=[["Forever Begins","wedding","radial-gradient(circle at 50% 40%,#fff,#f1dfd0 35%,#b88a7a)"],
["Natural Beauty","portrait","radial-gradient(circle at 70% 30%,#fff3dc,#e7c9a1 25%,#5b4636 75%)"],
["Into The Wild","nature","linear-gradient(#b7d0d6,#e4eef0 40%,#4f7a63 41%,#2c4a3c 70%,#16281f)"],
["Lost In Nature","travel","linear-gradient(#f6c177,#e0764a 45%,#3b2a38 46%)"],
["Human Stories","portrait","linear-gradient(135deg,#f3b562,#e5604d 60%,#512d4a)"],
["Love Story","wedding","radial-gradient(circle at 30% 70%,#ffd9a0,#c76b5a 40%,#2b1d2e)"]];
var gal=document.getElementById('gallery'),fl=document.getElementById('filters'),lb=document.getElementById('lightbox');
G.forEach(function(g){var d=document.createElement('div');d.className='gallery-item';d.dataset.category=g[1];d.tabIndex=0;d.setAttribute('role','button');d.setAttribute('aria-label','Open '+g[0]);
d.innerHTML='<div class="ph" style="background:'+g[2]+'"></div><div class="gallery-info"><span>'+g[1][0].toUpperCase()+g[1].slice(1)+'</span><h3>'+g[0]+'</h3></div>';
function open(){document.getElementById('lbph').style.background=g[2];lb.classList.add('open');document.getElementById('closeLightbox').focus()}
d.onclick=open;d.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}};gal.appendChild(d)});
['all','wedding','portrait','nature','travel'].forEach(function(c,i){var b=document.createElement('button');b.className='filter-btn'+(i?'':' active');b.textContent=c[0].toUpperCase()+c.slice(1);
b.onclick=function(){Array.prototype.forEach.call(fl.children,function(x){x.classList.remove('active')});b.classList.add('active');
Array.prototype.forEach.call(gal.children,function(it){it.hidden=c!=='all'&&it.dataset.category!==c})};fl.appendChild(b)});
document.getElementById('closeLightbox').onclick=function(){lb.classList.remove('open')};
lb.onclick=function(e){if(e.target===lb)lb.classList.remove('open')};
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('open')});
document.getElementById('aboutph').style.background=G[1][2];
[0,3,4,5].forEach(function(n){var d=document.createElement('div');d.className='ph';d.style.background=G[n][2];document.getElementById('insta').appendChild(d)});
var mt=document.getElementById('menuToggle'),nm=document.getElementById('navMenu');
mt.onclick=function(){var o=nm.classList.toggle('open');mt.setAttribute('aria-expanded',o)};
nm.onclick=function(){nm.classList.remove('open')};
document.getElementById('contactForm').onsubmit=function(e){e.preventDefault();
var v=function(i){return document.getElementById(i).value};
location.href='mailto:vishalgautam4796@email.com?subject='+encodeURIComponent(v('subject'))+'&body='+encodeURIComponent(v('message')+'\n\n'+v('name')+' ('+v('email')+')')};
