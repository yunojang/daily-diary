import color from "constant/color";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Nanum-Gothic";       
    src: url("/font/NanumGothic.ttf"); 
  }

  * {
    font-family: 'Nanum-Gothic', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::selection {
    background: ${color.bright};
  }

  body {
    background: #f4fbfe;
  }

  ul,li {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
    user-select: none;
    background: none;
  }

  input {
    outline: none;
  }
`;
