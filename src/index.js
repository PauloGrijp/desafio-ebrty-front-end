import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/global';

// import { mirageServer } from './mirageJs/createServer';
// mirageServer()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
