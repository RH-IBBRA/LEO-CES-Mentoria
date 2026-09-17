# Aceite e pendências — site oPlanejador

Referência: briefing "Orientação para quem vai construir" (08/09/2026), item 8.
Construção: Marcelo. Aprovação de conteúdo e apresentação: Leonardo.

## Checklist de aceite

- [x] **Todas as seções do escopo estão montadas** — apresentação, para quem é,
      pilares, acesso aos canais, materiais gratuitos, sobre Leonardo, contato e
      rodapé.
- [x] **Conteúdo segue público, princípios e relação com a IBBRA** — quatro portas
      de entrada sem hierarquia entre elas; remuneração pelo cliente sem comissões;
      nenhuma exigência de certificação, carteira ou rede de alta renda; nenhuma
      promessa de renda ou carreira; oPlanejador com identidade própria, sem
      aparência de site institucional da IBBRA nem de página de recrutamento.
- [x] **Rascunho navegável em celular e desktop** — layout de 1 a 4 colunas conforme
      a largura, menu recolhido no celular, sem rolagem horizontal.
- [x] **Branding inicial centralizado e editável** — paleta, tipografia e escala no
      `:root` de `assets/style.css`; links, materiais, contato e fotos em
      `assets/config.js`.
- [~] **Links e arquivos reais conferidos; ausências identificadas e ocultadas na
      versão pública** — o mecanismo está pronto e as ausências estão marcadas,
      mas **nenhum destino foi validado ainda**. Ver a tabela de insumos abaixo.
- [ ] **Leonardo revisou texto, biografia e visual** — pendente.
- [x] **Acessos, manutenção e custos documentados** — no [README.md](README.md).
- [ ] **Publicação somente após validação da versão correspondente** — o site está
      com `noindex` e em modo rascunho justamente para isso.

## Insumos que dependem de Leonardo

| Insumo | Situação | Onde entra |
| --- | --- | --- |
| URL do YouTube | handle `@leonardoces` informado; destino não validado, e não se sabe se já há aulas publicadas | `config.js` → `canais.youtube` |
| URL do Instagram | perfil atual `@leonardoibbra`; padronização do @ é recomendação, não decisão | `config.js` → `canais.instagram` |
| Endereço do podcast | não existe ainda (previsto a partir da S10) | `config.js` → `canais.podcast` |
| URL do LinkedIn | handle informado, mas a URL do LinkedIn **não é derivável do @** — precisa ser conferida | `config.js` → `expansao.linkedin` |
| URLs de X e TikTok | handles informados; destinos não validados | `config.js` → `expansao` |
| E-mail público do projeto | não fornecido | `config.js` → `contato.email` |
| Foto da abertura | em uso: a foto vertical que veio de matéria da GPS Brasília. **Permissão de uso não registrada** e arquivo pesado (ver nota abaixo) | `config.js` → `fotos.hero` |
| Foto do bloco "Sobre" | em uso: a enviada por Marcelo em 17/09/2026. Tem **200×200 px**, por isso é exibida em 140px; não suporta uso maior. Origem e permissão a registrar | `config.js` → `fotos.retrato` |
| Biografia revisada | o texto usa o que consta no briefing (15 anos de experiência); nada foi acrescentado | `index.html`, seção "Sobre" |
| Materiais gratuitos reais | nenhum arquivo existe; os espaços estão marcados como pendentes | `config.js` → `materiais` |
| Provedor e acesso ao DNS de oplanejador.com | a organizar antes da implantação | deploy |
| Aprovação de textos e visual | pendente | tudo |

> **Peso da foto da abertura — resolver antes de publicar.** O arquivo tem
> 2976×4464 px e 723 KB, mas é exibido em 340 px de largura. Desde 17/09/2026 ele
> está na abertura, ou seja, é a maior imagem da primeira tela e define o tempo de
> carregamento percebido, principalmente no celular. Reexportar em torno de
> 900×1350 px e abaixo de 150 KB. Esta máquina não tem ferramenta de imagem
> instalada, então a conversão precisa ser feita fora dela.

> **Resolução da foto do "Sobre".** A imagem enviada tem 200×200 px, tamanho de
> foto de perfil. Ela está nítida nos 140 px em que é exibida, mas não serve para
> uso maior. Se o desejo for uma foto grande em algum bloco, é preciso um arquivo
> de no mínimo ~1400 px de largura.

## Verificado na construção

Medido no navegador, em 16/09/2026, com o site rodando:

