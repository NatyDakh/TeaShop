import {configureStore} from '@reduxjs/toolkit'
import {List_BagReduxer} from "./List_bag";
import {ProductCardRedcer} from "./Poduct_page";

export  const  store = configureStore({
    reducer: {
        list_card_bag: List_BagReduxer,
        product: ProductCardRedcer,
        list_comment : []
    },
    devTools: true
});
