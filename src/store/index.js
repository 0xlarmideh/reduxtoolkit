import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import { pokemonApi } from "../services";
export default configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    // [contactUsApi.reducerPath]: contactUsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware)
});