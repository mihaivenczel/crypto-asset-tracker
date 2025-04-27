import { selectCoin, selectTimeframe } from "../src/state/coin/coinSlice";
import { Timeframe } from "../src/shared";
import { createMockStore } from "../__mocks__/store";
import { getTopCoins } from "../src/services/api/methods/coinGecko";

jest.mock("../src/services/api/methods/coinGecko.ts", () => ({
  getTopCoins: jest.fn(),
}));

describe("Coin Slice Business Logic", () => {
  beforeEach(() => {
    (getTopCoins as jest.Mock).mockResolvedValue([
      { id: "bitcoin", symbol: "btc", name: "Bitcoin" },
      { id: "ethereum", symbol: "eth", name: "Ethereum" },
    ]);
  });
  it("should update selectedCoinId when selectCoin is dispatched", () => {
    const store = createMockStore({
      coin: {
        topCoins: [],
        selectedCoinId: "",
        selectedTimeframe: Timeframe.SEVEN_DAYS,
        price: null,
        priceHistory: [],
        loading: false,
        _persist: {
          version: 1,
          rehydrated: true,
        },
      },
    });

    store.dispatch(selectCoin("bitcoin"));

    const state = store.getState();
    expect(state.coin.selectedCoinId).toBe("bitcoin");
  });

  it("should update selectedTimeframe when selectTimeframe is dispatched", () => {
    const store = createMockStore({
      coin: {
        topCoins: [],
        selectedCoinId: "",
        selectedTimeframe: Timeframe.SEVEN_DAYS,
        price: null,
        priceHistory: [],
        loading: false,
        _persist: {
          version: 1,
          rehydrated: true,
        },
      },
    });

    store.dispatch(selectTimeframe(Timeframe.THIRTY_DAYS));

    const state = store.getState();
    expect(state.coin.selectedTimeframe).toBe(Timeframe.THIRTY_DAYS);
  });
});
