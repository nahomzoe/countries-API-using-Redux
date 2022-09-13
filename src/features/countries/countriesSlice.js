import { createSlice } from "@reduxjs/toolkit";
import countriesService from "../../services/countries";
export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    // favorites:[],
    isLoading: true,
    search: "",
  },
  reducers: {
    getCountires(state, action) {
      state.countries = action.payload;
    },
    // getFavorites(state, action) {
    //   state.favorites = action.payload;
    // },
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
    search(state, action) {
      state.search = action.payload;
    },
  },
});

export const initializeCountries = () => {
  return async (dispatch) => {
    const countries = await countriesService.getAll();
    dispatch(getCountires(countries));
    dispatch(isLoading(false));
  };
};

export const { getCountires, isLoading, search } = countriesSlice.actions;

// export const selectCount = (state) => state.counter.value;

export default countriesSlice.reducer;
