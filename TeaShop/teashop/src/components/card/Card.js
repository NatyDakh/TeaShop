import React, {useState} from "react";
import rect from "../../image/Rectangle.svg";
import './style.css'
import {useDispatch} from "react-redux";
import {setListCard, deleteFromListCard} from "../../List_bag";
import Prod from "../product/Product";
import {Link} from "react-router-dom";


// eslint-disable-next-line no-undef

function  Card() {
    const dispatch= useDispatch();
    const [[setstyle , status], set] = useState([ '#FFFAF4', false]);
    const handelClik = (e) =>{
        e.stopPropagation();
        if (status === false) {
            dispatch(setListCard(<Prod/>));
            set(['#A4B07E', true]);
        } else {
            set([ '#FFFAF4', false]);
        }
    }
    return (
        <div className="card">
            <img src={rect} alt=""/>
            <p> 1</p>
            <p>234</p>
            <Link to="/product" className="look">Cмотреть</Link>
            <a className="little_bottom" onClick={handelClik} style={{background:  setstyle}}>Корзина</a>
        </div>
    );
}
export default  Card;