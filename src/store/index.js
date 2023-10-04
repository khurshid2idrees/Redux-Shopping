import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer:{
        // first we will have the auth slice here 
        auth: authSlice.reducer,
        // second we have the cart slice for cart handling.
        cart:cartSlice.reducer,
        // third we have ui slice for the notification management
        ui: uiSlice.reducer,  
    }
})

export default store;