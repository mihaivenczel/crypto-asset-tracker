import { useWalletLogic } from "./WalletLogic";
import WalletUI from "./WalletUI";

const WalletContainer = () => {
  const { address, onConnect, onDisconnect } = useWalletLogic();

  return (
    <WalletUI
      address={address}
      onConnect={onConnect}
      onDisconnect={onDisconnect}
    />
  );
};

export default WalletContainer;
