"use strict";

const express = require("express");
const router = express.Router();
const {
  getTransactions,
  postTransactions,
  deleteTransactions
} = require("../controllers/transactionsController");

router
  .route("/")
  .get(getTransactions)
  .post(postTransactions);

router.route("/:id").delete(deleteTransactions);

module.exports = router;
