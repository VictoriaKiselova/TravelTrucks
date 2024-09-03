import { createSlice } from "@reduxjs/toolkit";
import { fetchVehicles, fetchDetailsById } from "./operations.js";

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    items: [],
    details: [],
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
        state.filterItems = [];
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.details = [];
        const newItems = action.payload.items;
        const existingIds = new Set(state.items.map(item => item.id));
        const filteredNewItems = newItems.filter(
          item => !existingIds.has(item.id)
        );
        state.items = [...state.items, ...filteredNewItems];
        state.loadMore = action.payload.items.length >= 4;
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
