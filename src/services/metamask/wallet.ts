import detectEthereumProvider from "@metamask/detect-provider";

interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
}

export const connectWallet = async () => {
  const provider = (await detectEthereumProvider()) as EthereumProvider | null;

  if (provider) {
    const accounts = (await provider.request({
      method: "eth_requestAccounts",
    })) as string[];
    const address = accounts[0];
    return address;
  } else {
    throw new Error("Metamask not found. Please install it.");
  }
};
