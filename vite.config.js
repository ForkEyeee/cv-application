import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("vite.config.js", "./src"),
    },
  },
  server: {
    open: true,
  },
});
