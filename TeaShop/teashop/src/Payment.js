import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./style/pay.css"
import {useSelector} from "react-redux";

function Payment(){
    const list_card = useSelector((state) => state.list_card_bag.list);
    let total_price = list_card.reduce((count, pro) => {count += pro.cost; return count}, 0);
    return (
        <body>
        <Navbar/>
        <main>
            <div id="main">
                <div className="blok1">
                    <h1>Оплата</h1>
                    <div className="frame">
                        <div className="line">
                            <p> ФИО: </p>
                        </div>
                        <div className="line">
                            <p> Телефон: </p>
                        </div>
                        <div className="line">
                            <p> E-mail: </p>
                        </div>
                        <p className="result"> Итог: </p>
                        <p className="result"> {total_price} P </p>
                    </div>
                </div>
                <div className="block1">
                    <h1>Доставка</h1>
                    <div className="frame">
                        <div className="line">
                            <p> Адрес: </p>
                        </div>
                        <div className="line">
                            <p> Время: </p>
                        </div>
                        <p className="result"> Способ оплаты: </p>
                        <p className="result"> Карта </p>
                    </div>
                </div>
            </div>
            <div className="bottom_reg">
                <p>Оплатить</p>
            </div>
        </main>
        <Footer/>
        </body>
    );
}

export default Payment;