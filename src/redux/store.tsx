import { configureStore } from "@reduxjs/toolkit";
import { cartProducts } from "./reducers";

export const store = configureStore({
    reducer :  {
        cartProducts : cartProducts.reducer , 
    }
})