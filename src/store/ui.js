import { createSlice } from "@reduxjs/toolkit";

const initialItems={showCart:false,notification:null}
const uiSlice=createSlice({
    name:"toggleCart",
    initialState:initialItems,
    reducers:{
        showCart(state){
            state.showCart=true;
        },
        hideCart(state){
            state.showCart=false;
        },
        showNotification(state,action){
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            }
        }
    }
})
export const uiAction=uiSlice.actions
export default uiSlice.reducer