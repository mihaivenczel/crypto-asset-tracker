import { createApiClient } from "../apiClient";

const api = createApiClient(baseURL);

export const getSimplePrice = (ids: string[]) => {
  return api.get(`/simple/price`, {
    params: {
      ids: ids.join(","),
      vs_currencies: "usd",
    },
  });
};

export const getCoinMarketChart = (id: string, days: number) => {
  return api.get(`/coins/${id}/market_chart`, {
    params: {
      vs_currency: "usd",
      days,
    },
  });
};

export const getTopCoins = () => {
  return api.get(`/coins/markets`, {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 20,
      page: 1,
    },
  });
};
