import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import puppyBowlApi from "./puppyBowlApi";

export const store = configureStore({
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
    .concat(puppyBowlApi.middleware);
  },
});

export default store;
