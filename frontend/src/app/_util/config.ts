import { createPublicClient, createWalletClient, custom, http } from "viem";
import { mainnet } from "wagmi";

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http()
})

export const walletClient = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum)
})

export const [account] = await walletClient.getAddresses()
