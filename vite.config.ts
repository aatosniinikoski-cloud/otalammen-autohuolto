import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/otalammen-autohuolto/',
  plugins: [react()],
})
