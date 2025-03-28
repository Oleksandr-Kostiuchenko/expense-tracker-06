import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import transactionsReducer from "./transactionsSlice";
import filterReducer from "./filterSlice";

const persistedTransactionsReducer = persistReducer(
  {
    key: "transactions",
    storage,
  },
  transactionsReducer
);

export const store = configureStore({
  reducer: {
    expenses: persistedTransactionsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
