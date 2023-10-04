import React from 'react';
// import { products } from './data';
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from '../store/cart-slice';

export const Twoproduct = ({id, name,imgURL,price}) => {

const dispatch = useDispatch();

const addToCart = ()=>{
  dispatch(cartActions.addToCart({
    name,
    id,
    price,
    imgURL
  }))
}

    // console.log(products)

  return (
    <>
    {/* <div className='flex flex-col'> */}

    
       <div className="bg-white ">
      <div className="mx-auto  px-4  sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shirts</h2> */}

        <div
        //  className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
         >
          {/* {products.map((product) => ( */}
            <div key={id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={imgURL}
                  // alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a 
                    // href={product.href}
                    >
                      {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                      {/* {product.name} */}
                      <button onClick={addToCart} class=" cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-semibold  px-4 border border-gray-400 rounded shadow">
  Add To Cart
</button>
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">{`${price}$`}</p>
              </div>
            </div>
       
        </div>
      </div>
    </div>
    {/* </div> */}
    </>
  )
}
