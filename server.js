require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./app/db.config");
require("dotenv/config");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(config.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.get("/brands", async (request, respons) => {
  const mongo = await mongoose.connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  const db = await mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    // we're connected!
  });
});
app.listen(8080);
