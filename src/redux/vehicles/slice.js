// import { createSlice } from "@reduxjs/toolkit";
// import {
//   fetchContacts,
// //   addContact,
// //   deleteContact,
// //   updateContact,
// } from "../../redux/contacts/operations";

// const vehiclesSlice = createSlice({
//   name: "vehicles",
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   extraReducers: builder =>
//     builder
//       .addCase(fetchContacts.pending, state => {
//         state.error = null;
//         state.loading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, state => {
//         state.error = true;
//         state.loading = false;
//       })
// });

// export default contactsSlice.reducer;