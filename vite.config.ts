import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), styleImport({
    resolves: [VantResolve()],
    libs: [
      {
        libraryName: "vant",
        esModule: true,
        resolveStyle: (name) => {
          return `../es/${name}/style/index`;
        },
      },
    ],
  })],
  server: {
    proxy: {
      '/api':
      {
        target: "http://124.220.43.171:10601",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '') // 没事不要替代掉
      }
    }
  }
})

