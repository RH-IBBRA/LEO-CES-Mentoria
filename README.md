# oPlanejador — site (primeira versão, rascunho)

Site de **oPlanejador**, marca pessoal de Leonardo Ces voltada à formação e
evolução de Financial Advisors. Endereço oficial definido: **oplanejador.com**.

Construído conforme o briefing "Orientação para quem vai construir" (08/09/2026).
Identidade, textos e composição são **proposta inicial para revisão** — não
identidade final aprovada. Marco de referência: rascunho em S04.15 (12–18/10/2026).

100% estático: HTML, CSS e JS, sem build, sem dependências e sem fontes externas.

## Estado atual

O site está em **modo rascunho**, o que significa:

- `<meta name="robots" content="noindex, nofollow">` ativo no `index.html`;
- tudo que ainda depende de insumo ou validação aparece marcado como **pendente**
  no próprio cartão (a faixa de aviso no topo foi retirada a pedido);
- nenhum link externo está ativo, porque nenhum destino foi validado ainda.

As pendências e o checklist de aceite estão em [ACEITE.md](ACEITE.md).

## Como abrir

- **Duplo clique em `index.html`** (funciona offline), ou
- `powershell -ExecutionPolicy Bypass -File serve.ps1` → `http://localhost:8899`

## Arquivos

| Arquivo | O que é |
| --- | --- |
| `index.html` | a página inteira; os **textos** ficam aqui |
| `assets/config.js` | **links, materiais, contato, fotos e o modo** (rascunho/público) |
| `assets/style.css` | cores, tipografia e escala — tudo no `:root` no topo |
| `assets/app.js` | aplica o `config.js` na página; não guarda conteúdo |
| `assets/leonardo.jpg` | foto vertical usada na **abertura** |
| `assets/leonardo-retrato.jpg` | retrato pequeno usado no bloco **Sobre** |
| `assets/logo-oplanejador.svg` | **símbolo principal** em paths puros, para fundos claros |
| `assets/logo-oplanejador-claro.svg` | o mesmo símbolo para fundos escuros |
| `assets/logo-oplanejador-reduzido.svg` | **versão reduzida** (só a letra), para usos abaixo de ~30px |
| `assets/favicon.svg` | símbolo em areia sobre quadrado azul, usado como favicon |
| `assets/og-oplanejador.svg` | desenho da imagem de compartilhamento (falta exportar em PNG) |
| `serve.ps1` | servidor local opcional para preview (não vai para o deploy) |
| `_arquivo/` | conteúdo do conceito anterior, fora do deploy — ver `_arquivo/LEIA-ME.md` |

## Como editar

**Trocar cor ou tipografia:** só o bloco `:root` no início de `assets/style.css`.
Mudar lá recolore e reescala o site inteiro.

**Trocar textos:** direto no `index.html`. Cada seção está comentada.

**Ligar um canal, cadastrar material ou definir o contato:** só o
`assets/config.js`. As regras que o site garante sozinho:

- canal com `confirmado: false` **não ganha botão ativo** e, na versão pública,
  nem aparece;
- o botão "Ver aulas" no cabeçalho só existe quando o YouTube estiver confirmado;
- material sem arquivo real não aparece na versão pública — a seção some inteira
  se não houver nenhum;
- o contato só vira botão quando houver e-mail preenchido.

Isso é proposital: o briefing proíbe publicar link inventado ou prometer material
que ainda não existe.

## Como virar a versão pública

Só depois da aprovação de Leonardo (ver [ACEITE.md](ACEITE.md)):

1. Preencher `assets/config.js` com URLs validadas, e-mail público e materiais reais.
2. Trocar `modo: 'rascunho'` por `modo: 'publico'` no mesmo arquivo.
3. Remover a linha `<meta name="robots" content="noindex, nofollow" />` do `index.html`.
4. Exportar `assets/og-oplanejador.svg` em PNG 1200×630 como
   `assets/og-oplanejador.png` e descomentar as metatags `og:image` e
   `twitter:card` no `<head>`.
5. Testar todos os links, downloads e o contato com destinos reais.

## Deploy

Repositório: `RH-IBBRA/LEO-CES-Mentoria` (branch `main`).
Hospedagem estática (Vercel ou equivalente) — não há build, o repositório é
servido como está. `serve.ps1` e `_arquivo/` ficam fora do deploy via
`.vercelignore`.

O domínio `oplanejador.com` está registrado no nome de Leonardo desde 07/09/2026.
Provedor e acesso ao DNS ainda precisam ser organizados antes da implantação.

## O que não entra nesta versão

Por decisão do briefing, e porque as ofertas não estão definidas: área de
membros, checkout, curso pago, mentoria à venda, comunidade aberta, candidatura à
IBBRA e chatbot.

Também foram retirados do conceito anterior, por não terem respaldo no briefing
atual: o formulário de newsletter (era simulado, sem serviço ligado) e o convite
ao grupo de WhatsApp (comunidade aberta não está definida, e o WhatsApp de
operação interna não é atendimento ao público).

## Custos

Nesta versão não há serviço pago contratado: o site é estático e pode ser
hospedado no plano gratuito. Qualquer custo de site deve ser apresentado a
Leonardo **separadamente** do teto de R$ 1.000/mês, que se refere a agentes,
APIs, WhatsApp e infraestrutura da operação.
