import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        contacts: path.resolve(__dirname, 'contacts.html'),
        instructions: path.resolve(__dirname, 'instructions.html'),
        problems: path.resolve(__dirname, 'problems.html'),
        news: path.resolve(__dirname, 'news.html')
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  base: './',
  server: {
    open: '/src/pages/index.html'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
