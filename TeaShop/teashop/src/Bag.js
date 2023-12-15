import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Product from "./components/product/Product";
import "./style/bag.css"

function Bag(){
    return(
        <body>
        <Navbar/>
        <h1>Корзина</h1>
        <Product/>
        <Product/>
        <div className="display">
            <h2> Итог: 680P</h2>
        </div>
        <div className="display">
            <div className="formied"><p>Оформить заказ</p></div>
        </div>
        <Footer/>
        </body>
    );
}

export default Bag;