import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { TodoSchema } from "./schemas/todo.schema";
import { TodoResolver } from "./resolvers/todo.resolver";

export async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: [TodoSchema],
    resolvers: [TodoResolver],
  });
  await server.start();

  app.use(express.json());
  app.use("/graphql", expressMiddleware(server));
  return app;
}
