import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import tokenReducer from "./slice/tokenSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    token: tokenReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
