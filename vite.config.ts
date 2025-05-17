import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'


import autoprefixer from "autoprefixer"
import postcssScss from "postcss-scss"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      }
    })],
    build: {
      outDir: "build",
      cssCodeSplit: true,
      emptyOutDir: true,
      minify: false,
      assetsDir: "" 
    },  
    css: {
      postcss: {
        syntax: postcssScss,
        plugins: [autoprefixer],
      },  
    },  
    clearScreen: true,
    publicDir: false, 
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
