import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {initializeApp} from 'firebase/app'
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyCmVPiuZ055dwngXBdpVDf-90Yb5moj1E8",
  authDomain: "projrjs.firebaseapp.com",
  projectId: "projrjs",
  storageBucket: "projrjs.appspot.com",
  messagingSenderId: "213519997109",
  appId: "1:213519997109:web:ea9a5ad20dbd5f64f586fc"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
