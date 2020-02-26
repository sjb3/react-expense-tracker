import React from "react";
import { Header } from "./components/Header";
import "./App.css";
import { Container } from "./components/Container";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Container />
    </GlobalProvider>
  );
}

export default App;
