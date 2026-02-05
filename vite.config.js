import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    // gzip
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: true,
    }),
    // brotli
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      compressionOptions: { level: 11 },
      deleteOriginFile: true,
    }),
  ],
    base: '/',
})
