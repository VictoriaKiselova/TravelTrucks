import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    transmission: "",
    AC: false,
    bathroom: false,
    kitchen: false,
    TV: false,
    form: "",
  },
  reducers: {
    setFilters: (state, action) => {
      const { ...newFilters } = action.payload;
      return {
        ...state,
        ...newFilters,
      };
    },
    resetFilters: state => {
      state.location = "";
      state.transmission = "";
      state.AC = false;
      state.bathroom = false;
      state.kitchen = false;
      state.TV = false;
      state.form = "";
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
