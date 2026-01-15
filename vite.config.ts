import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' //importação para reconhecer o @ do chakra UI

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // traduzir o "@" para a pasta "src"
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
