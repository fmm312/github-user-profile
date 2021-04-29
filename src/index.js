import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/variables.css';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
