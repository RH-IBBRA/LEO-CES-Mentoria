// Reveal on scroll
(function(){
  var els = document.querySelectorAll('.reveal');
  if(els.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:.12});
    els.forEach(function(el){ io.observe(el); });
  }

  // Newsletter (mock — sem backend ainda). Funciona para qualquer .nform da página.
  document.querySelectorAll('.nform').forEach(function(f){
    f.addEventListener('submit', function(ev){
      ev.preventDefault();
      var email = f.querySelector('input[type=email]');
      if(email && email.checkValidity()){
        var scope = f.closest('.news') || document;
        var ok = scope.querySelector('.ok');
        if(ok) ok.style.display = 'block';
        email.value = '';
      }
    });
  });

  // Mobile menu toggle
  var mb = document.getElementById('menuBtn');
  var links = document.querySelector('.nav-links');
  if(mb && links){
    mb.addEventListener('click', function(){ links.classList.toggle('open'); });
    links.addEventListener('click', function(e){ if(e.target.tagName === 'A') links.classList.remove('open'); });
  }
})();
