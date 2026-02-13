
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Change 'your-repo-name' to your actual GitHub repository name if not using a custom domain
  // base: '/your-repo-name/', 
  build: {
    outDir: 'dist',
  },
});
