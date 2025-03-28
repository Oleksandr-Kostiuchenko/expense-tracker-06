import { createSlice } from "@reduxjs/toolkit";
import { date } from "yup";

export const dateConstructor = () => {
  const dateNow = new Date();
  const date = String(dateNow.getDate()).padStart(2, "0");
  const month = String(dateNow.getMonth() + 1).padStart(2, "0");

  return `${date}/${month}`;
};

const slice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [
      {
        id: 1,
        text: "Invest in crypto",
        category: "expense",
        amount: 0,
        date: dateConstructor(),
      },
      {
        id: 2,
        text: "Job salary",
        category: "earning",
        amount: 0,
        date: dateConstructor(),
      },
    ],
    totalBalance: 0,
  },
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      action.payload.category === "expense"
        ? (state.totalBalance -= action.payload.amount)
        : (state.totalBalance += action.payload.amount);
    },
    removeTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (el) => el.id !== action.payload.id
      );
      action.payload.category === "expense"
        ? (state.totalBalance += action.payload.amount)
        : (state.totalBalance -= action.payload.amount);
    },
  },
});

export default slice.reducer;
export const { addTransaction, removeTransaction } = slice.actions;
