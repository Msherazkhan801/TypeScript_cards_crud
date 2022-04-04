import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// font awosome
import  "../node_modules/@fortawesome/fontawesome-free/css/all.css"
// bootstrap 
import"../node_modules/bootstrap/dist/css/bootstrap.css"
import"../node_modules/bootstrap/dist/js/bootstrap.bundle"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
