import { useDispatch, useSelector } from 'react-redux';
import { productData } from '../../api/Api';
import { decrease, increase, removeFromCart } from '../../redux/reducers';
export default function Cart() {
    const dispatch = useDispatch() ; 
    const cartProducts = useSelector((store : any) => store.cartProducts) ; 
    const increaseF = (id : number) => {
        dispatch(increase(id))
    }
    const decreaseF = (id : number) => {
        dispatch(decrease(id))
    }
    const removeFromCartF = (id : number) => {
        dispatch(removeFromCart(id)) ; 
    }

    return (
        <div className="cart-page">
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartProducts.length > 0 ?
                            cartProducts.map((ele : productData) => {
                                return (
                                    <tr key={ele.id}>
                                        <td>
                                            <img src={ele.image} alt="" />
                                        </td>
                                        <td className='name'>{ele.productName}</td>
                                        <td>${ele.price}.00</td>
                                        <td className='quantity'>
                                            <button onClick={() => decreaseF(ele.id)} className='decrease'>
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                            <div className="value">{ele.quantity}</div>
                                            <button onClick={() => increaseF(ele.id)} className='increase'>
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </td>
                                        <td>${ele.quantity && ele.quantity * ele.price}.00</td>
                                        <td>
                                            <i onClick={() => removeFromCartF(ele.id)} className="fa-solid fa-x"></i>
                                        </td>
                                    </tr>
                                )
                            }) : <tr className='empty-cart'>
                                    <td>Cart is Empty</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}