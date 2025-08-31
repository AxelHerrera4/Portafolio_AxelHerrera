import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Set base path for GitHub Pages deployment
  base: '/Portafolio_AxelHerrera/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})