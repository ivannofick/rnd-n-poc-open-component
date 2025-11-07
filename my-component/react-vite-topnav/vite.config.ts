import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Add your own plugins here for thinkgs like eslint or typecheckers
  plugins: [tailwindcss()],
  // @ts-ignore Missing test property
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/setupTests.js'],
  }
});
