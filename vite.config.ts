import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGithubPages = process.env["GITHUB_PAGES"] === "true";
const base = process.env["BASE_PATH"] ?? "/";

export default defineConfig({
  tanstackStart: {
    server: { entry: "./src/server.ts" },
  },
  ...(isGithubPages ? { nitro: { config: { preset: "static" } } } : {}),
  vite: {
    base,
    environments: {
      ssr: {
        build: {
          rollupOptions: {
            input: "./src/server.ts",
          },
        },
      },
      nitro: {
        build: {
          rollupOptions: {
            input: "./src/server.ts",
          },
        },
      },
    },
  },
});