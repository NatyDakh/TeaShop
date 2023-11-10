import './style/style.css'
import Card from "./components/card/Card"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Page_404 from "./404";


function App() {
  return (
    <div id="content">
        <Navbar />
        <main>
            <div className="block">
                <p className="text_1"> Чайный магазин Teashop</p>
                <p className="text_2">Можно поробовать на вкус не только травы, но и саму жизнь</p>
            </div>
            <div className="cards_products">
                <div className="cards">
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;