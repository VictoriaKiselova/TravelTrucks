import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchFilterVehicles = createAsyncThunk(
  "vehicles/filters",
  async ({ filterParameters }, thunkAPI) => {
    try {
      const response = await axios.get("/campers", {
        params: filterParameters,
      });
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
