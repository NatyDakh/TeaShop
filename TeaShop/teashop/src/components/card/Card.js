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
    const [color, setColor] = useState('#FFFAF4');
    const handelClik = (e) =>{
        e.stopPropagation();
        if (color === '#FFFAF4') {
            dispatch(setListCard(<Prod/>));
            setColor('#A4B07E');
        } else {
            setColor('#FFFAF4');
        }
    }
    return (
        <div className="card">
            <img src={rect} alt=""/>
            <p> 1</p>
            <p>234</p>
            <Link to="/product" className="look">Cмотреть</Link>
            <a className="little_bottom" onClick={handelClik} style={{background:  color}}>Корзина</a>
        </div>
    );
}
export default  Card;