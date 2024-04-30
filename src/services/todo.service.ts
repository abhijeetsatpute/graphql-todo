import { Todo } from "../models/Todo";
import { TodoType } from "../types/todo";

export const getAllTodos = async (): Promise<TodoType[]> => {
  return await Todo.find();
};

export const createTodo = async (
  title: string,
  description: string
): Promise<TodoType> => {
  return await Todo.create({ title, description });
};

export const getTodo = async (id: string): Promise<TodoType | null> => {
  return await Todo.findById(id);
};

export const updateTodo = async (
  id: string,
  updates: any
): Promise<TodoType | null> => {
  return await Todo.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteTodo = async (id: string): Promise<TodoType | null> => {
  return await Todo.findByIdAndDelete(id);
};
