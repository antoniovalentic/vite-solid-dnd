import viteLogo from '/vite.svg';
import solidLogo from '/solidjs.svg';
import typescriptLogo from '/assets/typescript.svg';
import {Component} from 'solid-js';
import {Counter} from './components/Counter';

const App: Component = () => {
  return (
    <div>
      <a href="https://solidjs.com" target="_blank">
        <img src={solidLogo} class="logo" alt="Solid.js logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={typescriptLogo} class="logo ts" alt="TypeScript logo" />
      </a>
      <h1>Solid + Vite + TypeScript</h1>
      <div class="card">
        <Counter />
      </div>
      <p class="read-the-docs">Click on the Solid, Vite and TypeScript logos to learn more</p>
    </div>
  );
};

/*import type {Component} from 'solid-js';

const App: Component = () => {
  return (
    <p class="text-4xl text-green-700 text-center py-20">
      Hello{' '}
      <a
        class="text-pink-600 hover:font-bold hover:border-1"
        href="https://antfu.me/posts/reimagine-atomic-css"
        target="atomic-css"
      >
        Atomic CSS
      </a>
      !
    </p>
  );
};*/

export default App;
