"use strict";

const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });
const app = express();
const transactions = require("./routes/transactions");

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`.bgMagenta
      .bold
  )
);