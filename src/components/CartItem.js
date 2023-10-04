import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cart-slice";
import {products} from './data'

const CartItem = ({ name, quantity, total, price, id, imgURL }) => {

  const dispatch = useDispatch();
  
  const incrementCartItem = ()=>{
    dispatch(cartActions.addToCart({
      name,
      id,
      price,
      imgURL
      
    }))
  };
  const decrementCartItem = ()=>{
    dispatch(cartActions.removeFromCart(id));
  };

  
  return (
    <div className="cartItem">
      {/* <h2> {name}</h2> */}

      <img width={60} src={imgURL}/>

      {/* {console.log(imgURL)} */}


      {/* {products.map(index=>(
        <div key={index.id}>
         </div>
      ))} */}
     

      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrementCartItem}>
        -
      </button>
      <button className="cart-actions" onClick={incrementCartItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
