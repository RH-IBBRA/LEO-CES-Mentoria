/* ============================================================
   oPlanejador — configuracoes centrais
   ------------------------------------------------------------
   Edite SOMENTE este arquivo para: ligar/desligar canais,
   trocar URLs, cadastrar materiais gratuitos e definir o
   contato publico. Nao e necessario mexer em HTML ou CSS.

   modo: 'rascunho' -> marca as pendencias na tela, para revisao
         'publico'  -> esconde tudo que ainda nao tem destino real
   ============================================================ */

var OP_CONFIG = {

  modo: 'rascunho',

  /* --- Canais -------------------------------------------------
     confirmado: false -> o cartao aparece sem botao ativo (e,
                          no modo 'publico', nao aparece)
     confirmado: true  -> o botao passa a levar para a url

     Handles informados por Leonardo em 08/09/2026. As URLs
     abaixo foram derivadas desses handles e AINDA NAO foram
     validadas — conferir o destino antes de confirmar.
  ------------------------------------------------------------ */
  canais: {
    youtube: {
      url: 'https://www.youtube.com/@leonardoces',
      /* Canal validado em 21/09/2026: existe e ja se chama "O Planejador",
         mas ainda nao tem nenhum video. O briefing so permite botao ativo
         com conteudo disponivel. Virar para true quando sair a 1a aula. */
      confirmado: false,
      nota: 'Canal criado e validado, ainda sem vídeos publicados. O botão entra quando sair a primeira aula.'
    },
    instagram: {
      url: 'https://www.instagram.com/leonardoibbra',
      /* Confirmado como definitivo por Marcelo em 21/09/2026; perfil ativo. */
      confirmado: true,
      nota: 'Perfil @leonardoibbra, confirmado como definitivo.'
    },
    podcast: {
      url: '',
      confirmado: false,
      nota: 'Sem endereço definido. Podcast previsto a partir da S10.'
    }
  },

  /* Canais de expansao: entram no rodape apenas quando confirmados. */
  expansao: {
    linkedin: {
      rotulo: 'LinkedIn',
      /* URL fornecida por Marcelo em 21/09/2026. O LinkedIn exige login para
         exibir perfil, entao nao foi aberto aqui; vale pela fonte direta. */
      url: 'https://www.linkedin.com/in/leonardoces/',
      confirmado: true,
      nota: 'URL fornecida diretamente em 21/09/2026.'
    },
    x: {
      rotulo: 'X',
      url: 'https://x.com/leonardoces',
      confirmado: false,
      nota: 'Handle informado em 08/09/2026; validar destino.'
    },
    tiktok: {
      rotulo: 'TikTok',
      url: 'https://www.tiktok.com/@leonardo.ces8',
      confirmado: false,
      nota: 'Handle informado em 08/09/2026; validar destino.'
    }
  },

  /* --- Contato publico ---------------------------------------
     Preencher com o e-mail que Leonardo definir para o projeto.
     O WhatsApp de operacao dos agentes NAO entra aqui: e uma
     funcao interna, nao atendimento ao publico.
  ------------------------------------------------------------ */
  contato: {
    /* Fornecido por Marcelo em 21/09/2026. */
    email: 'leonardo@ibbra.com.br',
    nota: 'E-mail público definido.'
  },

  /* --- Fotos -------------------------------------------------
     hero: '' mantem a abertura tipografica, sem foto.
     Usar somente fotografia real de Leonardo, com origem e
     permissao de uso registradas. Nao usar banco de imagens.
  ------------------------------------------------------------ */
  fotos: {
    /* Foto da abertura (vertical, grande). Enquanto o arquivo nao
       existir, a abertura fica tipografica, sem imagem quebrada. */
    hero: 'assets/leonardo.jpg',
    heroAlt: 'Leonardo Ces',
    heroNota: 'Origem: materia da GPS Brasilia. Permissao de uso nao registrada. Otimizada em 21/09/2026: 900x1350, 77 KB (era 2976x4464, 707 KB).',
    retrato: 'assets/leonardo-retrato.jpg',
    retratoAlt: 'Leonardo Ces',
    retratoNota: 'Enviada por Marcelo em 17/09/2026. 200x200 px: exibida em 140px por isso. Nao ampliar. Registrar origem e permissao de uso.'
  },

  /* --- Materiais gratuitos -----------------------------------
     Cadastrar somente o que ja existe como arquivo real.
     Modelo de cada item:
     {
       titulo:   'Nome real do material',
       problema: 'Que problema ele ajuda a resolver',
       formato:  'PDF, 4 paginas',
       aula:     'Aula relacionada',
       url:      'materiais/arquivo.pdf'
     }
     Lista vazia: no modo 'rascunho' aparecem espacos marcados
     como pendentes; no modo 'publico' a secao fica oculta.
  ------------------------------------------------------------ */
  materiais: []
};
