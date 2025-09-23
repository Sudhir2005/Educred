import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js", // ✅ ensures Tailwind + PostCSS runs
  },
  server: {
    port: 5173, // ✅ default Vite port (change if needed)
    open: true, // ✅ auto-open browser when running dev
  },
});
