import { createSlice } from "@reduxjs/toolkit";
import {
    fetchVehicles
//   addContact,
//   deleteContact,
//   updateContact,
} from "./operations.js";

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchVehicles.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchVehicles.rejected, state => {
        state.error = true;
        state.loading = false;
      })
});

export default vehiclesSlice.reducer;