import { uiAction } from "../ui";
export const sendCartData=(cart)=>{
    return async(dispatch)=>{
        dispatch(uiAction.showNotification({
            status:"pending",
            title:"Sending...",
            message:"Sending cart data!",
        }))
        const sendRequest=async()=>{
            const response=await fetch("https://react-http-c7725-default-rtdb.firebaseio.com/cart.json",{
                method:"PUT",
                body:JSON.stringify({
                    items:cart.items,
                    totalItems:cart.totalItems
                }),
            })
            if(!response.ok)
                throw new Error('Sending cart data failed')
        }
        try {
            await sendRequest();
            dispatch(uiAction.showNotification({
                status:"success",
                title:"Success!",
                message:"Sent cart data Successfully",})
            )
        } catch (error){
            dispatch(uiAction.showNotification({
            status:"error",
            title:"Error!",
            message:"Sent cart data Failed",
            }))
        }
    }
}