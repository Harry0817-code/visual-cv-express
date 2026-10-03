import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/visual-cv-express/",

  tanstackStart: {
    server: {
      entry: "server",
    },

    spa: {
      enabled: true,
    },
  },
});