import React from 'react';
import App from './App';
import './index.css'
import ReactDOM from 'react-dom/client';
import Navbar from './components/navBar';



ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <Navbar />
      <App /> 
    </>
);
