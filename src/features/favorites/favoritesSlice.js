import { createSlice } from "@reduxjs/toolkit";
import getAll from "../../services/favorites";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: getAll(),
    // isLiked: false,
    // isLoading: true,
  },
  reducers: {
    addItem(state, action) {
      let updatedFav = state.favorites.concat(action.payload);
      localStorage.setItem("favorites", JSON.stringify(updatedFav));
      return { ...state, favorites: updatedFav };
    },
    removeItem(state, action) {
      let filteredFav = state.favorites.filter(function(ele) {
        return ele.cca3 !== action.payload.cca3;
      });
      localStorage.setItem("favorites", JSON.stringify(filteredFav));
      return { ...state, favorites: filteredFav };
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

export const { addItem, removeItem, isLoading } = favoritesSlice.actions;

export default favoritesSlice.reducer;
