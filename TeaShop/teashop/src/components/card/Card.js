import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setListCard} from "../../reduces/List_bag";
import {setProductCard} from "../../reduces/Poduct_page";
import rect from "../../image/Rectangle.svg";
import './style.css'



// eslint-disable-next-line no-undef

function  Card({product}) {
    const dispatch= useDispatch();
    const [color, setColor] = useState('#FFFAF4');
    const handelClikBag = (e) =>{
        e.stopPropagation();
        if (color === '#FFFAF4') {
            dispatch(setListCard(product));
            setColor('#A4B07E');
        } else {
            setColor('#FFFAF4');
        }
    }
    const handelClickLook = (e) =>{
        e.stopPropagation();
        dispatch(setProductCard(product));
    }
    return (
        <div className="card">
            <img src={rect} alt=""/>
            <p>{product.name}</p>
            <p>{product.cost}</p>
            <Link to={`/product/${product.name}$`} className="look" onClick={handelClickLook}>Cмотреть</Link>
            <a className="little_bottom" onClick={handelClikBag} style={{background:  color}}>Корзина</a>
        </div>
    );
}
export default  Card;