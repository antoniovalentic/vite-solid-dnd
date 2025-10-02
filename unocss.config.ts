import {defineConfig} from '@unocss/vite';
import {presetMini} from '@unocss/preset-mini';
import {presetLightDark} from 'unocss-preset-light-dark';

export default defineConfig({
  presets: [
    presetMini(),
    presetLightDark({
      dark: 'class',
      light: 'class',
      // CHECK OUT LATER: https://coolors.co/2b2d42-8d99ae-edf2f4-ef233c-d90429
      colors: {
        primary: ['#EDF2F4', '#2B2D42'],
        'primary-highlight': '#8D99AE',
        secondary: ['#2B2D42', '#EDF2F4'],
        'secondary-highlight': '#8D99AE',
        accent: '#D90429',
        'accent-highlight': '#EF233C',
      },
      /*colors: {
        primary: ['#f0f2f2', '#38393b'], // [light, dark]
        secondary: ['#18202d', '#fffdfc'],
        accent: '#9c4140', // same color for both modes
      },*/
    }),
  ],
  /*shortcuts: [
    {
      // shortcuts to multiple utilities
      btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
      'btn-green': 'text-white bg-green-500 hover:bg-green-700',
      // single utility alias
      red: 'text-red-100',
    },
    // dynamic shortcuts (input-green, input-red etc.)
    [/^input-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
  ],*/
});
