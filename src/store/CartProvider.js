import { useReducer } from "react";
import CartContext from "../store/cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function ControlItems(arr, id){
  for(let i=0;i<arr.length;i++){
    if(arr[i].id === id){
      return false;
    }
  }
  return true;
}

const cartReduser = (prevState, action) => {
  if (action.type === "ADD" ) {
    
    let loadItems = [];
    if(ControlItems(prevState.items, action.item.id)){
      loadItems = prevState.items.concat(action.item);
    } else {
      loadItems = prevState.items.map((el,i)=>{
        
        if(el.id===action.item.id){
          return{
            ...el,amount: +el.amount + +action.item.amount,
            price: +el.price + +action.item.price * +action.item.amount
          }
        }else{
          return el
        }
      });
      console.log(loadItems);
    }
    const updatedTotalAmount =
      prevState.totalAmount + action.item.price * action.item.amount;
      console.log(updatedTotalAmount);
    return {
      items: loadItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};



const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReduser, defaultCartState);
  const addItemToCarthandler = (item) => {dispatchCart({type:"ADD", item:item})};
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCarthandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
