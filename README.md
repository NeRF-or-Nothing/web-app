<img src="https://user-images.githubusercontent.com/50580723/174387286-a6cd50fe-cb54-4f87-807b-6653c1c8e80e.png" width="280"> 
# nerf-or-nothing-web-view 

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
## Requirements

For development, you will only need [Node.js](https://nodejs.org/en/download/) installed in your environement.
Download the installer by clicking on the link.

## Addtional requirement(git)
It is also recommended that git is available in your PATH, since npm may require it , which you can find [here](https://git-scm.com/downloads).

## Clone Repository and Fork on github

git clone git@github.com:NeRF-or-Nothing/web-app.git

## Directory

Open Command Prompt by typing 'cmd' at your local directory: (using WSL might give you "cannot find module 'worker_threads' error")

```
..\web-app\src
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## Success on npm

If everthing went well, you should see something similar to:

```
  vite v2.9.12 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in 429ms.

```
## Open web page on localhost

Copy http://localhost:3000/ and paste it in your browser

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
