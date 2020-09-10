import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from './App';
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";

const Index = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <GlobalStyle />
        <App setUseDarkTheme={setUseDarkTheme} useDarkTheme={useDarkTheme} />
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));