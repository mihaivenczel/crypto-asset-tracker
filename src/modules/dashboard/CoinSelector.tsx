import React from "react";
import { Coin } from "../shared";

interface AssetSelectorProps {
  coinList: Coin[];
  selectedCoin: string;
  onSelectCoin: (assetId: string) => void;
}

const AssetSelector: React.FC<AssetSelectorProps> = ({
  coinList,
  selectedCoin,
  onSelectCoin,
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <label htmlFor="asset" className="text-lg font-semibold">
        Select a coin:
      </label>
      <select
        id="asset"
        value={selectedCoin}
        onChange={(e) => onSelectCoin(e.target.value)}
        className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
      >
        {coinList.map((coin) => (
          <option key={coin.id} value={coin.id}>
            {coin.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AssetSelector;
