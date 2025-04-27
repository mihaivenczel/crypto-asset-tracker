import { RootState } from "../store";

export const selectTopCoins = (state: RootState) => state.coin.topCoins;
export const selectSelectedCoin = (state: RootState) =>
  state.coin.selectedCoinId;
export const selectSelectedTimeframe = (state: RootState) =>
  state.coin.selectedTimeframe;
export const selectPrice = (state: RootState) => state.coin.price;
export const selectPriceHistory = (state: RootState) => state.coin.priceHistory;
export const selectLoading = (state: RootState) => state.coin.loading;
