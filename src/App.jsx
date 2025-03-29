import { useState } from "react";
import "./App.css";

import { IoIosMenu } from "react-icons/io";

//* Components
import AppBar from "./components/AppBar/AppBar";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionList from "./components/TransactionList/TransactionList";
import ModalNav from "./components/modalNav/modalNav";

import HomePage from "./pages/HomePage/HomePage";

//* Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transactions" element={<TransactionForm />} />
      </Routes>
    </>
  );
}

export default App;
