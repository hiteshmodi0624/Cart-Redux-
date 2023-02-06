import { uiAction } from "../ui";
import { CartAction } from "../cart";
export const fetchCartData=()=>{
    return async(dispatch)=>{
        const fetchData=async()=>{
            const response=await fetch(
                "https://react-http-c7725-default-rtdb.firebaseio.com/cart.json")
            if(!response.ok)
                throw new Error('Sending cart data failed')
            const data=await response.json();
            return data;
        }
        try {
            const cartData=await fetchData();
            dispatch(CartAction.restore(cartData));
        } catch (error) {
            dispatch(uiAction.showNotification({
                status:"error",
                title:"Error!",
                message:"Fetching cart data Failed",
            }))
        }
    }
}