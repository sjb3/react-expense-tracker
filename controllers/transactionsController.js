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
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (err) {
    // Check for validation errors
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      res.status(500).json({
        success: false,
        error: `Error: ${err.message}`
      });
    }
  }
};

// @desc DELETE all transactions
// @route DELETE /api/vi/transactions/:id
// @access public
exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.statsu(404).json({
        success: false,
        error: "No transaction found"
      });
    }

    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `Error: ${err.message}`
    });
  }
};
