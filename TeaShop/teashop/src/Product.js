import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./style/product.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {setListCard} from "./List_bag";
import Prod from "./components/product/Product";


function Product(){
    const dispatch = useDispatch();
    const [[setstyle , status], set] = useState([  'rgba(66, 65, 6)', false]);
    const handelClik = (e) =>{
        e.stopPropagation();
        if (status === false) {
            dispatch(setListCard(<Prod/>));
            set(['#A4B07E', true]);
        } else {
            set([ 'rgba(66, 65, 6)', false]);
        }
    }
    return(
        <body>
        <Navbar/>
        <div className="information">
            <div className="picture"></div>
            <div className="text">
                <h1> Чай 1</h1>
                <p>ID товара 2800781</p>
                <p>Состав чая: черный чай, малина, листья мяты, и т.д.</p>
                <p>Товар есть в наличии</p>
                <p className='cost'> 450 P</p>
                <div className="buy">
                    <a onClick={handelClik}
                       style={{color:  setstyle}}>В корзину</a>
                </div>
            </div>
        </div>
        <div className="say">
            <h1> Отзывы: </h1>
            <p>Нет отзывов</p>
        </div>
        <Footer/>
        </body>
    );
}

export default Product;