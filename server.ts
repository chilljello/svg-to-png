import { join } from "path";
import { existsSync } from "fs";

const distPath = join(process.cwd(), "dist");

if (!existsSync(distPath)) {
  console.error("Error: dist folder not found. Run `bun run build` first.");
  process.exit(1);
}

const BASE = "/svg-to-png";

const server = Bun.serve({
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  async fetch(req) {
    const url = new URL(req.url);
    if (!url.pathname.startsWith(BASE)) {
      return new Response("Not Found", { status: 404 });
    }
    const path = url.pathname.slice(BASE.length) || "/";
    if (path.includes("..")) return new Response("Not Found", { status: 404 });
    const filePath = join(distPath, path === "/" ? "index.html" : path);
    const file = Bun.file(filePath);
    if (existsSync(filePath)) {
      return new Response(file);
    }
    return new Response(Bun.file(join(distPath, "index.html")));
  },
});

console.log(`Serving at http://localhost:${server.port}${BASE}/`);
