# p5.js + React + Vite

This template provides a minimal setup to get p5.js + React working in Vite with HMR and some ESLint rules.

See [./src/App.jsx](./src/App.jsx) and [./src/Sketch.js](./src/Sketch.js) for a working example of how to connect a p5.js sketch to the DOM via React `useRef`. The code in [./src/Sketch.js](./src/Sketch.js) is the solution for the [p5.js Get Started Tutorial](https://v1.p5js.org/tutorials/get-started/).


Note that changing the p5.js file does not trigger HMR with the current setup.

## Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
