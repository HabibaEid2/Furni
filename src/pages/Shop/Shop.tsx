import { useContext, useEffect } from "react"
import { currentPage } from "../../Context"
import { data, productData } from "../../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers";
import { appDispatch, rootState } from "../../redux/store";

export default function Shop(){
    const productsData = [] ; 
    const dispatch : appDispatch = useDispatch() ; 
    const cartProductsSelector = useSelector((state : rootState) => state.cartProducts)

    const addToCartF = (ele : productData) => {
        dispatch(addToCart({
            id : ele.id , 
            image : ele.image , 
            productName : ele.productName , 
            price : ele.price , 
        }))
    }
    for (let i of data) {
        productsData.push(
            <div className="item">
                <img src={i.image} alt="product1" />
                <h6>{i.productName}</h6>
                <div className="price">${i.price}</div>
                {
                    (cartProductsSelector.findIndex(ele => ele?.id === i.id) === -1) ?
                    <button className="addToCart" onClick={() => addToCartF(i)}>
                        <i className="fa-solid fa-plus"></i>
                    </button> : 
                    <button className="addToCart" style={{cursor : "not-allowed"}}>
                        <i className="fa-solid fa-check" style={{cursor : "not-allowed"}}></i>
                    </button>
                }
                
            </div>
        )
    }
    const context = useContext(currentPage) ; 
    useEffect(() => {
        context?.setPage('shop') ; 
    } , [])
    return (
        <div className="shop">
            <div className="container">
                <div className="products">
                {
                    productsData
                }
                </div>
            </div>
        </div>
    )
}