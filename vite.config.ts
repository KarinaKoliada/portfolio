import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      assets: path.resolve(__dirname, "src/assets"),
      styles: path.resolve(__dirname, "src/styles"),
      locales: path.resolve(__dirname, "src/locales"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
    @use "styles/variables" as *;
    @use "styles/mixins" as *;
     @use "styles/breakpoints" as *;
  `,
      },
    },
  },
});
