import React from "react";
import { WalletUIProps } from "./WalletProps";

const WalletUI: React.FC<WalletUIProps> = ({
  address,
  onConnect,
  onDisconnect,
}: WalletUIProps) => {
  return (
    <div className="mt-4">
      {address ? (
        <div className="flex flex-col items-center">
          <p className="text-sm mb-2">Connected as:</p>
          <p className="text-xs break-all">{address}</p>
          <button
            onClick={onDisconnect}
            className="mt-2 p-2 rounded bg-red-500 text-white"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={onConnect}
          className="p-2 rounded bg-blue-500 text-white"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletUI;
