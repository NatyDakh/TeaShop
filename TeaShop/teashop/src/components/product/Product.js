import "./style.css"
import {deleteFromListCard, setListCard} from "../../reduces/List_bag";
import {useDispatch} from "react-redux";
import React from "react";

function Prod({product}){
    const dispatch= useDispatch();
    const handelClik = (e) =>{
        e.stopPropagation();
        dispatch(deleteFromListCard(product.index));
    }
    return(
        <body>
        <div className="frame1">
            <div className="rectangle"></div>
            <p>{product.name}</p>
            <p>{product.cost}</p>
            <div className="delete">
                <p  onClick={handelClik}>Удалить</p>
            </div>
        </div>
        </body>
    );
}

export default Prod;