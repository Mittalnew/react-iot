import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { ToastProvider } from './ToastProvider';
import { ToastProvider } from './Toast/ToastProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ToastProvider>
    <App />
    </ToastProvider>
  </React.StrictMode>
);


