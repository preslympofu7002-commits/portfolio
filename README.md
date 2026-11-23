# Presly Mpofu — portfolio

An editorial portfolio built with React, TypeScript and Vite. The identity uses warm ivory, charcoal, cobalt and vermilion, with an original mathematical SVG composition.

## Develop and build

```sh
npm install
npm run dev
npm run build
npm run preview
```

The production output is `dist/`. On Windows, use `npm.cmd` if PowerShell blocks the npm script wrapper. Netlify build settings are included in `netlify.toml`.

## Content and interactions

Personal information, projects, skills, education, experience and certificates are maintained in `src/data/`. Existing project stages are preserved: Afrim Marketplace is in development; Afrim AI, Afrim Pay and Khetvani are exploratory. The project artwork is labelled as concept work.

The page includes responsive navigation, native project disclosures, skill and learning filters, certificate filters and a native PDF dialog. The dialog supports Escape, focus containment and return to the triggering certificate. Original PDFs and the résumé are served from `public/`.

The contact form prepares a `mailto:` draft addressed to the primary email, with the secondary email copied. It does not submit or deliver messages through a backend. Visitors review and send the draft in their email application.

## Visual identity

Theme tokens and responsive layouts live in `src/index.css`. Fonts use Google Fonts with local system fallbacks. Motion respects `prefers-reduced-motion`, and the hero artwork changes only when the visitor requests a new perspective.

SEO, canonical, structured-data and social-preview URLs use the existing public Netlify domain. `scripts/gen-og.mjs` generates the SVG social card and rasterises it when the optional `sharp` module is available (or its module path is supplied as an argument).

## Deployment

Deploy `dist/` to the existing Netlify site after reviewing the local preview. Building locally does not update the public deployment.
