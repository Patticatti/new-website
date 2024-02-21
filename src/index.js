import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { chakraTheme } from './chakraTheme';

ReactDOM.render(
  <ChakraProvider theme={chakraTheme} cssVarsRoot="body">
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
