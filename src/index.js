import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import { RecoilRoot } from "recoil";
// import Router from "./Routes";
import GlobalStyle from "./styles/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import media from "./styles/media.js";
import Routes from "./Routes";

ReactDOM.render(
  <RecoilRoot>
    <ThemeProvider theme={{ ...theme, ...media }}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById("root")
);
