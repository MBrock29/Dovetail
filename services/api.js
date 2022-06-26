import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ugc-api.dovetailgames.com/mods",
  }),
  endpoints: (builder) => ({
    mods: builder.query({
      query: () => "?page=1&pageSize=12&sortBy=mostPopular",
    }),
    modById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useModsQuery, useModByIdQuery } = api;
