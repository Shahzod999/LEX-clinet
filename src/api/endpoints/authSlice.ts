import { setToken } from "@/store/slice/tokenSlice";
import { apiSlice } from "../apiSlice";
import type { LoginResponse } from "@/types/auth";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if ("token" in data) {
            dispatch(setToken(data?.token));
            localStorage.setItem("adminToken", data?.token);
          }
        } catch (error) {
          console.error("Error saving token:", error);
        }
      },
    }),
    resetPassword: builder.mutation<{ message: string }, { token: string; password: string }>({
      query: (credentials) => ({
        url: "/users/reset-password",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useResetPasswordMutation } = authApiSlice;
