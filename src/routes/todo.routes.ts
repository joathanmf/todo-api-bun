import { todoController } from "../controllers/todo.controller";

export const todoRoutes = {
  "/api/v1/todos": {
    GET: (req: Request) => todoController.all(req),
    POST: (req: Request) => todoController.create(req),
  },
};