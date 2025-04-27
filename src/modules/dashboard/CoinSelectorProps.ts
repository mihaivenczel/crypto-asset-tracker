import { Coin } from "../../shared/Coin";
import { Timeframe } from "../../shared/Timeframe";

export type CoinSelectorUIProps = {
  coinList: Coin[];
  selectedCoin: string;
  selectedTimeframe: Timeframe;
  price: number | null;
  priceHistory: { date: string; price: number }[];
  loadingCoins: boolean;
  onSelectCoin: (coinId: string) => void;
  onSelectTimeframe: (days: Timeframe) => void;
};
