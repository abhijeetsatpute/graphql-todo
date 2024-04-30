import { MONGO_URI, PORT } from "./config";
import { startServer } from "./startServer";
import { connectDB } from "./db/connect";
import logger from "./logger";
import { GraphQLError } from "graphql";

const start = async () => {
  try {
    if (!MONGO_URI) {
      throw new GraphQLError("MONGO_URI is not defined");
    }
    await connectDB(MONGO_URI);
    const { url } = await startServer();
    console.log(`🚀  Server ready at: ${url}`);
  } catch (error) {
    logger.error(error);
  }
};

start();
