import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./style/style_404.css"
import React from "react";


function Page_404() {
    return(
        <body>
            <Navbar />
            <main>
                <h1>Ошибка 404</h1>
                <div id ="return">
                    <p id="first_page"> Главная страница</p>
                </div>
            </main>
            <Footer/>
        </body>
    )
}

export default Page_404;