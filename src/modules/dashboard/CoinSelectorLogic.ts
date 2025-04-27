import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Timeframe } from "../../shared";
import { AppDispatch, RootState } from "../../state";
import {
  fetchTopCoins,
  selectCoin,
  fetchPrice,
  fetchPriceHistory,
  selectTimeframe,
} from "../../state/coin";

export const useCoinSelectorLogic = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    topCoins,
    selectedTimeframe,
    selectedCoinId,
    price,
    priceHistory,
    loading,
  } = useSelector((state: RootState) => state.coin);

  useEffect(() => {
    // debounce the call so that we don't get restricted from the api for too many reqs
    const timeoutId = setTimeout(() => {
      dispatch(fetchTopCoins());
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  const onSelectCoin = (coinId: string) => {
    dispatch(selectCoin(coinId));
    dispatch(fetchPrice(coinId));
    dispatch(fetchPriceHistory({ coinId, days: selectedTimeframe }));
  };

  const onSelectTimeframe = (days: Timeframe) => {
    dispatch(selectTimeframe(days));
    dispatch(fetchPriceHistory({ coinId: selectedCoinId, days }));
  };

  return {
    coinList: topCoins,
    selectedCoin: selectedCoinId,
    selectedTimeframe,
    price,
    priceHistory,
    loadingCoins: loading,
    onSelectCoin,
    onSelectTimeframe,
  };
};
