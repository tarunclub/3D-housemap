import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Router from "next/router";

import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 3,
  color: "#1E40AF",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </Provider>
    </SessionProvider>
  );
}
