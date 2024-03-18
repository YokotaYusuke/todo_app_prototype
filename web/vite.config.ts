/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: 'src/tests/setupTests.ts',
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
})