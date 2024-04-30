import { createApp } from "./createApp";

const app = createApp();

const start = async () => {
  try {
    app.listen(5000, async () => {
      console.log(`Running on Port 5000`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
