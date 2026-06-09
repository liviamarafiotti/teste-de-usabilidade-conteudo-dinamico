# teste-de-usabilidade-conteudo-dinamico

Implementação do **fluxo interativo de Conteúdo dinâmico** nos componentes de
Landing Page do RD Station Marketing, a partir do design e protótipo no Figma
([-CROSS- Hiperpersonalização](https://www.figma.com/design/JgrIaQytG4tBake4IhKf5o/-CROSS--Hiperpersonaliza%C3%A7%C3%A3o?node-id=8708-1386&m=dev)).

A navegação entre as etapas funciona como uma **SPA fluida**, com estado
centralizado e transições/animações suaves.

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) (tokens, fontes e animações em `tailwind.config.js`)
- Fontes: Nunito Sans e DM Sans (Google Fonts)

## Fluxo (Tarefa 1 — Personalizar o título para tráfego do LinkedIn)

1. **Editor** → clique em **Conteúdo dinâmico** no subheader abre o dropdown de regras.
2. **Editar regras** abre o **Drawer** "Conteúdo dinâmico" (com overlay).
3. **+ Criar regra** → cria a regra, seleciona a categoria **Fonte de referência**,
   define a condição (`É igual a` / `Contém` …) e o **link do LinkedIn**, e renomeia
   para **Regra Linkedin** (ícone de lápis).
4. **Salvar** → **Toast** de sucesso, o drawer fecha e a regra aparece selecionada no subheader.
5. Selecione o **título** no canvas → o painel do elemento abre com o **Switch de
   Conteúdo dinâmico**; ao ativar, o título é destacado com o selo dinâmico (estado final).
6. Excluir uma regra dispara um **Modal** de confirmação.

## Estrutura

```
public/assets/            Assets exportados do Figma (logo, prévia, paleta, painéis)
src/
  flow/                   Estado centralizado (reducer + context)
    types.ts, reducer.ts, FlowContext.tsx
  components/
    ui/                   Primitivos reutilizáveis
      Icon, Button, Input, Select, Switch, Message,
      Drawer, Modal, Toast, Dropdown, Overlay
    editor/               Componentes da tela do editor
      Navbar, Subheader, Preview, ComponentList,
      ElementPanel, DynamicContentDrawer, RuleAccordion
  screens/
    EditorScreen.tsx      Composição da tela + overlays
  App.tsx                 FlowProvider + EditorScreen
```

## Componentes interativos (estados)

- **Button** — variantes `primary`, `inverse`, `soft`, `outline`, `ghost`, `link`,
  `danger`, com estados default/hover/active.
- **Input** — estados default (placeholder) e filled.
- **Select** — abre dropdown de opções.
- **Switch** — default e active.
- **Drawer / Modal** — abrem com overlay e animação.
- **Toast** — auto-dispensável.

## Animações

Transições padronizadas em `duration-200` / `ease-in-out`:
`fade-in`, `slide-in-right` (drawer), `slide-in-left` (painel do elemento),
`scale-in` (modal), `toast-in`.

## Scripts

```bash
npm install      # instala dependências
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (type-check + bundle)
npm run preview  # serve o build de produção
```

## Notas de implementação

- A prévia central da Landing Page e a paleta de componentes são imagens exportadas
  do Figma (no design são representadas como imagens estáticas). Toda a camada
  interativa (drawer, selects, inputs, switches, modal, toast, dropdowns) é
  construída com componentes React reais.
- O frame segue a largura de referência de 1440px do design.
