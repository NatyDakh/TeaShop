import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    card_product: {
        name:  "Kfr",
        cost:  123,
        index: 1,
        text: "dhhdfjghkd",
        shop_store:  true,
        imageUrl: null
    }
}

const ProductCardSlice = createSlice({
    name: "product_card",
    initialState: initialState,
    reducers :{
        setProductCard: (state, action)=>{
            state.card_product = action.payload;
        },
    }
});

export const ProductCardRedcer =   ProductCardSlice.reducer;
export const { setProductCard} =  ProductCardSlice.actions;