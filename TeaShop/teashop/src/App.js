import './style/style.css'
import CardList from "./components/card/CardList"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import React from "react";
import Card from "./components/card/Card";


function App() {
    const list_card = [<Card/>, <Card/>, <Card/>, <Card/>]
  return (
          <div id="content">
              <Navbar />
              <main>
                    <div className="block">
                        <p className="text_1"> Чайный магазин Teashop</p>
                        <p className="text_2">Можно поробовать на вкус не только травы, но и саму жизнь</p>
                    </div>
                  <div className="cards_products">
                      <div className="cards">
                          <CardList list_card={list_card}/>
                      </div>
                  </div>
                </main>
                <Footer />
            </div>
  );
}

export default App;