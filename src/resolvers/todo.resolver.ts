import {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../services/todo.service";

export const TodoResolver = {
  Query: {
    getTodos: async () => {
      try {
        return await getAllTodos();
      } catch (error) {
        throw new Error(`Failed to fetch todos: ${error}`);
      }
    },
    getTodo: async (parent: any, { id }: { id: string }) => {
      try {
        return await getTodo(id);
      } catch (error) {
        throw new Error(`Failed to fetch todo with id ${id}: ${error}`);
      }
    },
  },
  Mutation: {
    createTodo: async (
      parent: any,
      args: { title: string; description: string }
    ) => {
      try {
        return await createTodo(args.title, args.description);
      } catch (error) {
        throw new Error(`Failed to create todo: ${error}`);
      }
    },
    updateTodo: async (parent: any, args: { id: string; updates: any }) => {
      try {
        return await updateTodo(args.id, args.updates);
      } catch (error) {
        throw new Error(`Failed to update todo with id ${args.id}: ${error}`);
      }
    },
    deleteTodo: async (parent: any, args: { id: string }) => {
      try {
        await deleteTodo(args.id);
        return `Todo with id ${args.id} deleted successfully`;
      } catch (error) {
        throw new Error(`Failed to delete todo with id ${args.id}: ${error}`);
      }
    },
  },
};
