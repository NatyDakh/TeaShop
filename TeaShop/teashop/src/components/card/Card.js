import React, {useState} from "react";
import rect from "../../image/Rectangle.svg";
import './style.css'


// eslint-disable-next-line no-undef

function  Card() {
    const [setstyle, set] = useState( '#FFFAF4');
    return (
        <div className="card">
            <img src={rect} alt=""/>
            <p> 1</p>
            <p>234</p>
            <a href="/product" className="look">Cмотреть</a>
            <a className="little_bottom" onClick={() => set('#A4B07E')}
               style={{background:  setstyle}}>Корзина</a>
        </div>
    );
}
export default  Card;