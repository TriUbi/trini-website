import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/trini-website/",
  server: {
    open: true,
    strictPort: false,
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "profile.png") {
            return "favicon.[ext]";
          }
          return "assets/[name]-[hash][ext]";
        },
      },
    },
  },
});
