import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

async function main() {
  await mongoose.connect(config.db_uri as string);

  app.listen(config.port, () => {
    console.log(`Ecommerce server running on port ${config.port}`);
  });
}

main();
