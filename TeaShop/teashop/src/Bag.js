import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./style/bag.css"
import CardList from "./components/card/CardList";
import {useSelector} from 'react-redux';
import React from "react";

function Bag(){
    const list_card = useSelector((state) => state.list_card_bag.list);
    return(
        <div>
        <Navbar/>
                <h1>Корзина</h1>
                <CardList list_card={list_card}/>
                <div className="display">
                    <h2> Итог: 680P</h2>
                </div>
                <div className="display">
                    <div className="formied">
                        <a href='/payment'>Оформить заказ</a></div>
                </div>
            <Footer />
        </div>
    );
}

export default Bag;