import { createSlice } from "@reduxjs/toolkit";
import getAll from "../../services/favorites";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: getAll(),
    // isLoading: true,
  },
  reducers: {
    addItem(state, action) {
      let updatedFav = state.favorites.concat(action.payload);
      localStorage.setItem("favorites", JSON.stringify(updatedFav));

      return { ...state, favorites: updatedFav };
    },

    isLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

// export const initializeFavorites = () => {
//   return (dispatch) => {
//     const favorites = favoritesService.getAll();
//     dispatch(addItem(favorites));
//     // dispatch(isLoading(false));
//   };
// };

export const { addItem, isLoading } = favoritesSlice.actions;

export default favoritesSlice.reducer;
