import { createSlice } from "@reduxjs/toolkit";
import { fetchVehicles, fetchDetailsById } from "./operations.js";
import { fetchFilterVehicles } from "../filters/operations.js";

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    items: [],
    details: null,
    loadMore: false,
    favorites: [],
    page: 1,
    limit: 4,
    loading: false,
    error: null,
    modalIsOpen: false,
    modalImageSrc: null,
  },
  reducers: {
    clearItems: state => {
      state.items = [];
    },
    addFavorite: (state, action) => {
      const id = action.payload;
      if (!state.favorites.includes(id)) {
        state.favorites.push(id);
      }
    },
    removeFavorite: (state, action) => {
      const id = action.payload;
      state.favorites = state.favorites.filter(favId => favId !== id);
    },
    nextPage: state => {
      state.page = state.page + 1;
    },
    openModal: (state, action) => {
      state.modalIsOpen = true;
      state.modalImageSrc = action.payload;
    },
    closeModal: state => {
      state.modalIsOpen = false;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchVehicles.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.details = null;
        if (state.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }
        state.loadMore = action.payload.items.length >= state.limit;
      })
      .addCase(fetchVehicles.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(fetchDetailsById.pending, state => {
        state.error = null;
        state.loading = true;
        state.page = 1;
      })
      .addCase(fetchDetailsById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [];
        state.details = action.payload;
      })
      .addCase(fetchDetailsById.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(fetchFilterVehicles.pending, state => {
        state.error = null;
        state.loading = true;
        state.items = [];
      })
      .addCase(fetchFilterVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.loadMore = false;
      })
      .addCase(fetchFilterVehicles.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
});
export const {
  clearItems,
  addFavorite,
  removeFavorite,
  nextPage,
  openModal,
  closeModal,
} = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
