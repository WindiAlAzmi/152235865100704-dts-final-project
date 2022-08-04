import { configureStore } from "@reduxjs/toolkit";

import { dataMeals } from "../services/dataMeals";

const store = configureStore({
  reducer: {
    [dataMeals.reducerPath]: dataMeals.reducer,
  },
  // Menambahkan middleware untuk caching, invalidation, polling
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(dataMeals.middleware),

});

export default store;
