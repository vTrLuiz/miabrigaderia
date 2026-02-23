## Mia Brigaderia — React + Tailwind + shadcn

Projeto modernizado mantendo a essência visual do site original, agora em React (Vite) com Tailwind CSS e componentes no estilo shadcn.

### Como rodar

1. Instale as dependências:
   - Em macOS (zsh):
   - Dentro da pasta `web` execute `npm install`.
2. Inicie o servidor de desenvolvimento:
   - `npm run dev`
3. Acesse `http://localhost:5173`.

### Build de produção

```
npm run build
npm run preview
```

### Notas

- As cores e o fundo em gradiente foram trazidos do CSS original.
- O botão segue o padrão do shadcn (baseado em Tailwind) configurado para usar a paleta original.

### Deploy

Vercel:

1. Faça login em vercel.com e importe o projeto.
2. Selecione a pasta `web` como raiz.
3. Vercel detecta Vite automaticamente, usando `vercel.json` (build para `dist`).

Netlify:

1. Faça login em netlify.com e crie um novo site a partir do repositório.
2. Use os campos: Build command: `npm run build`, Publish directory: `dist`.
3. O arquivo `netlify.toml` já está configurado.

### SEO e PWA

- Metas por página são gerenciadas via `react-helmet-async` pelo componente `SEO`.
- `robots.txt` e `sitemap.xml` estão em `public/`.
- PWA configurado com `vite-plugin-pwa`; ícone base em `public/icons/icon.svg`.
