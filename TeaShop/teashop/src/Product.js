import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./style/product.css"

function Product(){
    return(
        <body>
        <Navbar/>
        <div id="information">
            <div id="picture"></div>
            <div id="text">
                <h1> Чай 1</h1>
                <p>ID товара 2800781</p>
                <p>Состав чая: черный чай, малина, листья мяты, и т.д.</p>
                <p>Товар есть в наличии</p>
                <p id='cost'> 450 P</p>
                <div id="buy">
                    <a href='/bag'>В корзину</a>
                </div>
            </div>
        </div>
        <div id="say">
            <h1> Отзывы: </h1>
            <p>Нет отзывов</p>
        </div>
        <Footer/>
        </body>
    );
}

export default Product;