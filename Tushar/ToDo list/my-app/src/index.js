import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import Navbar from './Navbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
    <Navbar />
    <App />
  </>
);

