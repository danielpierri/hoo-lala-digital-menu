import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hoo-lala-digital-menu/", // This is the base url of the website
  plugins: [react()],
})
