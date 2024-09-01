import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "./vehicles/slice";
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
  whitelist: ["vehicles"],
};

const pVehiclesReducer = persistReducer(
  persistConfigVehiclesss,
  vehiclesReducer
);

export const store = configureStore({
  reducer: {
    vehicles: pVehiclesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
