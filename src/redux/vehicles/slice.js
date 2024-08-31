import { createSlice } from "@reduxjs/toolkit";
import {
  fetchVehicles,
  fetchDetailsById,
  //   deleteContact,
  //   updateContact,
} from "./operations.js";

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    items: [],
    details: [],
    // transmission: "",
    // engine: "",
    // AC: false,
    // bathroom: false,
    // kitchen: false,
    // TV: false,
    // radio: false,
    // refrigerator: false,
    // microwave: false,
    // gas: false,
    // water: false,
    // loading: false,
    // error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchVehicles.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.details = [];
        state.items = action.payload;
        (state.transmission = action.payload[0].transmission),
          (state.engine = action.payload[0].engine),
          (state.AC = action.payload[0].AC),
          (state.bathroom = action.payload[0].bathroom),
          (state.kitchen = action.payload[0].kitchen),
          (state.TV = action.payload[0].TV),
          (state.radio = action.payload[0].radio),
          (state.refrigerator = action.payload[0].refrigerator),
          (state.microwave = action.payload[0].microwave),
          (state.gas = action.payload[0].gas),
          (state.water = action.payload[0].water);
      })
      .addCase(fetchVehicles.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(fetchDetailsById.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchDetailsById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null; state.items = [];
        state.details = action.payload;
       
      })
      .addCase(fetchDetailsById.rejected, state => {
        state.error = true;
        state.loading = false;
      }),
});

export default vehiclesSlice.reducer;
