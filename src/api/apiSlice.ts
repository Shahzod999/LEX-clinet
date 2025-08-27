import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store/index";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_PUBLIC_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).token.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Quote"],
  endpoints: () => ({}),
});
