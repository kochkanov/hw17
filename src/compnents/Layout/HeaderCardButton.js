import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import CartContext from "./../../store/cart-context";

export const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);
  
  const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  },0);
  return (
    <button className={classes.button} onClick={props.onShowMod}>
      <span className={classes.icon}><CartIcon /></span>
      
      <span>You Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
