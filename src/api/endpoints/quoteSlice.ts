import type { QuoteRequest } from "@/types/quote";
import { apiSlice } from "../apiSlice";

export const quoteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuote: builder.query<QuoteRequest[], void>({
      query: () => ({
        url: `/settings/quote`,
      }),
    }),
    createQuote: builder.mutation({
      query: (quote) => ({
        url: `/settings/quote`,
        method: "POST",
        body: quote,
      }),
    }),
    deleteQuote: builder.mutation({
      query: (id) => ({
        url: `/settings/quote/${id}`,
        method: "DELETE",
      }),
    }),
    updateQuote: builder.mutation({
      query: ({ id, ...quote }) => ({
        url: `/settings/quote/${id}`,
        method: "PUT",
        body: quote,
      }),
    }),
    getQuoteById: builder.query({
      query: (id) => ({
        url: `/settings/quote/${id}`,
      }),
    }),
  }),
});

export const { useGetQuoteQuery, useCreateQuoteMutation, useDeleteQuoteMutation, useUpdateQuoteMutation, useGetQuoteByIdQuery } = quoteApiSlice;
