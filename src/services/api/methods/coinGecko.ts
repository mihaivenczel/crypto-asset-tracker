import { Coin } from "../../../shared";
import { createApiClient } from "../apiClient";

const api = createApiClient();

export const getSimplePrice = <T = unknown>(ids: string[]) => {
  return api.get<T>("/simple/price", {
    params: {
      ids: ids.join(","),
      vs_currencies: "usd",
    },
  });
};

export const getCoinMarketChart = <T = unknown>(
  coinId: string,
  days: number
) => {
  return api.get<T>(`/coins/${coinId}/market_chart`, {
    params: {
      vs_currency: "usd",
      days,
    },
  });
};

export const getTopCoins = () => {
  return api.get<Coin[]>("/coins/markets", {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 20,
      page: 1,
    },
  });
};
