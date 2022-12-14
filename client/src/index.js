import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

