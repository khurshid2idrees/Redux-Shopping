import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  
  let total = 0;
  
  const itemsList = useSelector(state=>state.cart.itemsList)

  itemsList.forEach(item=>{
    total += item.totalPrice;
  })


  const cartItems = useSelector(state => state.cart.itemsList)

  
  return (

    <>
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (

          <li key={item.id}>
            <CartItem id={item.id} imgURL={item.imgURL}    quantity={item.quantity} price={item.price} total={item.totalPrice} name={item.name} />
          </li>
        ))}
      </ul>
    </div>

<div className="total-price">
<h3>Total: ${total}</h3>
<button className="orderBtn">Place Order</button>
</div>{" "}

</>
  );
};

export default CartItems;