- **Celular (375px) e desktop (1280px)**: sem rolagem horizontal, respiro lateral
  de 24px consistente em todas as seções, cartões de 1 a 4 colunas conforme a
  largura, menu recolhido no celular com `aria-expanded` correto e fechamento
  pelo Esc.
- **Tipografia**: Georgia nos títulos e Arial no texto, resolvidas pelo sistema —
  nenhuma fonte externa é baixada. Corpo em 17px no desktop e 16px no celular.
- **Contraste** (WCAG AA exige 4,5:1 para texto normal): texto grafite sobre
  marfim 12:1; petróleo sobre marfim 7,2:1; texto de apoio sobre marfim 7:1;
  marfim sobre azul profundo 13:1; areia sobre azul profundo 8,6:1. A areia não é
  usada como texto sobre fundo claro, onde não atingiria o mínimo.
- **Estado nunca depende só de cor**: pendência tem selo escrito "Pendente" e
  borda tracejada; foco de teclado tem contorno de 3px visível nos dois fundos.
- **Comportamento do modo público**, testado trocando `modo` para `'publico'`:
  a faixa de rascunho e todas as marcações desaparecem; canal sem URL confirmada
  não aparece; a seção de materiais sai inteira quando não há arquivo real; os
  itens de menu que apontariam para seções ocultas também saem; a chamada
  "Explorar conteúdos" passa a apontar para uma seção existente em vez de virar
  link morto.
- **Comportamento com destino confirmado**, testado com YouTube confirmado,
  e-mail preenchido e um material cadastrado: o botão "Ver aulas" aparece no
  cabeçalho, os links externos ganham `target="_blank"` e `rel="noopener"`, o
  material renderiza com título, problema, formato, aula e botão "Acessar
  material", o contato vira um `mailto:` e o rodapé lista o que foi confirmado.
- **Sem erros de console** e nenhuma requisição a serviço externo.

## Decisões tomadas na construção

Pontos em que foi preciso interpretar o briefing — vale a revisão de Leonardo:

1. **Nenhum link externo foi ativado.** Os handles de 08/09/2026 estão gravados no
   `config.js`, mas como o briefing pede validação dos destinos antes de publicar,
   todos entraram como não confirmados. A URL do LinkedIn não foi sequer
   derivada, porque não se deduz do @.
2. **Canal sem URL confirmada não aparece na versão pública** — não só o botão. Um
   cartão anunciando um podcast que ainda não existe promete conteúdo não
   produzido.
3. **A abertura ficou tipográfica**, sem foto, conforme a orientação para quando
   não houver foto autorizada.
4. **Os cartões de "Para quem é" não são clicáveis**, porque não existe trilha ou
   curso correspondente.
5. **O conceito anterior foi arquivado**, não apagado: está em `_arquivo/`, fora do
   deploy, e no histórico do git. Ver `_arquivo/LEIA-ME.md`.
6. **Foi desenhado um símbolo (monograma oP)** — pedido em 16/09/2026. O briefing
   diz que a assinatura provisória é "puramente tipográfica" e que não se deve
   "tratar como logotipo final"; portanto **isto é proposta, não identidade
   aprovada**, e cabe a Leonardo e ao futuro trabalho de branding decidir. O
   conceito: o "o" minúsculo seguido do "P" maiúsculo é o traço distintivo da
   grafia da marca, e o anel carrega a leitura da visão 360º. Sem seta de lucro,
   sem gráfico e sem símbolo de dinheiro, que o briefing exclui. Entregue em
   paths puros (nenhuma fonte instalada é necessária) e editável: para recolorir,
   basta trocar o valor de `stroke`. Testado de 96px a 16px.
7. **Há conteúdo de exemplo na seção de Materiais**, pedido em 17/09/2026 para
   Leonardo ver a direção editorial. São três materiais propostos, cada um com o
   problema que resolve, o formato, a aula relacionada e o que teria dentro. Levam
   selo **Exemplo** e, como não são arquivos reais, não aparecem na versão
   pública. São ferramentas de trabalho, não relato de experiência: a parte que
   depende da vivência de Leonardo continua sendo dele.
8. **A faixa de aviso de rascunho no topo foi retirada** a pedido, em 16/09/2026.
   Os selos "pendente" em cada cartão continuam, assim como o `noindex`.
9. **Newsletter e grupo de WhatsApp foram retirados.** O formulário era simulado e
   o briefing pede definir destino e tratamento dos dados antes de ativar
   qualquer formulário; a comunidade aberta não está definida.
