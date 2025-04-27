import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CoinSelectorContainer from "../src/modules/dashboard/CoinSelectorContainer";
import { getTopCoins } from "../src/services/api/methods/coinGecko";
import { createMockStore } from "../__mocks__/store";

jest.mock("../src/services/api/methods/coinGecko.ts", () => ({
  getTopCoins: jest.fn(),
}));

describe("CoinSelectorContainer UI", () => {
  beforeEach(() => {
    (getTopCoins as jest.Mock).mockResolvedValue([
      { id: "bitcoin", symbol: "btc", name: "Bitcoin" },
      { id: "ethereum", symbol: "eth", name: "Ethereum" },
    ]);
  });
  it("should show Loading... when loadingCoins is true", () => {
    const store = createMockStore({
      coin: {
        topCoins: [],
        selectedCoinId: "",
        selectedTimeframe: 7,
        price: null,
        priceHistory: [],
        loading: true,
        _persist: {
          version: 1,
          rehydrated: true,
        },
      },
    });

    render(
      <Provider store={store}>
        <CoinSelectorContainer />
      </Provider>
    );

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
});
