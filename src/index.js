import React, { useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom";  
import get from "lodash/get";
import isNull from "lodash/isNull";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AppLayout from "./views/AppLayout/AppLayout";
import { LANGUAGE } from "./actions/constants";

import { StoreProvider, Store } from "./store";
import * as serviceWorker from "./serviceWorker";

const App = () => {
  const { dispatch } = useContext(Store);

  const [cookies, setCookie] = useCookies(["language"]);
  const language = get(cookies, ["language"], null);

  useEffect(() => {
    if (isNull(language)) {
      setCookie("language", LANGUAGE.EN, { path: "/" });
    }
  }, [dispatch, setCookie, language]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

const Root = () => (
  <CookiesProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </CookiesProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();