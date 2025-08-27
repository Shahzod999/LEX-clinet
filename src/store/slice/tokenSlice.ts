import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";

const initialState = {
  token: localStorage.getItem("adminToken") || null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export const selectedToken = (state: RootState) => state.token.token;
export default tokenSlice.reducer;
