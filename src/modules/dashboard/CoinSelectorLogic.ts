import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Timeframe } from "../../shared";
import { AppDispatch, RootState } from "../../state/store";
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
    _persist,
  } = useSelector((state: RootState) => state.coin);

  const { rehydrated } = _persist;

  useEffect(() => {
    if (!rehydrated) return;

    // debounce the call so that we don't get restricted from the api for too many reqs
    const timeoutId = setTimeout(() => {
      if (topCoins.length === 0) {
        dispatch(fetchTopCoins());
      }
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, rehydrated, topCoins.length]);

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
    loadingCoins: rehydrated,
    onSelectCoin,
    onSelectTimeframe,
  };
};
