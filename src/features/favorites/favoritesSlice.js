import { createSlice } from "@reduxjs/toolkit";
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    // isLoading: true,
  },
  reducers: {
    addItem(state, action) {
      return { ...state, favorites: state.favorites.concat(action.payload) };
    },

    isLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

// export const initializeFavorites = () => {
//   return async (dispatch) => {
//     const favorites = await favoritesService.getAll();
//     dispatch(getFavorites(favorites));
//     dispatch(isLoading(false));
//   };
// };

export const { addItem, isLoading } = favoritesSlice.actions;

export default favoritesSlice.reducer;
