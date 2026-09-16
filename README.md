# design-portfolio

Portfolio pessoal, construído com [Next.js](https://nextjs.org) e publicado gratuitamente na [Vercel](https://vercel.com).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `app/` — rotas (Home, Sobre, Projetos, Contato) usando o App Router.
- `components/` — componentes reutilizáveis (Header, Footer, etc.).
- `design-exports/` — arquivos `.html` de referência exportados do Claude Design, usados como fonte para construir as páginas reais. Não fazem parte do build.

## Deploy

Build de produção:

```bash
npm run build
```

O deploy é feito conectando este repositório a um projeto na Vercel (plano gratuito/Hobby).
