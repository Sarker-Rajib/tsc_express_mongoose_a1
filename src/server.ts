import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

async function main() {
  await mongoose.connect(config.db_uri as string);

  app.listen(config.port, () => {
    console.log(`My app listening on port ${config.port}`);
  });
}

main();
