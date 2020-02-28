"use strict";

const Transaction = require("../models/Transaction");

// @desc GET all transactions
// @route GET /api/vi/transactions
// @access public
exports.getTransactions = async (req, res, next) => {
  try {
    // find them all
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `Error: ${err.message}`
    });
  }
};

// @desc POST all transactions
// @route POST /api/vi/transactions
// @access public
exports.postTransactions = async (req, res, next) => {
  res.send("POST transactions");
};

// @desc DELETE all transactions
// @route DELETE /api/vi/transactions/:id
// @access public
exports.deleteTransactions = async (req, res, next) => {
  res.send("DELETE transactions");
};
