import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css'; // <-------
import './index.css'; // üle saan kirjutada ülemisi, kui on all
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

// Navigeerimiseks
// 1. katkestama programmi töö ja lisama juurde module, library / moodul, teek
//    ja lisama    npm install react-router-dom
// 2. lisada <BrowserRouter>  tag <App> tag ümber
//     lisaks BrowserRouter importida 
// 3. App.js faili ja looma URL ja HTML seosed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
