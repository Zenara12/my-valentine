import path from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  base: '/',
  resolve: {
    alias: {
      // Optional: You can also set up an alias for '@' to point to 'src'
      '@': path.resolve(__dirname, './src'),
    },
  },
})
