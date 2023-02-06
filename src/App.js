import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/thunks/sendCartData';
import { fetchCartData } from './store/thunks/fetchCartData';
var isInitital=true;
function App() {
  const showCart=useSelector((state)=>{return state.ui.showCart})
  const dispatch=useDispatch();
  const cart=useSelector((state)=>state.cart)
  const notification=useSelector((state)=>state.ui.notification)
  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch])
  useEffect(()=>{
    if(isInitital){
      isInitital=false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
  },[cart,dispatch])
  return (
    <React.Fragment>
      {notification&&
        <Notification 
          title={notification.title} 
          status={notification.status} 
          message={notification.message}
      />}
      <Layout>
        {showCart&&<Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
