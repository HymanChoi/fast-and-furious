import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import styleImport, { VantResolve } from "vite-plugin-style-import";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    /* CSS 预处理器 */
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/styles/var.scss";',
      },
    },
  },
  server: {
    port: 9999,
    proxy: {
      "/mock": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mock/, ""),
      },
    },
  },
});
