import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import Axios from "axios";

// Initial State
const initialState = {
  transactions: [
    // mock data
    // { id: 1, text: "Flowers", amount: -20 },
    // { id: 2, text: "Salary", amount: 300 },
    // { id: 3, text: "Books", amount: -10 },
    // { id: 4, text: "Grocery", amount: 150 }
  ],
  error: null,
  loading: true
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  // Integrate to back-end
  async function getTransactions() {
    try {
      const res = await Axios.get("/api/v1/transactions");
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await Axios.delete(`/api/v1/transactions/${id}`); // deleting from the server first
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error
      });
    }
  }

  // Actions
  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await Axios.post("/api/v1/transactions", transaction, config);

      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
