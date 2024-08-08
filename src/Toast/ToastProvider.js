import React, { createContext, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create a Toast context
const ToastContext = createContext();

// ToastProvider component
export const ToastProvider = ({ children }) => {
  const notify = (message, type = 'info') => {
    toast[type](message);
  };

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ToastContext.Provider>
  );
};

// Custom hook to use the Toast context
export const useToast = () => useContext(ToastContext);
