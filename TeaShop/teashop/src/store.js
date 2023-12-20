import {configureStore} from '@reduxjs/toolkit'
import {List_BagReduxer} from "./List_bag";

export  const  store = configureStore({
    reducer: {
        list_card_catalog: null,
        list_card_bag: List_BagReduxer,
    },
    devTools: true
});
