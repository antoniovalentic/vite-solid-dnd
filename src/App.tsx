import viteLogo from '/vite.svg';
import solidLogo from '/solidjs.svg';
import unocssLogo from '/unocss.svg';
import typescriptLogo from '/assets/typescript.svg';

import {Component} from 'solid-js';
import {ImageLink} from '@comp/ImageLink';
import {Counter} from '@comp/CounterGlobal';
import {ThemeSwitch} from '@comp/ThemeSwitch';

import usePrefsStore from '@store/userPrefs';
import initTheme from '@utils/theme';
import Button from '@comp/Button';

const App: Component = () => {
  // Initial theme selection
  const themePref = usePrefsStore((store) => store.theme);
  initTheme(themePref());

  return (
    <div>
      <ImageLink link="https://solidjs.com" src={solidLogo} alt="Solid.js logo" />
      <ImageLink link="https://vitejs.dev" src={viteLogo} alt="Vite logo" class="vite" />
      <ImageLink link="https://unocss.dev" src={unocssLogo} alt="UnoCSS logo" />
      <ImageLink
        link="https://www.typescriptlang.org/"
        src={typescriptLogo}
        alt="TypeScript logo"
        class="ts"
      />
      <h1 class="text-[3.2em] line-height-[1.1]">Solid + Vite + UnoCSS + TypeScript</h1>
      <a>TEST LINK</a>
      <div class="card">
        <Counter />
      </div>
      <div class="card">
        <ThemeSwitch />
      </div>
      <div class="card flex flex-col gap-2">
        <Button variant="outline">BUTTON OUTLINE</Button>
        <Button variant="primary">BUTTON PRIMARY</Button>
        <Button variant="secondary">BUTTON SECONDARY</Button>
        <Button variant="ghost">BUTTON GHOST</Button>
        <Button variant="link">BUTTON LINK</Button>
      </div>
      <div class="card flex flex-col gap-2">
        <Button disabled variant="outline">
          DISABLED OUTLINE
        </Button>
        <Button disabled variant="primary">
          DISABLED PRIMARY
        </Button>
        <Button disabled variant="secondary">
          DISABLED SECONDARY
        </Button>
        <Button disabled variant="ghost">
          DISABLED GHOST
        </Button>
        <Button disabled variant="link">
          DISABLED LINK
        </Button>
      </div>
      <p class="text-[#888]">
        Click on the Solid, Vite and TypeScript logos to learn more
      </p>
    </div>
  );
};

export default App;
