import imgGrid1 from './../../assets/img-grid-1.jpg' ; 
import imgGrid2 from './../../assets/img-grid-2.jpg' ; 
import imgGrid3 from './../../assets/img-grid-3.jpg' ; 
import dotsGreenImg from './../../assets/dots-green.svg' ; 
import product1Img from './../../assets/product-1.png'
import product2Img from './../../assets/product-2.png'
import product3Img from './../../assets/product-3.png'
import { Link } from 'react-router-dom';
export default function  Services() {
    return (
        <section className="services">
            <div className="container">
                <div className="content">
                    <div className="images">
                        <img className = 'imgGrid1' src={imgGrid1} alt="image 1" />
                        <img className = 'imgGrid2' src={imgGrid2} alt="image 2" />
                        <img className = 'imgGrid3' src={imgGrid3} alt="image 3" />
                        <img className = 'dots-green-img' src={dotsGreenImg} alt="dots-green-image" />
                    </div>
                    <div className="text-content">
                        <h2>We Help You Make Modern Interior Design</h2>
                        <p className="para">
                        Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada
                        </p>

                        <ul>
                            <li className='para'> Donec vitae odio quis nisl dapibus malesuada </li>
                            <li className='para'> Donec vitae odio quis nisl dapibus malesuada </li>
                            <li className='para'> Donec vitae odio quis nisl dapibus malesuada </li>
                            <li className='para'> Donec vitae odio quis nisl dapibus malesuada </li>
                        </ul>

                        <button>Explore</button>
                    </div>
                </div>

                <div className="items">
                    <div className="item">
                        <img src={product1Img} alt="product1 image" />
                        <div className="txt">
                            <h6>Nordic Chair</h6>
                            <p className="para">
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                            </p>
                            <Link to = '/'>Read More</Link>
                        </div>
                    </div>
                    <div className="item">
                        <img src={product2Img} alt="product2 image" />
                        <div className="txt">
                            <h6>Nordic Chair</h6>
                            <p className="para">
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                            </p>
                            <Link to = '/'>Read More</Link>
                        </div>
                    </div>
                    <div className="item">
                        <img src={product3Img} alt="product3 image" />
                        <div className="txt">
                            <h6>Nordic Chair</h6>
                            <p className="para">
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                            </p>
                            <Link to = '/'>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}