import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchFilterValue = createAsyncThunk(
  "filter/filterValue",
  async ({ page, limit, filterParameters }, { rejectWithValue }) => {
    try {
      const { loadMore, ...cleanFilterParameters } = filterParameters;
      console.log(...cleanFilterParameters);
      const response = await axios.get("/campers", {
        params: {
          page,
          limit,
          ...cleanFilterParameters,
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
