import * as dotenv from "dotenv";

dotenv.config();

export const { NODE_ENV, PORT, MONGO_URI } = process.env;
export const portNumber =
  typeof PORT === "string" ? parseInt(PORT) : PORT || 4000;
