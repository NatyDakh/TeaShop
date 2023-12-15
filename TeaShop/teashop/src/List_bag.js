import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    list: []
}

const List_BagSlice = createSlice({
    name: "list_bag",
    initialState: initialState,
    reducers :{
        setListCard: (state, action)=>{
            state.list.push(action.payload)
        },
        deleteFromListCard: (state, action) =>{
            state.Iist=state.Iist.filter((item) => item.id !== action.payload)
        }
    }
});

export const List_BagReduxer =  List_BagSlice.reducer;
export const { setListCard, deleteFromListCard} = List_BagSlice.actions;
