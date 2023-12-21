import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./style/reg.css"
import {Link} from "react-router-dom";

function Registration(){
    return(
        <body>
        <Navbar/>
        <main>
            <h1> Регистрация</h1>
            <div className="create-line-left">
                <p> Логин: </p>
            </div>
            <div className="create-line-left">
                <p> ФИО: </p>
            </div>
            <div className="create-line-left">
                <p> E-mail: </p>
            </div>
            <div className="create-line-left">
                <p>Пароль: </p>
            </div>
            <div className="bottom_reg">
                <Link to={'/'}>Зарегистрироваться</Link>
            </div>
        </main>
        <Footer/>
        </body>
    );

}

export default Registration;