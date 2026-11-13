(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  if(b&&m){b.addEventListener('click',function(){var on=m.classList.toggle('on');b.setAttribute('aria-expanded',on);document.body.style.overflow=on?'hidden':''});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('on')){m.classList.remove('on');b.setAttribute('aria-expanded',false);document.body.style.overflow='';b.focus()}})}
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(e){io.observe(e)});
})();
