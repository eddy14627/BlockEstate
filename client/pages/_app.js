import React from "react";
import "../styles/globals.css";
import Script from "next/script";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "../context";
// internal imports
const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThirdwebProvider activeChain={ChainId.Mumbai}>
        <StateContextProvider>
          <Component {...pageProps} />
        </StateContextProvider>
      </ThirdwebProvider>

      <Script src="/js/vendor/jquery.js" strategy="beforeInteractive" />
      <Script
        src="/js/vendor/jquery.nice-select.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/js/vendor/jquery-ui.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/modernizer.min.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/feather.min.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/slick.min.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/sal.min.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/particles.js" strategy="beforeInteractive" />
      <Script
        src="/js/vendor/jquery.style.swicher.js"
        strategy="beforeInteractive"
      />
      <Script src="/js/vendor/js.cookie.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/count-down.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/isotop.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/imageloaded.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/backtoTop.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/odometer.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/jquery-appear.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/scrolltrigger.js" strategy="beforeInteractive" />
      <Script
        src="/js/vendor/jquery.custom-file-input.js"
        strategy="beforeInteractive"
      />
      <Script src="/js/vendor/savePopup.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/vanilla.tilt.js" strategy="beforeInteractive" />

      <Script src="/js/main.js" strategy="beforeInteractive" />

      <Script src="/js/vendor/web3.min.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/maralis.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/nft.js" strategy="beforeInteractive" />
    </>
  );
};

export default App;
