import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import UnocssPlugin from '@unocss/vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    UnocssPlugin({
      // your config or in uno.config.ts
    }),
    devtools({
      autoname: true,
    }),
    solidPlugin(),
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
