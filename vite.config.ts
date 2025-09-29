import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
//import devtools from 'solid-devtools/vite';
import UnocssPlugin from '@unocss/vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';

export default defineConfig({
  plugins: [
    solidPlugin(),
    UnocssPlugin({
      // your config or in uno.config.ts
    }),
    eslintPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  base: '/vite-solid-dnd/',
});
