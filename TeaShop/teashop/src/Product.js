import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./style/product.css"
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {setListCard} from "./reduces/List_bag";
import CardList from "./components/card/CardList";
import Comment from "./components/Comment/Comment";


function Product(){
    const [list_comment, setlistcomment] = useState([])
    useEffect(() => {
        (async () => {
            const data = await fetch("http://127.0.0.1:8000/api/comment/");
            const list = await data.json();
            setlistcomment(list)
        }) ();
    }, []);
    const pro = useSelector((state) => state.product.card_product)
    const dispatch = useDispatch();
    const [color,setColor] = useState('rgba(66, 65, 6)');
    const handelClik = (e) =>{
        e.stopPropagation();
        if (color === 'rgba(66, 65, 6)') {
            dispatch(setListCard(pro));
            setColor('#A4B07E');
        } else {
            setColor('rgba(66, 65, 6)');
        }
    }
    const Comment_list = () =>{
        const list =  list_comment.filter((item) => item.product.index === pro.index);
        console.log(list)
        if (list.length < 1){
            return <p>Нет отзывов</p>
        } else{
            return <CardList list_card={list.map(pr => <Comment comment={pr} />)} />;
        }
    }
    const Shop_Store =(store) =>{
        if (store){
            return "Товар есть в наличии";
        } else{
            return "Товара нет в наличии";
        }
    }
    return(
        <div>
        <Navbar/>
        <div className="information">
            <div className="picture"></div>
            <div className="text">
                <h1> {pro.name}</h1>
                <p>ID товара {pro.index}</p>
                <p>Состав чая: черный чай, малина, листья мяты, и т.д.</p>
                <p>{Shop_Store(pro.shop_store)}</p>
                <p className='cost'> {pro.cost}</p>
                <div className="buy">
                    <a onClick={handelClik}
                       style={{color:  color}}>В корзину</a>
                </div>
            </div>
        </div>
        <div className="say">
            <h1> Отзывы: </h1>
            {Comment_list()}
        </div>
        <Footer/>
        </div>
    );
}

export default Product;