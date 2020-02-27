"use strict";

const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions
} = require("../controllers/transactions-controller");

// router.get("/", (req, res) => res.send("HELLO!"));
router
  .route("/")
  .get(getTransactions)
  .post(addTransactions);

router.route("/:id").delete(deleteTransactions);

module.exports = router;
