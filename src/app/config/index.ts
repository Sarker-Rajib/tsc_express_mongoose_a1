require("dotenv").config();

export default {
  port: process.env.PORT,
  db_uri: process.env.MURI,
};
