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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<App/>}/>
              <Route path="/404" exact element={<Page_404/>} />
              <Route path="/registration" exact element={<Registration/>}/>
              <Route path="/payment" exact element={<Payment/>} />
              <Route path="/login" exact element={<Login/>}/>
              <Route path="/bag" exact element={<Bag/>}/>
              <Route path="/product" exact element={<Product/>}/>
          </Routes>
      </BrowserRouter>
);

