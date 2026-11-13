import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Build straight into `site/`, which is the folder firebase.json serves.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'site',
    emptyOutDir: true,
  },
});
