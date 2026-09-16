/* ============================================================
   oPlanejador — comportamento da pagina
   ------------------------------------------------------------
   Este arquivo NAO guarda conteudo: ele apenas aplica o que
   esta em assets/config.js. Regras que ele garante:

   - botao/link so fica ativo quando o destino esta confirmado;
   - cartao sem destino real nao aparece na versao publica;
   - material sem arquivo real nao aparece na versao publica;
   - no modo 'rascunho', tudo que falta aparece marcado.
   ============================================================ */

(function () {
  'use strict';

  var cfg = (typeof OP_CONFIG === 'object' && OP_CONFIG) ? OP_CONFIG : {};
  var rascunho = cfg.modo !== 'publico';
  var canais = cfg.canais || {};
  var expansao = cfg.expansao || {};
  var fotos = cfg.fotos || {};
  var contato = cfg.contato || {};
  var materiais = Array.isArray(cfg.materiais) ? cfg.materiais : [];

  function mostrar(el) { if (el) el.hidden = false; }
  function esconder(el) { if (el) el.hidden = true; }
  function ativo(c) { return !!(c && c.confirmado && c.url); }

  function externo(a, url) {
    a.href = url;
    if (/^https?:/i.test(url)) { a.target = '_blank'; a.rel = 'noopener'; }
  }

  /* ---------- 1. Modo publico esconde as marcacoes ---------- */
  if (!rascunho) {
    document.querySelectorAll('[data-so-rascunho]').forEach(esconder);
    esconder(document.getElementById('avisoRascunho'));
  }

  /* ---------- 2. Canais ---------- */
  var visiveis = 0;
  document.querySelectorAll('[data-canal]').forEach(function (cartao) {
    var c = canais[cartao.getAttribute('data-canal')] || {};
    var link = cartao.querySelector('[data-canal-link]');
    var aviso = cartao.querySelector('[data-canal-pendencia]');
    var nota = cartao.querySelector('[data-canal-nota]');

    if (ativo(c)) {
      if (link) { externo(link, c.url); mostrar(link); }
      esconder(aviso);
      visiveis++;
      return;
    }
    if (nota && c.nota) nota.textContent = c.nota;
    if (rascunho) { visiveis++; } else { esconder(cartao); }
  });

  /* Sem nenhum canal para mostrar, a secao inteira sai de cena
     e a chamada da abertura passa a apontar para "Para quem e". */
  if (!visiveis) {
    esconder(document.getElementById('conteudos'));
    document.querySelectorAll('a[href="#conteudos"]').forEach(function (a) {
      a.href = '#para-quem';
    });
  }

  /* ---------- 3. Botao "Ver aulas" do cabecalho ---------- */
  var ctaAulas = document.getElementById('ctaAulas');
  if (ctaAulas && ativo(canais.youtube)) {
    externo(ctaAulas, canais.youtube.url);
    mostrar(ctaAulas);
  }

  /* ---------- 4. Fotos ---------- */
  var hero = document.getElementById('heroFoto');
  if (hero && fotos.hero) {
    var heroImg = document.getElementById('heroFotoImg');
    if (heroImg) {
      heroImg.src = fotos.hero;
      heroImg.alt = fotos.heroAlt || 'Leonardo Ces';
    }
    mostrar(hero);
    var secaoHero = document.getElementById('abertura');
    if (secaoHero) secaoHero.classList.add('com-foto');
  }

  var sobreFoto = document.getElementById('sobreFoto');
  var sobreImg = document.getElementById('sobreFotoImg');
  if (sobreFoto && sobreImg) {
    if (fotos.retrato) {
      sobreImg.src = fotos.retrato;
      sobreImg.alt = fotos.retratoAlt || 'Leonardo Ces';
    } else {
      esconder(sobreFoto);
    }
  }

  /* ---------- 5. Contato ---------- */
  var email = (contato.email || '').trim();
  if (email) {
    var cLink = document.getElementById('contatoLink');
    if (cLink) {
      cLink.href = 'mailto:' + email;
      cLink.textContent = email;
      mostrar(cLink);
    }
    esconder(document.getElementById('contatoPendencia'));
  }

  /* ---------- 6. Materiais gratuitos ---------- */
  var lista = document.getElementById('listaMateriais');
  if (lista) {
    if (materiais.length) {
      var modelo = lista.querySelector('[data-material-modelo]');
      var icone = modelo ? modelo.querySelector('.icone') : null;

      lista.querySelectorAll('[data-material-modelo]').forEach(function (el) {
        el.parentNode.removeChild(el);
      });

      materiais.forEach(function (m) {
        var art = document.createElement('article');
        art.className = 'cartao';

        if (icone) art.appendChild(icone.cloneNode(true));

        var h3 = document.createElement('h3');
        h3.textContent = m.titulo || 'Material';
        art.appendChild(h3);

        if (m.problema) {
          var p = document.createElement('p');
          p.textContent = m.problema;
          art.appendChild(p);
        }

        var detalhe = [m.formato, m.aula].filter(Boolean).join(' · ');
        if (detalhe) {
          var d = document.createElement('p');
          d.className = 'campo-modelo';
          d.textContent = detalhe;
          art.appendChild(d);
        }

        var acao = document.createElement('div');
        acao.className = 'acao';
        if (m.url) {
          var a = document.createElement('a');
          a.className = 'botao botao-secundario';
          a.textContent = 'Acessar material';
          externo(a, m.url);
          acao.appendChild(a);
        }
        art.appendChild(acao);

        lista.appendChild(art);
      });
    } else if (!rascunho) {
      /* Sem arquivo real, a secao nao vai ao ar. */
      esconder(document.getElementById('materiais'));
    }
  }

  /* ---------- 7. Links do rodape ---------- */
  var rodape = document.getElementById('rodapeLinks');
  if (rodape) {
    var rotulos = { youtube: 'YouTube', instagram: 'Instagram', podcast: 'Podcast' };
    var postos = 0;
    var faltando = 0;

    function porLista(obj, nomePadrao) {
      Object.keys(obj).forEach(function (k) {
        var c = obj[k] || {};
        if (!ativo(c)) { faltando++; return; }
        var a = document.createElement('a');
        a.textContent = c.rotulo || nomePadrao[k] || k;
        externo(a, c.url);
        rodape.appendChild(a);
        postos++;
      });
    }

    porLista(canais, rotulos);
    porLista(expansao, {});

    if (email) {
      var ea = document.createElement('a');
      ea.textContent = email;
      ea.href = 'mailto:' + email;
      rodape.appendChild(ea);
      postos++;
    }

    if (postos && !faltando) esconder(document.getElementById('rodapePendencia'));
  }

  /* ---------- 8. Itens de menu sem destino visivel ----------
     Se uma secao saiu do ar (canal nao confirmado, material
     inexistente), o item correspondente sai do menu tambem. */
  document.querySelectorAll('#menuPrincipal a[href^="#"]').forEach(function (a) {
    var alvo = document.getElementById(a.getAttribute('href').slice(1));
    if (!alvo || alvo.hidden) esconder(a);
  });

  /* ---------- 9. Menu no celular ---------- */
  var botao = document.getElementById('abreMenu');
  var menu = document.getElementById('menuPrincipal');
  if (botao && menu) {
    botao.addEventListener('click', function () {
      var aberto = menu.classList.toggle('aberto');
      botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('aberto');
        botao.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('aberto')) {
        menu.classList.remove('aberto');
        botao.setAttribute('aria-expanded', 'false');
        botao.focus();
      }
    });
  }
})();
