import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // This sets '@' to point to the 'src' directory
    },
  },
  server: {
    port: 5000, // or any port you prefer
  },
});
