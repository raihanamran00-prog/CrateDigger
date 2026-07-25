import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // The README documents the dev server on port 3000, so pin it here rather
    // than using Vite's 5173 default.
    port: 3000,
  },
})
