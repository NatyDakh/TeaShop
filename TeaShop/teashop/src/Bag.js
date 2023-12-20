import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./style/bag.css"
import CardList from "./components/card/CardList";
import {useSelector} from 'react-redux';
import React from "react";
import Prod from "./components/product/Product";
import {Link} from "react-router-dom";

function Bag(){
    const list_card = useSelector((state) => state.list_card_bag.list);
    const order = list_card.map(pr => <Prod product={pr} key={pr.id}/>);
    let total_price = list_card.reduce((count, pro) => {count += pro.cost; return count}, 0);
    return(
        <div>
        <Navbar/>
                <h1>Корзина</h1>
                <CardList list_card={order}/>
                <div className="display">
                    <h2> Итог: {total_price}</h2>
                </div>
                <div className="display">
                    <div className="formied">
                        <Link to='/payment'>Оформить заказ</Link></div>
                </div>
            <Footer />
        </div>
    );
}

export default Bag;