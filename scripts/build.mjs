import { build } from 'vite'

try {
  await build()
  console.log('Vite build completed via scripts/build.mjs')
} catch (e) {
  console.error(e)
  process.exit(1)
}
