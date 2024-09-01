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
    loading: false,
    error: null,
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
    clearFilters: state => {
      state.location = "";
      state.transmission = "";
      state.AC = false;
      state.bathroom = false;
      state.kitchen = false;
      state.TV = false;
      state.form = "";
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchFilterValue.pending, (state, action) => {
        state.error = null;
        state.loading = true;
        state.filterItems = [];
        state.loadMore = action.payload.items.length >= 4;
      })
      .addCase(fetchFilterValue.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [];
        state.filterItems = action.payload.items;
        state.loadMore = action.payload.items.length >= 4;
      })
      .addCase(fetchFilterValue.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
