import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from './Context';

ReactDOM.render(
  <BrowserRouter>
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
