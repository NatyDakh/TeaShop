import './style.css'
import {useState} from "react";
import {Link} from "react-router-dom";
function Navbar(){
    const [modalActive, setModalActive] = useState(true)
    return (
        <nav>
        <div className="logo">
            <p id='Teashop'>Teashop</p>
        </div>
        <ul>
            <li><Link to="/bag">Корзина</Link></li>
            <li><Link to="/" >Главная</Link></li>
            <li><Link to="/login" className = "bottom">Войти</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar;