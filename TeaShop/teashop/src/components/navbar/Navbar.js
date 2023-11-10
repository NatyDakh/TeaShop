import './style.css'
function Navbar(){
    return (
        <nav>
        <div className="logo">
            <p id='Teashop'>Teashop</p>
        </div>
        <ul>
            <li><a href="/bag">Корзина</a></li>
            <li><a href="/" >Главная</a></li>
            <li><a href="/login" className = "bottom">Войти</a></li>
        </ul>
    </nav>
    )
}

export default Navbar;