import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',          // ⬅️ **यही नया जोड़ें**
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
