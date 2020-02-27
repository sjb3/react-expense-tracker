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

    console.log(`Mongo DB connected: ${conn.connection.host}`.bgCyan.red);
  } catch (err) {
    console.log(`Mongo DB NOT connected: ${err.message}`.bgBlack.white);
    // Case not working, exit out
    process.exit(1);
  }
};

module.exports = connectDB;
