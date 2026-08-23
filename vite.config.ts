import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGithubPages = process.env["GITHUB_PAGES"] === "true";
const base = process.env["BASE_PATH"] ?? "/";

// GitHub Pages can only serve static files, so build with the nitro static
// preset and prerender every route. The custom worker server entry is skipped
// in that mode because there is no server runtime on Pages.
export default isGithubPages
  ? defineConfig({
      tanstackStart: {
        prerender: { enabled: true, crawlLinks: true },
        pages: [{ path: "/" }, { path: "/about" }, { path: "/programs" }, { path: "/enroll" }],
      },
      nitro: { config: { preset: "static" } },
      vite: { base },
    })
  : defineConfig({
      tanstackStart: {
        server: { entry: "./src/server.ts" },
      },
      vite: {
        base,
        environments: {
          ssr: { build: { rollupOptions: { input: "./src/server.ts" } } },
          nitro: { build: { rollupOptions: { input: "./src/server.ts" } } },
        },
      },
    });
