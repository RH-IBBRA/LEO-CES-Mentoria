# Leonardo Ces — Blog de Educação para Financial Advisors

Site pessoal / blog editorial de Leonardo Ces (CEO da IBBRA), com tom de conteúdo e
autoridade (não de vendas). Paleta clara: branco, bege, azul-marinho, azul e laranja
como detalhe. 100% offline, sem dependências externas.

## As 5 frentes de conteúdo
1. **Trilha do Financial Advisor** — a jornada de carreira, do início ao topo
2. **Marca Pessoal** — autoridade, posicionamento e reputação
3. **Carteira & Vendas** — carteira de clientes e processo comercial
4. **Motivação** — mentalidade, disciplina e constância
5. **Mentoria Empresarial** — gestão e crescimento do negócio

CTA principal é a **newsletter** (suave); a mentoria é citada de forma discreta.

## Como abrir
- **Duplo clique em `index.html`** (abre no navegador, funciona offline), ou
- `powershell -ExecutionPolicy Bypass -File serve.ps1` → `http://localhost:8899`

## Foto
`assets/leonardo.jpg` é uma foto pública oficial dele (fonte: matéria da GPS Brasília,
"Leonardo Ces, o empreendedor da oportunidade"). Usada no hero, no bloco do autor,
nos avatares dos artigos e no destaque. Para trocar, basta substituir o arquivo.

## O que ajustar antes de publicar de verdade
- **Artigos**: os textos dos cards são exemplos (placeholder). Substituir pelos artigos reais.
- **Links**: os cards apontam para âncoras; ligar às páginas/posts reais quando existirem.
- **Newsletter**: o formulário é um mock (só mostra confirmação). Ligar a um serviço
  (Mailchimp, Beehiiv, RD Station etc.) via `action`/embed antes de publicar.
- **Números do autor** e bio — confirmar com o Leonardo.

## Deploy (GitHub → Vercel)
Repositório git já inicializado e commitado. Fluxo:
1. Criar repo **vazio** em github.com/new
2. `git remote add origin <URL>` e `git push -u origin main`
3. Em vercel.com/new → Import → selecionar o repo → Framework "Other" → Deploy

## Estrutura
- `index.html` — a página inteira (HTML + CSS + JS embutidos)
- `assets/leonardo.jpg` — foto do Leonardo
- `serve.ps1` — servidor estático opcional para preview (ignorado no deploy)
