import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataMeals = createApi({
  reducerPath: "dataMeals",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/",
  }),
  endpoints: builder => ({
    mealsData: builder.query({
      query: () => "/api/json/v1/1/filter.php?c=Side",
    }),
    mealsById: builder.query({
      query: id => `/api/json/v1/1/lookup.php?i=${id}`,
    }),
    categoryById: builder.query({
      query: id => `/api/json/v1/1/filter.php?c=${id}`,
    }),
    searchById: builder.query({
      query: id => `api/json/v1/1/search.php?s=${id}`,
    }),
  }),
});

export const { useMealsDataQuery, useMealsByIdQuery, useCategoryByIdQuery , useSearchByIdQuery } = dataMeals;
