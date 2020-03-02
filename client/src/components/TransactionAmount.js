import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionAmount = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={sign === "-" ? "minus" : "plus"} transaction={transaction}>
      {transaction.text}{" "}
      <span className={sign === "-" ? "minus" : "plus"}>
        {sign}$ {Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction._id)}
      >
        x
      </button>
    </li>
  );
};
