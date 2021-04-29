import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  button {
    cursor: pointer;
    outline: none;
  }

  p, span {
    font-family: 'Roboto', monospace;
  }

  h1, h2, h3, h4, input {
    font-family: 'Roboto Mono', monospace;
  }

  a {
    text-decoration: none;
    color: #1158c7;
  }

`