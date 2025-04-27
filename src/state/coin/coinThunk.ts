import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCoinMarketChart,
  getSimplePrice,
  getTopCoins,
} from "../../services/api/methods/coinGecko";
import { Timeframe } from "../../shared";
import { CoinMarketChartResponse, SimplePriceResponse } from "./coinState";

export const fetchTopCoins = createAsyncThunk(
  "coin/fetchTopCoins",
  async () => {
    const { data } = await getTopCoins();
    return data;
  }
);

export const fetchPrice = createAsyncThunk(
  "coin/fetchPrice",
  async (coinId: string) => {
    const { data } = await getSimplePrice<SimplePriceResponse>([coinId]);
    return data[coinId].usd;
  }
);

export const fetchPriceHistory = createAsyncThunk(
  "coin/fetchPriceHistory",
  async ({ coinId, days }: { coinId: string; days: Timeframe }) => {
    const { data } = await getCoinMarketChart<CoinMarketChartResponse>(
      coinId,
      days
    );
    return data.prices.map(([timestamp, price]) => ({
      date: new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      price,
    }));
  }
);
