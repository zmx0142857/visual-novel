import { resolve } from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    solidPlugin(),
  ],
  server: {
    port: 2333,
  },
  build: {
    target: 'esnext',
  },
})
