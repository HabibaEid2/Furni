import { configureStore } from "@reduxjs/toolkit";
import { cartProducts } from "./reducers";

export const store = configureStore({
    reducer :  {
        cartProducts : cartProducts.reducer , 
    }
})

export type appDispatch = typeof store.dispatch ; 
export type rootState =ReturnType<typeof store.getState> ; 