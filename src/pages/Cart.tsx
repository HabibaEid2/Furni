import  { ReactNode, useContext, useEffect, useState } from "react";
import { currentPage } from "../Context";
import { useDispatch, useSelector } from "react-redux";
import { appDispatch, rootState } from "../redux/store";
import { decrease, increase, removeFromCart } from "../redux/reducers";

export default function Cart() {
    const [cartProducts , setCartProducts] = useState<ReactNode[]>([]) ; 
    const dispatch : appDispatch = useDispatch() ; 
    const cartProductsSelector = useSelector((state : rootState) => state.cartProducts) ; 
    const context = useContext(currentPage) ; 

    const increaseQuantity = (id : number) => {
        dispatch(increase(id))
    }
    const decreaseQuantity = (id : number) => {
        dispatch(decrease(id))
    }
    const remove = (id : number) => {
        dispatch(removeFromCart(id))
    }

    useEffect(() => {
        context?.setPage('cart') ; 
        setCartProducts((prev : ReactNode[]) : ReactNode[] => {
            prev = cartProductsSelector.map(ele => {
                return (
                <tr>
                    <td>
                        <img src={ele?.image} alt="" />
                    </td>
                    <td className="productName">{ele?.productName}</td>
                    <td>${ele?.price}</td>
                    <td className="quantity">
                        <i className="fa-solid fa-minus" onClick={() => decreaseQuantity(ele !== null ? ele?.id : 0)}></i>
                        <span className="value">{ele?.quantity}</span>
                        <i className="fa-solid fa-plus" onClick={() => increaseQuantity(ele !== null ? ele?.id : 0)}></i>
                    </td>
                    <td>${ele !== null && ele?.quantity  && (ele.price * ele.quantity)}</td>
                    <td>
                        <i className="fa-solid fa-trash" onClick={() => remove(ele !== null ? ele?.id : 0)}></i>
                    </td>
                </tr>)
            })
            return prev ; 
        })
    } , [cartProductsSelector])
    return (
        <>
        <div className="cart-page section-padding">
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                            <td>Remove</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartProducts.length > 0 ? cartProducts : 
                            <tr className="empty-cart">
                                <td>cart is empty full it now !</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>    
    )
}