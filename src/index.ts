import { MONGO_URI, PORT } from "./config";
import { startServer } from "./startServer";
import { connectDB } from "./db/connect";

const start = async () => {
  const app = await startServer();
  const appPort = PORT || 5000;
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }
    await connectDB(MONGO_URI);
    app.listen(appPort, async () => {
      console.log(`Running on Port ${appPort}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
