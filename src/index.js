import React from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "style/GlobalStyle";

import Routes from "Routes/Routes";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
