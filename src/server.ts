import { ApolloServer } from "@apollo/server";
import { startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import { TodoSchema } from "./schemas/todo.schema";
import { TodoResolver } from "./resolvers/todo.resolver";
import { MONGO_URI } from "./config";
import { GraphQLError } from "graphql";
import { connectDB } from "./db/connect";
import { handlers } from "@as-integrations/aws-lambda";
import logger from "./logger";

const server = new ApolloServer({
  typeDefs: [TodoSchema],
  resolvers: [TodoResolver],
});

if (!MONGO_URI) {
  throw new GraphQLError("mongo connect failed");
}
connectDB(MONGO_URI);

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler()
);
