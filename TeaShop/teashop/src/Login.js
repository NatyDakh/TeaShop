import "./style/login.css"
import {Link} from "react-router-dom";


function Login(){
    return(
        <body className="login">
        <div  id="card">
            <h1> Вход </h1>
            <div className="create-line-left">
                <p> Логин: </p>
            </div>
            <div className="create-line-left">
                <p> E-mail: </p>
            </div>
            <div className="bottom_in">
                <Link className="in" to="/">Войти</Link>
            </div>
            <Link className="reg" to="/registration"> Регистрация</Link>
        </div>
        </body>
    );
}

export default Login;