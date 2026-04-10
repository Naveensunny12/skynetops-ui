import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:
          "https://skynetops-stage1-ace5fq3dzbzbyev.swedencentral-01.azurewebsites.net",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});