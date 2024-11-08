import product1Image from './../assets/product-1.png'
import product2Image from './../assets/product-2.png'
import product3Image from './../assets/product-3.png'
export interface productData {
    id : number , 
    image : string , 
    productName : string , 
    price : number , 
    quantity? : number
}
export const data : productData[]= [
    {
        id : 0 , 
        image : product3Image , 
        productName : "Nordic Chair" , 
        price : 50 
    } , 
    {
        id : 1 , 
        image : product2Image , 
        productName : "Nordic Chair" , 
        price : 50 
    } , 
    {
        id : 2 , 
        image : product1Image , 
        productName : "Kurzo Aero Chair" , 
        price : 78 
    } , 
    {
        id : 3 , 
        image : product3Image , 
        productName : "Ergonomic Chair" , 
        price : 43
    } ,
    {
        id : 4 , 
        image : product3Image , 
        productName : "Nordic Chair" , 
        price : 50 
    } , 
    {
        id : 5 , 
        image : product2Image , 
        productName : "Nordic Chair" , 
        price : 50 
    } , 
    {
        id : 6 , 
        image : product1Image , 
        productName : "Kurzo Aero Chair" , 
        price : 78 
    } , 
    {
        id : 7 , 
        image : product3Image , 
        productName : "Ergonomic Chair" , 
        price : 43
    }
]