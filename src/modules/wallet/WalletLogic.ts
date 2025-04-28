import { useDispatch, useSelector } from "react-redux";
import { connectWallet } from "../../services/metamask/wallet";
import {
  setWalletAddress,
  disconnectWallet,
} from "../../state/wallet/walletSlice";
import { RootState } from "../../state/store";

export const useWalletLogic = () => {
  const dispatch = useDispatch();
  const address = useSelector((state: RootState) => state.wallet.address);

  const onConnect = async () => {
    try {
      const walletAddress = await connectWallet();
      dispatch(setWalletAddress(walletAddress));
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const onDisconnect = () => {
    dispatch(disconnectWallet());
  };

  return {
    address,
    onConnect,
    onDisconnect,
  };
};
