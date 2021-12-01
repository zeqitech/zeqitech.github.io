import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import cssLoader from 'css-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cssLoader()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
