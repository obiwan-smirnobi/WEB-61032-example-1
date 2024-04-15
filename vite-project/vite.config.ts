import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';
import fixReactVirtualized from 'esbuild-plugin-react-virtualized';
import svgr from 'vite-plugin-svgr';
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      plugins: [fixReactVirtualized],
    },
  },
  plugins: [
    react(),
    // svgr(),
    svgLoader(),
    mockDevServerPlugin(),
  ],
  server: {
    proxy: {
      '^/api': { target: 'http://localhost:8888' }
    }
  }
})
