# Buy a house – Savings plan | Origin

Saving goal plan simulation for **"Buy a house"**: one screen with Total amount and Reach goal by inputs, auto-calculated Monthly amount, and a Confirm button that opens a success modal. Layout and design follow the Origin Take-Home Figma (Desktop + Mobile).

**Figma:** [Desktop (1:512)](https://www.figma.com/design/1MCzMLwl7AWTJd6FI1lVeF/Take-Home-Assignment?node-id=1-512) · [Mobile (1:447)](https://www.figma.com/design/1MCzMLwl7AWTJd6FI1lVeF/Take-Home-Assignment?node-id=1-447)

## Stack

- Vue 3 (Composition API) + TypeScript
- Vite
- Tailwind CSS v4
- Vitest + @vue/test-utils
- ESLint + Prettier

## Commands

```bash
# Install
npm install

# Dev server
npm run dev

# Production build
npm run build

# Run tests
npm run test        # watch
npm run test:run    # single run

# Lint & format
npm run lint          # ESLint
npm run lint:fix      # ESLint --fix
npm run format        # Prettier --write
npm run format:check  # Prettier --check
```

## Features

- **Total amount:** Numeric-only input; formatted display with comma and two decimals.
- **Reach goal by:** Month/year picker; future months only; chevron buttons and Arrow Left/Right keys.
- **Monthly amount:** Auto-calculated as Total amount ÷ total months; breakdown caption in the info box.
- **Confirm:** Opens a success modal with goal, total amount, reach-by date, and monthly amount.

## Submission (Delivery)

Commit the solution (source code and documentation) to GitHub and set the repository to **public**. Submit only the repository link.
