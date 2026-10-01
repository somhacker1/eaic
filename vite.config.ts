import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGithubPages = process.env["GITHUB_PAGES"] === "true";
const isNetlify = process.env["NETLIFY"] === "true";
const isStaticHost = isGithubPages || isNetlify;
const base = process.env["BASE_PATH"] ?? "/";

export default isStaticHost
  ? defineConfig({
      // Disable the nitro/Cloudflare deploy plugin so the Vite server
      // environment builds a plain `server.js` that the prerender preview
      // server can load. We only ship the prerendered static HTML + assets.
      nitro: false,
      tanstackStart: {
        prerender: { enabled: true, crawlLinks: true },
        pages: [{ path: "/" }, { path: "/about" }, { path: "/programs" }, { path: "/enroll" }],
      },
      vite: {
        base,
      },
    })
  : defineConfig({
      vite: {
        base,
      },
    });
