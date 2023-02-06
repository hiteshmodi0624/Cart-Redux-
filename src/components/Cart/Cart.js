import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cart=useSelector((state)=>{return state.cart.items})
  console.log(cart)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      {cart!==null?
        cart.map((item)=>{return (<CartItem item={item} key={item.id}/>)}):
        <p>There are no Items in the cart</p>}
      </ul>
    </Card>
  );
};

export default Cart;
