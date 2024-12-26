const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection success");
    app.listen(3000, () => {
      console.log("Server started running at http://localhost:3000");
    });
  } catch (e) {
    console.log(`Database connection failed. Error:${e}`);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
