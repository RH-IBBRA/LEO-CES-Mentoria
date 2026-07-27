// ============================================================
//  LINK DO GRUPO DO WHATSAPP  —  troque a URL abaixo pela do
//  convite real do grupo (ex.: https://chat.whatsapp.com/ABC123...)
// ============================================================
var WA_GROUP_URL = "https://chat.whatsapp.com/XXXXXXXXXXXXXXXXXXXXXX";

(function(){
  var WA_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>';

  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if(els.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:.12});
    els.forEach(function(el){ io.observe(el); });
  }

  // Newsletter (mock — sem backend ainda)
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

  // Aplica o link do grupo em qualquer <a data-wa> espalhado pelo conteúdo
  document.querySelectorAll('[data-wa]').forEach(function(a){
    a.href = WA_GROUP_URL; a.target = '_blank'; a.rel = 'noopener';
  });

  // Faixa de convite ao grupo, injetada antes do rodapé
  var footer = document.querySelector('footer');
  if(footer){
    var band = document.createElement('div');
    band.className = 'wa-cta';
    band.innerHTML =
      '<div class="wrap"><div class="inner">' +
        '<div class="wa-ic">' + WA_SVG + '</div>' +
        '<div class="tx">' +
          '<h3>Entre no grupo do WhatsApp</h3>' +
          '<p>Receba os novos conteúdos em primeira mão e participe das discussões com outros Financial Advisors.</p>' +
        '</div>' +
        '<a class="btn wa-btn" href="' + WA_GROUP_URL + '" target="_blank" rel="noopener">Entrar no grupo</a>' +
      '</div></div>';
    footer.parentNode.insertBefore(band, footer);
  }

  // Botão flutuante (canto inferior direito) em todas as páginas
  var fab = document.createElement('a');
  fab.className = 'wa-float';
  fab.href = WA_GROUP_URL; fab.target = '_blank'; fab.rel = 'noopener';
  fab.setAttribute('aria-label', 'Entrar no grupo do WhatsApp');
  fab.innerHTML = WA_SVG + '<span>Grupo no WhatsApp</span>';
  document.body.appendChild(fab);
})();
