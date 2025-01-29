import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/minportfolio.github.io/",
  server: {
    open: true,
    strictPort: false,
  },
});
