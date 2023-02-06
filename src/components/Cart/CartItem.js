import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { CartAction } from '../../store/cart';
const CartItem = (props) => {
  console.log(props)
  const { id:title, quantity, price } = props.item;
  const total=quantity*price;
  const dispatch=useDispatch();
  const addItem=()=>{
    dispatch(CartAction.addItem({
      price:price,
      id:title
    }))
  }
  const removeItem=()=>{
    dispatch(CartAction.removeItem({
      price:price,
      id:title
    }))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItem}>-</button>
          <button onClick={addItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
