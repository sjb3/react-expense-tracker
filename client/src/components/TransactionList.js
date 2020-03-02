import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TransactionAmount } from "./TransactionAmount";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <TransactionAmount transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
};
