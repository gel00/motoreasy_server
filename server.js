require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./app/db.config");
require("dotenv/config");
const brandsRoute = require("./app/routes/brandsRoute");
const tyresRoute = require("./app/routes/tyresRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/brands", brandsRoute);
app.use("/tyres", tyresRoute);

mongoose.connect(
  config.url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to the db");
  }
);

app.listen(8080);
