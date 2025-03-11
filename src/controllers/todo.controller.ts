import { todoService } from "../services/todo.service";
import { config } from "../config";

export class TodoController {
  async all(req: Request) {
    try {
      const url = new URL(req.url);
      const limitParam = url.searchParams.get("limit");
      const parsedLimit = limitParam
        ? parseInt(limitParam, 10)
        : config.db.maxQueryLimit;
      const limit =
        parsedLimit >= 1 && parsedLimit <= config.db.maxQueryLimit
          ? parsedLimit
          : config.db.maxQueryLimit;

      const result = await todoService.all(limit);
      return Response.json(result);
    } catch (error) {
      console.error({ error });

      return Response.json({ error: "Failed to fetch todos" }, { status: 500 });
    }
  }

  async create(req: Request) {
    try {
      const body = await req.json();
      const todoData = {
        task: body.task,
        description: body.description,
        ...(body.dueDate && { dueDate: new Date(body.dueDate) }),
      };
      
      const result = await todoService.create(todoData);

      if (result) {
        return Response.json(result, { status: 201 });
      }

      return Response.json({ error: "Failed to create todo" }, { status: 400 });
    } catch (error) {
      console.error({ error });

      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";

      return Response.json(
        { error: "Failed to create todo", details: errorMessage },
        { status: 400 }
      );
    }
  }
}

export const todoController = new TodoController();
