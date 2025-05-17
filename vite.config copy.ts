import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      }
    })],
  //   build: {
  //     rollupOptions: {
  //         output: {
  //             dir: 'dist/',
  //             entryFileNames: 'build.js',
  //             assetFileNames: 'build.css',
  //             chunkFileNames: "chunk.js",
  //             manualChunks: undefined,
  //         }
  //     }
  // }
})


// export default defineConfig({
//   plugins: [vue()],
//   build: {
//       rollupOptions: {
//           output: {
//               dir: '~/plugin/assets/',
//               entryFileNames: 'plugin.js',
//               assetFileNames: 'plugin.css',
//               chunkFileNames: "chunk.js",
//               manualChunks: undefined,
//           }
//       }
//   }
// })
