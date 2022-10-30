import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import OrderDetails from './components/pages/orderdetails';
import CustomerDetails from './components/pages/customerdetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<App />}>
          <Route path="/order-details" exact={true} element={<OrderDetails />} />
          <Route path="/customer-details" exact={true} element={<CustomerDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
