import { useState, useEffect } from "react";

import { Coin, Timeframe } from "../shared";
import CoinSelector from "./CoinSelector";
import PriceChart from "./PriceChart";
import TimeframeSelector from "./TimeframeSelector";
import {
  getCoinMarketChart,
  getSimplePrice,
  getTopCoins,
} from "../../services/api/methods/coinGecko";

const CoinSelectorModule = () => {
  const [coinList, setCoinList] = useState<Coin[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<string>("");
  const [price, setPrice] = useState<number | null>(null);
  const [priceHistory, setPriceHistory] = useState<
    { date: string; price: number }[]
  >([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>(
    Timeframe.SEVEN_DAYS
  );
  const [loadingCoins, setLoadingCoins] = useState<boolean>(true);

  const fetchCoinList = async () => {
    try {
      setLoadingCoins(true);
      const coins = await getTopCoins();
      setCoinList(coins);
      setSelectedCoin(coins[0]?.id || "");
    } catch (error) {
      console.error("Error fetching coins:", error);
    } finally {
      setLoadingCoins(false);
    }
  };

  const fetchPrice = async (coinId: string) => {
    try {
      const data = await getSimplePrice([coinId]);
      setPrice(data[coinId].usd);
    } catch (error) {
      setPrice(null);
    }
  };

  const fetchMarketChart = async (coinId: string, days: Timeframe) => {
    try {
      const data = await getCoinMarketChart(coinId, days);
      const formatted = data.prices.map(
        ([timestamp, price]: [number, number]) => ({
          date: new Date(timestamp).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          price,
        })
      );
      setPriceHistory(formatted);
    } catch (error) {
      setPriceHistory([]);
    }
  };

  useEffect(() => {
    fetchCoinList();
  }, []);

  useEffect(() => {
    if (selectedCoin) {
      fetchPrice(selectedCoin);
      fetchMarketChart(selectedCoin, selectedTimeframe);
    }
  }, [selectedCoin, selectedTimeframe]);

  const handleSelectCoin = (coinId: string) => {
    setSelectedCoin(coinId);
  };

  const handleSelectTimeframe = (days: Timeframe) => {
    setSelectedTimeframe(days);
  };

  if (loadingCoins) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-gray-500">
        Loading coins...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full px-4">
      <CoinSelector
        coinList={coinList}
        selectedCoin={selectedCoin}
        onSelectCoin={handleSelectCoin}
      />

      <div className="mt-4 text-xl">
        {price !== null ? (
          <>
            Current Price: <span className="font-semibold">${price}</span>
          </>
        ) : (
          <>Loading price...</>
        )}
      </div>

      <TimeframeSelector
        selected={selectedTimeframe}
        onChange={handleSelectTimeframe}
      />

      {priceHistory.length > 0 && (
        <PriceChart data={priceHistory} timeframe={selectedTimeframe} />
      )}
    </div>
  );
};

export default CoinSelectorModule;
