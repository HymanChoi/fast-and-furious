import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport, { VantResolve } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
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
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
      apis: "/src/apis",
      assets: "/src/assets",
      components: "/src/components",
      plugins: "/src/plugins",
      utils: "/src/utils",
      styles: "/src/styles",
    },
  },
});
