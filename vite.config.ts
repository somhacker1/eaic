// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When building for GitHub Pages we prerender every page to static HTML and
// serve it from a sub-path (https://<user>.github.io/<repo>/).
const isGithubPages = process.env["GITHUB_PAGES"] === "true";
const base = process.env["BASE_PATH"] ?? "/";

export default defineConfig({
  tanstackStart: {
    // Specify the full path to your server entry point
    server: { entry: "./src/server.ts" },
    ...(isGithubPages
      ? {
          prerender: { enabled: true, crawlLinks: true },
          pages: [
            { path: "/" },
            { path: "/about" },
            { path: "/programs" },
            { path: "/enroll" },
          ],
        }
      : {}),
  },
  ...(isGithubPages ? { nitro: { config: { preset: "static" } } } : {}),
  vite: {
    base,
    environments: {
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