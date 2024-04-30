import { GraphQLError } from "graphql";
import {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../services/todo.service";
import logger from "../logger";

export const TodoResolver = {
  Query: {
    getTodos: async () => {
      try {
        return await getAllTodos();
      } catch (error) {
        logger.error(error);
        throw new GraphQLError(`Failed to fetch todos: ${error}`);
      }
    },
    getTodo: async (parent: any, { id }: { id: string }) => {
      try {
        return await getTodo(id);
      } catch (error) {
        logger.error(error);
        throw new GraphQLError(`Failed to fetch todo by id ${id}: ${error}`);
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
        logger.error(error);
        throw new GraphQLError(`Failed to create todo: ${error}`);
      }
    },
    updateTodo: async (parent: any, args: { id: string; updates: any }) => {
      try {
        return await updateTodo(args.id, args.updates);
      } catch (error) {
        logger.error(error);
        throw new GraphQLError(
          `Failed to update todo by id ${args.id}: ${error}`
        );
      }
    },
    deleteTodo: async (parent: any, args: { id: string }) => {
      try {
        await deleteTodo(args.id);
        return `Todo with id ${args.id} deleted successfully`;
      } catch (error) {
        logger.error(error);
        throw new GraphQLError(
          `Failed to delete todo by id ${args.id}: ${error}`
        );
      }
    },
  },
};
