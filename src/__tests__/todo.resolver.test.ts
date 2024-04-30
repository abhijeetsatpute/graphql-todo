import { TodoResolver } from "../resolvers/todo.resolver";
import {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../services/todo.service";

jest.mock("../services/todo.service");

describe("Todo Resolver", () => {
  afterEach(jest.clearAllMocks);

  const mockTodo = {
    id: "1",
    title: "Test Todo",
    description: "Test Description",
    completed: false,
  };

  describe("Query.getTodos", () => {
    it("should call getAllTodos and return todos", async () => {
      const mockTodos = [mockTodo];
      (getAllTodos as jest.Mock).mockResolvedValue(mockTodos);

      const result = await TodoResolver.Query.getTodos();

      expect(getAllTodos).toHaveBeenCalled();
      expect(result).toEqual(mockTodos);
    });
  });

  describe("Query.getTodo", () => {
    it("should call getTodo with provided id and return todo", async () => {
      const mockId = "1";
      (getTodo as jest.Mock).mockResolvedValue(mockTodo);

      const result = await TodoResolver.Query.getTodo(null, { id: mockId });

      expect(getTodo).toHaveBeenCalledWith(mockId);
      expect(result).toEqual(mockTodo);
    });
  });

  describe("Mutation.createTodo", () => {
    it("should call createTodo with provided arguments and return created todo", async () => {
      const mockTitle = "Test Todo";
      const mockDescription = "Test Description";
      (createTodo as jest.Mock).mockResolvedValue(mockTodo);

      const result = await TodoResolver.Mutation.createTodo(null, {
        title: mockTitle,
        description: mockDescription,
      });

      expect(createTodo).toHaveBeenCalledWith(mockTitle, mockDescription);
      expect(result).toEqual(mockTodo);
    });
  });

  describe("Mutation.updateTodo", () => {
    it("should call updateTodo with provided id and updates and return updated todo", async () => {
      const mockId = "1";
      const mockUpdates = { title: "Updated Title" };
      (updateTodo as jest.Mock).mockResolvedValue(mockTodo);

      const result = await TodoResolver.Mutation.updateTodo(null, {
        id: mockId,
        updates: mockUpdates,
      });

      expect(updateTodo).toHaveBeenCalledWith(mockId, mockUpdates);
      expect(result).toEqual(mockTodo);
    });
  });

  describe("Mutation.deleteTodo", () => {
    it("should call deleteTodo with provided id and return success message", async () => {
      const mockId = "1";
      const mockSuccessMessage = `Todo with id ${mockId} deleted successfully`;

      (deleteTodo as jest.Mock).mockResolvedValue(undefined);

      const result = await TodoResolver.Mutation.deleteTodo(null, {
        id: mockId,
      });

      expect(deleteTodo).toHaveBeenCalledWith(mockId);
      expect(result).toEqual(mockSuccessMessage);
    });
  });
});
