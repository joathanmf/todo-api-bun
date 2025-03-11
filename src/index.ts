import { routes } from "./routes"; 
import { errorHandler } from "./middlewares/error.middleware";

const server = Bun.serve({
  port: Bun.env.PORT ?? 3000,
  routes,
  error: errorHandler
});

console.log(`Server is running on port ${server.port}`);
