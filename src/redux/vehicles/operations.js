import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchVehicles = createAsyncThunk(
  "vehicles/catalog",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/campers");
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (values, thunkAPI) => {
//     try {
//       const response = await axios.post("contacts/", values);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`contacts/${contactId}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const updateContact = createAsyncThunk(
//   "contacts/updateContact",
//   async (updatedData, thunkAPI) => {
//     try {
//       const response = await axios.patch(`contacts/${updatedData.id}`, {
//         name: updatedData.name,
//         number: updatedData.number,
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );