import React from 'react';
import {products} from './data';
import Header from './Header';
import Twoproducts, {TwoProducts} from './Twoproducts'


export default function TwoLayout() {

    // console.log(products)
   
  return (
    <>
    <React.Fragment>
      <div className="layout">
        <Header />


        <Twoproducts
        
        />
    
        {/* { showCart && <CartItems/>} */}
        {/* <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "} */}
      </div>
    </React.Fragment>


    

    </>
  )
}
