import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Project-React-PAW/', // <-- nama repo GitHub-mu
});
