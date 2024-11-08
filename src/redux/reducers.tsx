import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productData } from "../api/Api";

const initialState :  (null | productData) [] = []
export const cartProducts = createSlice({
    name : 'cartProducts' , 
    initialState , 
    reducers : {
        addToCart : (state , action : PayloadAction<productData>) => {
            state.push({
                id : action.payload.id , 
                image : action.payload.image , 
                productName : action.payload.productName , 
                price : action.payload.price , 
                quantity : action.payload.quantity? action.payload.quantity : 1
            })
        } ,
        removeFromCart : (state , action : PayloadAction<number>) => {
            state = state.filter((ele) => ele?.id !== action.payload)
            return state ; 
        } , 
        increase : (state , action : PayloadAction<number>) => {
            state.forEach(ele =>{
                if ((ele?.id === action.payload) && ele.quantity) ele.quantity += 1

                return ele ; 
                
            })
        } , 
        decrease : (state , action : PayloadAction<number>) => {
            state.forEach(ele =>{
                if ((ele?.id === action.payload) && ele.quantity && (ele.quantity > 1)) ele.quantity -= 1
                return ele ; 
                
            })
        } 
    }
})

export const {addToCart , removeFromCart , increase , decrease} = cartProducts.actions ; 