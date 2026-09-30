import type { IncomingMessage, ServerResponse } from "http";
import type { Plugin, ViteDevServer } from "vite";
import { loadEnv } from "vite";

const API_ROUTES: Record<
  string,
  () => Promise<{ default: (req: { method?: string; body: unknown }, res: VercelResponse) => Promise<unknown> }>
> = {
  "/api/contact": () => import("./api/contact"),
  "/api/careers": () => import("./api/careers"),
};

type VercelResponse = {
  status: (code: number) => { json: (data: unknown) => void };
};

function createVercelStyleResponse(res: ServerResponse): VercelResponse {
  return {
    status(code: number) {
      return {
        json(data: unknown) {
          res.statusCode = code;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(data));
        },
      };
    },
  };
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

export function apiRoutesPlugin(): Plugin {
  return {
    name: "vite-api-routes",
    configureServer(server: ViteDevServer) {
      const env = loadEnv(server.config.mode, process.cwd(), "");
      Object.assign(process.env, env);

      server.middlewares.use(async (req, res, next) => {
        const pathname = req.url?.split("?")[0];
        if (!pathname?.startsWith("/api/")) {
          return next();
        }

        const loadRoute = API_ROUTES[pathname];
        if (!loadRoute) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Not Found" }));
          return;
        }

        try {
          const raw = await readBody(req);
          const body = raw ? JSON.parse(raw) : {};
          const module = await loadRoute();
          await module.default(
            { method: req.method, body },
            createVercelStyleResponse(res),
          );
        } catch (error) {
          console.error(`[api] ${pathname} error:`, error);
          if (!res.writableEnded) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Internal Server Error" }));
          }
        }
      });
    },
  };
}
