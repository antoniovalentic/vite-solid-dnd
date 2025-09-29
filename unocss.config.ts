import {defineConfig} from '@unocss/vite';
import {presetMini} from '@unocss/preset-mini';

export default defineConfig({
  presets: [presetMini()],
  shortcuts: [
    {
      // shortcuts to multiple utilities
      btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
      'btn-green': 'text-white bg-green-500 hover:bg-green-700',
      // single utility alias
      red: 'text-red-100',
    },
    // dynamic shortcuts (input-green, input-red etc.)
    [/^input-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
  ],
});
