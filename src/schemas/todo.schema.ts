export const TodoSchema = `
  type Todo {
    id: ID!
    title: String!
    description: String!
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
    getTodo(id: ID!): Todo
  }

  type Mutation {
    createTodo(title: String!, description: String!): Todo
    updateTodo(id: ID!, updates: TodoInput!): Todo
    deleteTodo(id: ID!): Todo
  }

  input TodoInput {
    title: String
    description: String
    completed: Boolean
  }
`;
