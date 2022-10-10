import React from 'react';
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {LoginMovie} from '../src/page/login/LoginMovie'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider >
    <BrowserRouter>
      <App />
      <LoginMovie />
    </BrowserRouter>
  </ChakraProvider>
);

reportWebVitals();
