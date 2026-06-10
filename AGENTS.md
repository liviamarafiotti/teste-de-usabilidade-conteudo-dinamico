# AGENTS.md

## Project overview

Frontend-only React SPA prototype for RD Station Marketing's **Conteúdo dinâmico** (Dynamic Content) usability test. No backend, database, or Docker services.

## Cursor Cloud specific instructions

### Services

| Service | Port | Command |
|---------|------|---------|
| Vite dev server | 5173 | `npm run dev` |

Only the Vite dev server is required for local development and manual testing.

### Common commands

See `README.md` and `package.json` for standard scripts:

- **Install:** `npm ci` (or `npm install`)
- **Dev:** `npm run dev` → http://localhost:5173
- **Build:** `npm run build` (runs `tsc -b` type-check + Vite production bundle)
- **Preview prod build:** `npm run build` then `npm run preview` → http://localhost:4173 with base path `/teste-de-usabilidade-conteudo-dinamico/`

### Lint and tests

- **No ESLint/Prettier** is configured. Type safety is enforced via `tsc -b` during `npm run build`.
- **No automated test suite** (no Vitest/Jest/Cypress/Playwright). Use `npm run build` as the quality gate and manual browser testing for flows.

### Hello-world verification flow

1. Start `npm run dev` and open http://localhost:5173
2. Click **Conteúdo dinâmico** in the subheader → **Criar regra**
3. In the drawer, create a rule with category **Fonte de referência**, condition **Contém**, value `linkedin.com`
4. Save and confirm the success toast
5. Select a canvas element and enable the **Conteúdo dinâmico** switch in the element panel
6. Verify the dynamic content badge appears on the canvas

### Notes

- Node.js 20+ recommended (CI uses Node 20; Node 22 works locally).
- Google Fonts load from CDN in `index.html`; cosmetic only — app works offline with system font fallbacks.
- Dev server uses base path `/`; production/preview uses `/teste-de-usabilidade-conteudo-dinamico/` (see `vite.config.ts`).
