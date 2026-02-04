# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Installation & Build (bun)

If you use `bun` as your package manager, the steps we used to reproduce a production build are:

```bash
# install deps (if you hit package resolution errors, run the exact add commands shown below)
bun install

# if bun fails to resolve a plugin version, add the plugin explicitly (examples used in this repo):
bun add @tailwindcss/postcss@latest
bun add vite-plugin-compression@latest

# build for production
bun run build
```

Notes:
- This project emits gzip and brotli companion files for JS/CSS when built.
- If you prefer `npm`/`pnpm`, the equivalent commands are `npm install` and `npm run build`.
