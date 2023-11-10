import "./style/login.css"

function Login(){
    return(
        <body id="login">
        <div  id="card">
            <h1> Вход </h1>
            <div className="create-line-left">
                <p> Логин: </p>
            </div>
            <div className="create-line-left">
                <p> E-mail: </p>
            </div>
            <div className="bottom_in">
                <a id="in" href="/">Войти</a>
            </div>
            <a id="reg" href="/registration"> Регистрация</a>
        </div>
        </body>
    );
}

export default Login;