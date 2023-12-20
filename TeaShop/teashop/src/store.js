import {configureStore} from '@reduxjs/toolkit'
import {List_BagReduxer} from "./reduces/List_bag";
import {ProductCardRedcer} from "./reduces/Poduct_page";

export  const  store = configureStore({
    reducer: {
        list_card_bag: List_BagReduxer,
        product: ProductCardRedcer,
        list_comment : []
    },
    devTools: true
});
