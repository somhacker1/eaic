import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGithubPages = process.env["GITHUB_PAGES"] === "true";
const base = process.env["BASE_PATH"] ?? "/";

export default isGithubPages
  ? defineConfig({
      tanstackStart: {
        prerender: { enabled: true, crawlLinks: true },
        pages: [{ path: "/" }, { path: "/about" }, { path: "/programs" }, { path: "/enroll" }],
      },
      nitro: { config: { preset: "static" } },
      vite: { 
        base,
        build: {
          rollupOptions: {
            external: [],
          },
        },
      },
    })
  : defineConfig({
      vite: {
        base,
      },
    });
