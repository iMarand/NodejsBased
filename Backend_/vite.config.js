import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173, // Change this if needed
    open: true,  // Auto-open browser on start
  },
  resolve: {
    alias: {
      '@': '/src', // Allows imports like '@/components/MyComponent.vue'
    },
  },
});
