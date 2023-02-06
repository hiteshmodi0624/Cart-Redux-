import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { uiAction } from '../../store/ui';
const CartButton = (props) => {
  const dispatch=useDispatch();
  const showCart=useSelector((state)=>{return state.ui.showCart})
  const totalItems=useSelector((state)=>{return state.cart.totalItems})
  const onClick=()=>{
    if(showCart===false)
      dispatch(uiAction.showCart())
    else
      dispatch(uiAction.hideCart())
  }
  return (
    <button className={classes.button} onClick={onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
