import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartItems from "./components/CartItems";
import TwoLayout from "./components/TwoLayout";
import { sendCartData } from "./store/cart-slice";


let isFirstRender = true;

function App() {

  // if(isFirstRender){
  //   isFirstRender = false;
  //   return;
  // }

  const dispatch = useDispatch();
  const notification = useSelector(state=>state.ui.notification);

  const cart = useSelector(state => state.cart);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


  // data fetching from firebase database. 


  useEffect(() => {

    if(isFirstRender){
      isFirstRender = false;
      return;
    }

   dispatch(sendCartData(cart));

  
  }, [cart,dispatch])

  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);

  console.log(isLoggedIn)
  return (
    <div className="App"> 
    {notification &&<Notification type={notification.type} message={notification.message} />} 
      <Router>  
        <Routes>
          <Route path="/" exact element={!isLoggedIn?<Auth/>:<TwoLayout/>} />
          <Route path="/notification" element={<Notification type='success' message={'This is the dummy message'} />
          } />
          <Route path="/cart" element={<CartItems/>} />
        </Routes>
      </Router>
      {/* { !isLoggedIn && <Auth />}
      {isLoggedIn && <Layout/>} */}

      {/* <Layout /> */}
    </div>
  );
}

export default App;
