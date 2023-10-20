import './style.css'
import rect from './image/Rectangle.svg'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <main>
            <div className="block">
                <p className="text_1"> Чайный магазин Teashop</p>
                <p className="text_2">Можно поробовать на вкус не только травы, но и саму жизнь</p>
            </div>
            <div className="cards_products">
                <div className="cards">
                    <div className="card">
                        <img src={rect} alt=""/>
                            <p className="name">1</p>
                            <p className="cost">234</p>
                            <a href="#" className="look">Cмотреть</a>
                            <a href="#" className = "little_bottom">Корзина</a>
                    </div>
                        <div className="card">
                            <img src={rect} alt=""/>
                                <p className="name">1</p>
                                <p className="cost">234</p>
                                <a href="#" className="look">Cмотреть</a>
                                <a href="#" className = "little_bottom">Корзина</a>
                        </div>
                    <div className="card">
                        <img src={rect} alt=""/>
                            <p className="name">1</p>
                            <p className="cost">234</p>
                            <a href="#" className="look">Cмотреть</a>
                            <a href="#" className = "little_bottom">Корзина</a>
                    </div>
                    <div className="card">
                        <img src={rect}  alt=""/>
                            <p className="name">1</p>
                            <p className="cost">234</p>
                            <a href="#" className="look">Cмотреть</a>
                            <a href="#" className = "little_bottom">Корзина</a>
                    </div>
                    <div className="card">
                        <img src={rect} alt=""/>
                            <p className="name">1</p>
                            <p className="cost">234</p>
                            <a href="#" className="look">Cмотреть</a>
                            <a href="#" className = "little_bottom">Корзина</a>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
