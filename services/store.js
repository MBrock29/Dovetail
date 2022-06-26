import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import currentModReducer from "./currentMod";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    currentMod: currentModReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
