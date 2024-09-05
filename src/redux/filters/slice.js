import { createSlice } from "@reduxjs/toolkit";
import { fetchFilterVehicles } from "./operations";

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
  },
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
