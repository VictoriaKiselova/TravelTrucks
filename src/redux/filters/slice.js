import { createSlice } from "@reduxjs/toolkit";
import { fetchFilterValue } from "./operations";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filterItems: [],
    location: "",
    transmission: "",
    AC: false,
    bathroom: false,
    kitchen: false,
    TV: false,
    form: "",
    loadMore: false,
  },
  reducers: {
    setFilters: (state, action) => {
      const { loadMore, ...newFilters } = action.payload;
      return {
        ...state,
        ...newFilters,
      };
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchFilterValue.pending, (state, action) => {
        state.error = null;
        state.loading = true;
        state.location = "";
        state.transmission = "";
        state.AC = false;
        state.bathroom = false;
        state.kitchen = false;
        state.TV = false;
        state.form = "";
        state.filterItems = [];
      })
      .addCase(fetchFilterValue.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [];
        state.filterItems = action.payload.items;
      })
      .addCase(fetchFilterValue.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
