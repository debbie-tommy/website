import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-styled-components', {
            displayName: true,
            fileName: false
          }]
        ]
      }
    })
  ],
  resolve: {
    alias: {
      'styled-components': 'styled-components/dist/styled-components.cjs.js',
    },
  },
  optimizeDeps: {
    include: ['styled-components'],
  },
  build: {
    commonjsOptions: {
      include: [/framer-motion/, /styled-components/],
    },
  },
})
