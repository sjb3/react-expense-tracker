"use strict";

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // without below, you'd get warnings
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(
      `MongoDB connected: ${conn.connection.host}`.white.bgMagenta.bold
    );
  } catch (err) {
    console.error(`Failed to connect to DB: ${err.message}`.white.bgBlack.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
