import { Timeframe } from "../../shared/Timeframe";
import { Coin } from "../../shared/Coin";

export interface CoinState {
  topCoins: Coin[];
  selectedCoinId: string;
  selectedTimeframe: Timeframe;
  price: number | null;
  priceHistory: { date: string; price: number }[];
  loading: boolean;
}

export type SimplePriceResponse = Record<string, { usd: number }>;

export interface CoinMarketChartResponse {
  prices: [number, number][];
}
