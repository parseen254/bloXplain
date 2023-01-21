import "../styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";

import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { WagmiConfig, configureChains, createClient } from "wagmi";

import type { AppProps } from "next/app";
import { Chain } from "wagmi/chains";
import { NavBar } from "ui";
import { publicProvider } from "wagmi/providers/public";

const hyperSpaceChain: Chain & { iconUrl: string; iconBackground: string } = {
  id: 3141,
  name: "Filecoin – Hyperspace testnet",
  network: "hyperspace",
  iconUrl: "https://avatars.githubusercontent.com/u/22014611?s=200&v=4",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "FILECOIN",
    symbol: "fTIL",
  },
  rpcUrls: {
    default: {
      http: ["https://api.hyperspace.node.glif.io/rpc/v0"],
    },
    public: {
      http: ["https://api.hyperspace.node.glif.io/rpc/v0"],
    },
  },
  blockExplorers: {
    default: { name: "Filfox", url: "https://hyperspace.filfox.info/en" },
  },
  testnet: true,
};
const { chains, provider } = configureChains(
  [hyperSpaceChain],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "bloXplain",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <NavBar />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
