import { routes } from "./routes";
import { errorHandler } from "./middlewares/error.middleware";

const server = Bun.serve({
  port: Bun.env.PORT ?? 3000,
  routes,
  error: errorHandler,
});

console.log(
  "\x1b[33m%s\x1b[0m",
  `=> 🚀 Server running on the port: ${server.port}`,
);
