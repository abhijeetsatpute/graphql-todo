import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { TodoSchema } from "./schemas/todo.schema";
import { TodoResolver } from "./resolvers/todo.resolver";
import { portNumber } from "./config";

export async function startServer() {
  const server = new ApolloServer({
    typeDefs: [TodoSchema],
    resolvers: [TodoResolver],
  });

  return startStandaloneServer(server, {
    listen: { port: portNumber },
  });
}
