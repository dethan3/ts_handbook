import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["5173-dethan3-tshandbook-0mp1miflpte.ws-us118.gitpod.io"]
  },
})
