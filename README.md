# Mentoria Financial Advisor — Leonardo Ces (landing page)

Landing page local, estilo acquisition.com (dark, tipografia pesada, tática), para a
mentoria de Financial Advisor do Leonardo Ces. 100% offline, sem dependências externas.

## Como abrir (para apresentar ao Leonardo)

**Jeito mais simples:** dê **duplo clique em `index.html`**. Abre no navegador padrão e
funciona totalmente offline (não precisa de internet nem de servidor).

**Alternativa (servidor local):** rode `serve.ps1` e acesse `http://localhost:8899`:

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
```

## Como colocar a foto do Leonardo

Há dois espaços reservados (placeholders com a letra "L"):

1. **Hero** (topo, card à direita) → salve a foto como `assets/leonardo.jpg` e, no
   `index.html`, troque o bloco `<div class="photo-slot">…</div>` dentro de
   `.hero-photo` por:
   ```html
   <img src="assets/leonardo.jpg" alt="Leonardo Ces" style="width:100%;height:100%;object-fit:cover">
   ```
2. **Seção "Quem vai te mentorar"** → salve como `assets/leonardo-2.jpg` e faça a mesma
   troca dentro de `.about-photo`.

Dica: use fotos verticais (retrato), boa iluminação, fundo escuro/neutro combina melhor
com o tema.

## O que ajustar antes de publicar (conteúdo placeholder)

- **Números da barra de stats** (patrimônio, anos, alunos) — confirmar com o Leonardo.
- **Preço/parcelas** na seção de oferta — hoje estão marcados como *ilustrativos*.
- **Depoimentos** — trocar pelos casos reais de alunos (hoje há um aviso de "ilustrativos").
- **Link dos botões de CTA** — apontar para WhatsApp, checkout ou formulário de inscrição.

## Estrutura

- `index.html` — a página inteira (HTML + CSS + JS embutidos).
- `assets/` — coloque aqui as fotos.
- `serve.ps1` — servidor estático opcional para preview.
