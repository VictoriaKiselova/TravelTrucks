import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "./vehicles/slice.js";
import filtersReducer from "./filters/slice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigVehiclesss = {
  key: "vehicles",
  storage,
  whitelist: ["favorites"],
};

const persistConfigFilters = {
  key: "filters",
  storage,
  whitelist: [],
};

const pVehiclesReducer = persistReducer(
  persistConfigVehiclesss,
  vehiclesReducer
);
const pFiltersReducer = persistReducer(persistConfigFilters, filtersReducer);

export const store = configureStore({
  reducer: {
    vehicles: pVehiclesReducer,
    filters: pFiltersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
