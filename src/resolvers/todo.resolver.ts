import {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../services/todo.service";

export const TodoResolver = {
  Query: {
    getTodos: () => getAllTodos(),
    getTodo: (parent: any, { id }: { id: string }) => getTodo(id),
  },
  Mutation: {
    createTodo: (parent: any, args: { title: string; description: string }) =>
      createTodo(args.title, args.description),
    updateTodo: (parent: any, args: { id: string; updates: any }) =>
      updateTodo(args.id, args.updates),
    deleteTodo: (parent: any, args: { id: string }) => deleteTodo(args.id),
  },
};
