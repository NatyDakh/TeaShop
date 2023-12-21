import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page_404 from "./404";
import Registration from "./Registration";
import Payment from "./Payment";
import Login from "./Login";
import Bag from "./Bag";
import Product from "./Product";
import {store} from "./store";
import {Provider}  from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
          <main className="main">
          <Routes>
              <Route path="/"  element={<App/>}/>
              <Route path="/404" element={<Page_404/>} />
              <Route path="/registration" element={<Registration/>}/>
              <Route path="/payment" element={<Payment/>} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/bag" element={<Bag/>}/>
              <Route path="/product/:name"  element={<Product/>}/>
          </Routes>
          </main>
      </BrowserRouter>
    </Provider>
);

