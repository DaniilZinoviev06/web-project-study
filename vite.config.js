import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/pages/index.html'),
        about: path.resolve(__dirname, 'src/pages/about.html'),
        contacts: path.resolve(__dirname, 'src/pages/contacts.html'),
        instructions: path.resolve(__dirname, 'src/pages/instructions.html'),
        problems: path.resolve(__dirname, 'src/pages/problems.html'),
        news: path.resolve(__dirname, 'src/pages/news.html')
      },
      output: {
        entryFileNames: 'scripts/[name].js',
        chunkFileNames: 'scripts/[name].js',
        assetFileNames: 'assets/[name][extname]',
        manualChunks: undefined
      },
      preserveEntrySignatures: 'strict' // для MPA
    },
    outDir: 'dist',
    emptyOutDir: true,
    minify: false
  },
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
