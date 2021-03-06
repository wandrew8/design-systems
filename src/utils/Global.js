import { createGlobalStyle } from "styled-components";
import { primaryFont, headingFont } from "./typography";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 65px 0 0;
  font-family: ${primaryFont};
  background-color: ${props => props.theme === 'darkTheme' ? 'black' : 'white'};
  color: ${props => props.theme.textColorOnPrimary};
  background-color: ${props => props.theme.primaryColor};
  transition: 300ms ease-in-out;
}
main {
  width: 90%;
  margin: 0 auto;
}
h1, h2, h3, h4, h5, h6 {
    font-family: ${headingFont};
}
`;