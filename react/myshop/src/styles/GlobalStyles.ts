import { createGlobalStyle } from "styled-components";

export const Globalstyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #f7f7f7;
  }

  body, button, input, textarea {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.9);
      transition: filter 0.3s ease-in-out;
    }
  }
`;
