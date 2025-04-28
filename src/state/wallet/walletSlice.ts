import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WalletState } from "./walletState";

const initialState: WalletState = {
  address: null,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWalletAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
    disconnectWallet(state) {
      state.address = null;
    },
  },
});

export const { setWalletAddress, disconnectWallet } = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
export default walletSlice.reducer;
