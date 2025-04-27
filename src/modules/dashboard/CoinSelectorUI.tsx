import React from "react";
import { CoinSelectorUIProps } from "./CoinSelectorProps";
import { CoinSelector, TimeframeSelector, PriceChart } from "./components";

const CoinSelectorUI: React.FC<CoinSelectorUIProps> = ({
  coinList,
  selectedCoin,
  selectedTimeframe,
  price,
  priceHistory,
  loadingCoins,
  onSelectCoin,
  onSelectTimeframe,
}) => {
  if (loadingCoins) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full px-4">
      <CoinSelector
        coinList={coinList}
        selectedCoin={selectedCoin}
        onSelectCoin={onSelectCoin}
      />

      <div className="mt-4 text-xl">
        {price && (
          <>
            Current Price:
            <span className="font-semibold">${price.toFixed(2)}</span>
          </>
        )}
      </div>

      <TimeframeSelector
        selected={selectedTimeframe}
        onChange={onSelectTimeframe}
      />

      {priceHistory.length > 0 && selectedCoin ? (
        <PriceChart data={priceHistory} timeframe={selectedTimeframe} />
      ) : (
        <div className="mt-4">Please select a coin to show history</div>
      )}
    </div>
  );
};

export default CoinSelectorUI;
