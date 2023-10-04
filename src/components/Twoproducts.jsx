import React from 'react';
import { Twoproduct } from './Twoproduct';
import {products} from './data'
import "./Product.css";


const Twoproducts = () => {

  // console.log(products)

  return (
    <div>
    <ul className="products-container">
      {products.map((product, index) => (
        <li key={index}>
          <Twoproduct
            id={product.id}
            name={product.name}
            imgURL={product.imgURL}
            price={product.price}
          />
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Twoproducts