import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF",
    prepareHeaders: (headers) =>
      headers.set("Content-Type", "application/json"),
  }),
  endpoints: (builder) => ({
    fetchPlayers: builder.query({
      query: () => "/players",
    }),
  }),
});

export default puppyBowlApi;

export const { useFetchPlayersQuery } = puppyBowlApi;
