# teste-de-usabilidade-conteudo-dinamico

Implementação da tela **Editar Landing Page / Conteúdo dinâmico** do RD Station
Marketing, a partir do design no Figma
([-CROSS- Hiperpersonalização](https://www.figma.com/design/JgrIaQytG4tBake4IhKf5o/-CROSS--Hiperpersonaliza%C3%A7%C3%A3o?node-id=8595-12760&m=dev)).

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- CSS puro com design tokens (sem Tailwind)
- Fontes: Nunito Sans e DM Sans (Google Fonts)

## Estrutura

```
public/assets/        Assets exportados do Figma (logo, ícones, prévia, lista de componentes)
src/
  App.tsx             Frame principal (chrome + sidebar + prévia)
  components/
    Navbar.tsx        Barra superior (logo, conta, salvamento automático, sair)
    Subheader.tsx     Voltar, steps e ações (conteúdo dinâmico, teste A/B, salvar...)
    Switch.tsx        Toggle reutilizável (Tangram switch)
  index.css           Reset + design tokens
```

## Scripts

```bash
npm install      # instala dependências
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (type-check + bundle)
npm run preview  # serve o build de produção
```

## Notas de implementação

- A barra de navegação, o subheader (botão Voltar, steps e ações) e o switch de
  "Salvamento automático" foram reconstruídos como componentes React/CSS
  fiéis ao design.
- A área central de prévia da landing page e a lista de componentes da lateral
  esquerda são imagens exportadas do Figma, pois no design são representadas como
  imagens estáticas.
- O frame segue a largura de referência de 1440px do design.
