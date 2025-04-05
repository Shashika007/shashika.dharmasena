import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/shashika.dharmasena",
  build: {
    rollupOptions: {
      external: [
        '/shashika.dharmasena/assets/shashika.jpg'
      ]
    }
  }
})
