import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { chakraTheme } from './chakraTheme'

createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={chakraTheme} cssVarsRoot="body">
    <App />
  </ChakraProvider>
)
