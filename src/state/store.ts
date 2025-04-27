import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import coinReducer from "./coin/coinSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["coin"],
};

const persistedReducer = persistReducer(persistConfig, coinReducer);

export const store = configureStore({
  reducer: {
    coin: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
