import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    counter: counterReducer,
  },
});

