import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.dcfood.tanta.com.ng/api/",
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => "blog/1",
      providesTags: ["Pokemon"],
    }),
    getProductsByCategories: builder.query({
      query: () => "products/categories",
    }),
    contactUs: builder.mutation({
      query: (body) => ({
        url: "contact_us",
        method: "POST",
        body,
      }),
      providesTags: ["ContactUs"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetProductsByCategoriesQuery, useContactUsMutation } = pokemonApi;