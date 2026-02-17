import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    // Configure CSS pre-processors if needed
    preprocessorOptions: {
      // scss: {
      //   additionalData: `@import "@/assets/styles/variables.scss";`
      // }
    }
  },
  optimizeDeps: {
    include: ['bootstrap/dist/js/bootstrap.bundle.js']
  }
})
