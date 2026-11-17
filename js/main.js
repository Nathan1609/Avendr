document.getElementById('f').addEventListener('submit',function(e){
e.preventDefault();var f=e.target,ok=document.getElementById('ok');
if(!f.checkValidity()){f.reportValidity();return}
var d=new FormData(f);
var body='Nom : '+d.get('nom')+'\nTéléphone : '+(d.get('tel')||'-')+'\nE-mail : '+d.get('email')+'\n\n'+d.get('msg');
location.href='mailto:info@waw.immo?subject='+encodeURIComponent('[avendr.] '+d.get('sujet')+' — '+d.get('nom'))+'&body='+encodeURIComponent(body);
ok.textContent='Votre messagerie s’ouvre pour envoyer la demande à info@waw.immo.';
});

(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,h=document.querySelector('header');
var bar=document.createElement('div');bar.className='bar';h.appendChild(bar);
function onScroll(){var s=scrollY,m=document.documentElement.scrollHeight-innerHeight;h.classList.toggle('sc',s>30);bar.style.transform='scaleX('+(m>0?Math.min(s/m,1):0)+')'}
addEventListener('scroll',onScroll,{passive:true});onScroll();
if(rm||!('IntersectionObserver' in window))return;
document.documentElement.classList.add('js');
var sel='.head,.manif .wrap>div,.stats li,.bien,.steps li,.tools a,.zones .wrap>*,details,.contact .wrap>*,#vendre .wrap>h2,#vendre .wrap>.eyebrow';
document.querySelectorAll(sel).forEach(function(el){
el.classList.add('rv');
var p=el.parentElement,i=Array.prototype.indexOf.call(p.children,el);
if(el.matches('.bien,.steps li,.tools a,.stats li'))el.style.transitionDelay=(i%3*90)+'ms';
});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);
if(e.target.matches('.stats li'))count(e.target.querySelector('b'))}})},{threshold:.15,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
function count(b){var m=b.textContent.match(/^(\d+)(.*)$/);if(!m||+m[1]===0)return;var n=+m[1],suf=m[2],t0=null;
function step(t){t0=t0||t;var k=Math.min((t-t0)/1100,1),e=1-Math.pow(1-k,3);b.textContent=Math.round(n*e)+suf;if(k<1)requestAnimationFrame(step)}
requestAnimationFrame(step)}
})();
