import { createSlice } from "@reduxjs/toolkit";
const initialItems={items:[],totalItems:0,changed:false}
const cartSlice=createSlice({
    name:'items',
    initialState:initialItems,
    reducers:{
        addItem(state,action){
            state.changed=true;
            state.totalItems+=1;
            const Index=state.items.findIndex((item)=>{
                return item.id===action.payload.id;
            });
            if(Index===-1)
                state.items.push({
                    id:action.payload.id,
                    price:action.payload.price,
                    quantity:1,
                });
            else
                state.items[Index].quantity++;
            
        },
        removeItem(state,action){
            state.changed=true;
            console.log(state);
            state.totalItems-=1;
            const Index=state.items.findIndex((item)=>{
                return item.id===action.payload.id;
            });
            if(state.items[Index].quantity===1)
                state.items.splice(Index,1);
            else
                state.items[Index].quantity--;
        },
        reset(state){
            state=initialItems;
        },
        restore(state,action){
            state.items=action.payload.items;
            state.totalItems=action.payload.totalItems;
        }
    }
})
export const CartAction=cartSlice.actions;
export default cartSlice.reducer