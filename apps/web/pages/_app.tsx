import "../styles/global.css";

import type { AppProps } from "next/app";
import { NavBar } from "ui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
