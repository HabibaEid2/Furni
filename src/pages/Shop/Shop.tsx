import {data, productData} from './../../api/Api'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducers';

export default function Shop() {
    const dispatch = useDispatch() ; 
    const addToCartF = (ele : productData) => {
        dispatch(addToCart(ele)) ; 
    }
    return (
        <div className="shop">
            <div className="container">
                <div className="products">
                    {data.map(ele => {
                        return (
                            <div key={ele.id} className="item">
                                <img src={ele.image} alt={ele.productName} />
                                <h6>{ele.productName}</h6>
                                <div className="price">${ele.price}.00</div>
                                <button onClick={() => addToCartF(ele)} className="addToCart">
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}