import React from "react";
import { useCoinSelectorLogic } from "./CoinSelectorLogic";
import CoinSelectorUI from "./CoinSelectorUI";

const CoinSelectorContainer: React.FC = () => {
  const {
    coinList,
    selectedCoin,
    selectedTimeframe,
    price,
    priceHistory,
    loadingCoins,
    onSelectCoin,
    onSelectTimeframe,
  } = useCoinSelectorLogic();

  return (
    <CoinSelectorUI
      coinList={coinList}
      selectedCoin={selectedCoin}
      selectedTimeframe={selectedTimeframe}
      price={price}
      priceHistory={priceHistory}
      loadingCoins={loadingCoins}
      onSelectCoin={onSelectCoin}
      onSelectTimeframe={onSelectTimeframe}
    />
  );
};

export default CoinSelectorContainer;
