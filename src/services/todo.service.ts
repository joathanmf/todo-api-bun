import { config } from "../config";
import { db, todos } from "../db";

export class TodoService {
  async all(limit: number = config.db.maxQueryLimit) {
    return await db.select().from(todos).limit(limit);
  }

  // TODO: Criar tipo para o todoData
  async create(todoData: any) {
    const result = await db.insert(todos).values(todoData).returning();

    return result.length === 1 ? result[0] : null;
  }
}

export const todoService = new TodoService();
