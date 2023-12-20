import './style/style.css'
import CardList from "./components/card/CardList"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import React, {useEffect, useState} from "react";
import Card from "./components/card/Card";

const shop = [ {
    name:  "Kfr",
    cost:  123,
    index: 1,
    text: "dhhdfjghkd",
    shop_store:  true,
    imageUrl: null
    },
    {
        name:  "Kfr",
        cost:  56.5,
        index: 2,
        text: "dhhdfjghkd",
        shop_store:  true,
        imageUrl: null
    },

    {
        name:  "Kfr",
        cost:  123,
        index: 3,
        text: "dhhdfjghkd",
        shop_store:  false,
        imageUrl: null
    }]
function App() {
    const [product_list, setProductList] = useState(shop)
    const list_card = product_list.map(pr => <Card product={pr} key={pr.id}/>);
    useEffect(() => {
        (async () => {
            const data = await fetch("http://127.0.0.1:8000/api/product/");
            const catalog = await data.json();
            setProductList((oldCatalog) => [...oldCatalog, ...catalog]);
        }) ();
    }, []);
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