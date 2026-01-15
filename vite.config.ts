import { defineConfig } from 'vite'
import postcss from 'postcss'
import { resolve } from "path";

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/main.js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'assets/css/style.css';
          }
          if (name && name.includes('img')) {
            return 'assets/img/[name][extname]';
          }
          return 'assets/[name][extname]';
        }
      }
    }
  },
})