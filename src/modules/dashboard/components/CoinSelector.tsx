import { Coin } from "../../../shared";

interface CoinSelectorProps {
  coinList: Coin[];
  selectedCoin: string;
  onSelectCoin: (assetId: string) => void;
}

const CoinSelector = ({
  coinList,
  selectedCoin,
  onSelectCoin,
}: CoinSelectorProps) => {
  console.log(selectedCoin, "coin");
  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <label htmlFor="coin" className="text-lg font-semibold">
        Select Coin:
      </label>

      <select
        id="coin-select"
        value={selectedCoin}
        onChange={(e) => onSelectCoin(e.target.value)}
        className="p-2 rounded-md border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      >
        <option value="" disabled>
          Select a coin...
        </option>

        {coinList.map((coin) => (
          <option key={coin.id} value={coin.id}>
            {coin.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CoinSelector;
