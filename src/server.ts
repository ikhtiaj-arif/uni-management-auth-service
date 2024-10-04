import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

const port = process.env.PORT;
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Database is connected!");

    app.listen(port, () => {
      console.log("Application listening to port ", config.port);
    });
  } catch (e) {
    console.log("Failed to connect", e);
  }
}

main();
