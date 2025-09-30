import viteLogo from '/vite.svg';
import solidLogo from '/solidjs.svg';
import typescriptLogo from '/assets/typescript.svg';
import {Component} from 'solid-js';
import {ImageLink} from '@comp/ImageLink';
import {Counter} from '@comp/CounterGlobal';

const App: Component = () => {
  return (
    <div>
      <ImageLink link="https://solidjs.com" src={solidLogo} alt="Solid.js logo" />
      <ImageLink link="https://vitejs.dev" src={viteLogo} alt="Vite logo" class="vite" />
      <ImageLink
        link="https://www.typescriptlang.org/"
        src={typescriptLogo}
        alt="TypeScript logo"
        class="ts"
      />
      <h1 class="text-[3.2em] line-height-[1.1]">Solid + Vite + TypeScript</h1>
      <div class="card">
        <Counter />
      </div>
      <p class="text-[#888]">
        Click on the Solid, Vite and TypeScript logos to learn more
      </p>
    </div>
  );
};

export default App;
