import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/visual-cv-express/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },

    spa: {
      enabled: true,
    },
  },
});