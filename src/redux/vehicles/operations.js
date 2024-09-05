import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchVehicles = createAsyncThunk(
  "vehicles/catalog",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.get("/campers", {
        params: {
          page,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        code: error.code || "ERR_NETWORK",
      });
    }
  }
);

export const fetchDetailsById = createAsyncThunk(
  "vehicles/details",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
