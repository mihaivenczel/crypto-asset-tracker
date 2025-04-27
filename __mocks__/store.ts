import { configureStore } from "@reduxjs/toolkit";
import { coinReducer } from "../src/state/coin/coinSlice";
import { RootState } from "../src/state";

export const createMockStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: {
      coin: coinReducer,
    },
    preloadedState: preloadedState as RootState,
  });
};
