import classes from './Cart.module.css'
import { Modal } from '../UI/Modal'
import CartContext from '../../store/cart-context'
import { useContext } from 'react';
export const Cart = (props) => {
    const itemsContext = useContext(CartContext)
    const cartItem=(
        <ul className={classes['cart-items']}>
            {itemsContext.items.map((item)=>{
                return <li key={item.id}>{item.name} {item.price}</li>
            })}
        </ul>
    )
  return (
    // <Modal onCloseCart={props.onCloseCart}>
    <Modal onShowCart={props.onShowCart}>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${itemsContext.totalAmount}</span>

        </div>
        <div className={classes.actions}>
            <button className={classes["button-alt"]} onClick={props.onCloseCart}>Close</button>
            <button className={classes.button}>Open</button>

        </div>
    </Modal>
  )
}
