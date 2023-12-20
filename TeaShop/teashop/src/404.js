import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./style/style_404.css"
import React from "react";
import {Link} from "react-router-dom";


function Page_404() {
    return(
        <body>
            <Navbar />
            <main>
                <h1>Ошибка 404</h1>
                <div className ="return">
                    <Link to="/" className="first_page"> Главная страница</Link>
                </div>
            </main>
            <Footer/>
        </body>
    )
}

export default Page_404;