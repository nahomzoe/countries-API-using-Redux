import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "../features/countries/countriesSlice";
import favoritesSlice from "../features/favorites/favoritesSlice";

export default configureStore({
  reducer: {
    countries: countriesSlice,
    favorites: favoritesSlice,
  },
});
