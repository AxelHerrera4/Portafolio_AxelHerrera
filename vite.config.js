import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  // When deploying to GitHub Pages under a repo like https://<user>.github.io/<repo>/
  // set base to '/<repo>/' or set the VITE_BASE env var in the build environment.
  const base = process.env.VITE_BASE || '/'

  return {
    base,
    plugins: [react()]
  }
})
