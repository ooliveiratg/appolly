import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "../default";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: ${DefaultTheme.font["josefin sans"]};
}
`