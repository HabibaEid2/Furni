import { Link } from 'react-router-dom';
import item1 from './../../assets/product-1.png' ; 
import item2 from './../../assets/product-2.png' ; 
import item3 from './../../assets/product-3.png' ; 
export default function CraftsWithE_Materail() {
    return (
        <section className="excellent-material">
            <div className="container">
                <div className="content">
                    <h2>Crafted with excellent material.</h2>
                    <p className="para">
                    Donec vitae odio quis nisl dapibus malesuada. 
                    Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                    </p>
                    <button>Explore</button>
                </div>

                <div className="products">
                    <Link to={'./item1'} className="item">
                        <img src={item1} alt="product1" />
                        <h6>Nordic Chair</h6>
                        <div className="price">$50.0</div>
                        <button className="addToCart">
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </Link>
                    <Link to={'./item2'} className="item">
                        <img src={item2} alt="product2" />
                        <h6>Kruzo Aero Chair</h6>
                        <div className="price">$78.0</div>
                        <button className="addToCart">
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </Link>
                    <Link to={'./item3'} className="item">
                        <img src={item3} alt="product3" />
                        <h6>Ergonomic Chair</h6>
                        <div className="price">$43.0</div>
                        <button className="addToCart">
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}