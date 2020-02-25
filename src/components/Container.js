import React from "react";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";

export const Container = () => {
  return (
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
    </div>
  );
};
