import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoinState } from "./coinState";
import { fetchTopCoins, fetchPrice, fetchPriceHistory } from "./coinThunk";
import { Timeframe } from "../../shared";

const initialState: CoinState = {
  topCoins: [],
  selectedCoinId: "",
  selectedTimeframe: Timeframe.SEVEN_DAYS,
  price: null,
  priceHistory: [],
  loading: false,
};

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    selectCoin(state, action: PayloadAction<string>) {
      state.selectedCoinId = action.payload;
    },
    selectTimeframe(state, action: PayloadAction<Timeframe>) {
      state.selectedTimeframe = action.payload;
    },
  },
  extraReducers: (action) => {
    action
      .addCase(fetchTopCoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTopCoins.fulfilled, (state, action) => {
        state.topCoins = action.payload;
        state.loading = false;
      })
      .addCase(fetchTopCoins.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchPrice.fulfilled, (state, action) => {
        state.price = action.payload;
      })
      .addCase(fetchPriceHistory.fulfilled, (state, action) => {
        state.priceHistory = action.payload;
      });
  },
});

export const { selectCoin, selectTimeframe } = coinSlice.actions;

export default coinSlice.reducer;
