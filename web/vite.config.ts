import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      injectRegister: "auto",
      manifest: {
        name: "Mia Brigaderia",
        short_name: "Mia",
        description:
          "Doces artesanais com amor. Brigadeiros gourmet, brownies e delícias da Mia Brigaderia.",
        theme_color: "#86d9cb",
        background_color: "#ffffff",
        icons: [
          {
            src: "/icons/icon.svg",
            sizes: "192x192",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
          {
            src: "/icons/icon.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
