import { Link } from 'react-router-dom';
import emailImg from './../assets/envelope-outline.svg' ; 
import sofaImg from './../assets/sofa.png' ; 
export default function Footer () {
    return (
        <footer>
            <div className="container">
                <div className="subscribe">
                    <img className='email-img' src={emailImg} alt="email image" />
                    <h5>Subscribe to Newsletter</h5>
                    <form className="content">
                        <input type="text" placeholder='Enter your name'/>
                        <input type="email" placeholder='Enter your email'/>
                        <button type='submit'>
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
                <div className="footer-main-content">
                    <div className="info-and-contact-us">
                        <h2>Furni.</h2>
                        <p className='para'>
                        Donec facilisis quam ut purus rutrum lobortis. 
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                        Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant
                        </p>
                        <div className="contactUs">
                            <Link to={'https://facebook.com'}>
                                <i className="fa-brands fa-facebook-f"></i>
                            </Link>
                            <Link to={'https://instagram.com'}>
                                <i className="fa-brands fa-instagram"></i>
                            </Link>
                            <Link to={'https://twitter.com'}>
                                <i className="fa-brands fa-twitter"></i>
                            </Link>
                            <Link to={'https://linkedin.com'}>
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>
                            {/* <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ="fa-brands fa-linkedin"></i> */}
                        </div>
                    </div>
                    <div className="items">
                        <ul>
                            <li>
                                <Link to={'/'}>About us</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Services</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Blog</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Contact us</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to={'/'}>Support</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Knowledge base</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Live Chat</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to={'/'}>Jops</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Our team</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Leadership</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Privacy Policy</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to={'/'}>Nordic Chair</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Kruzo Aero</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Ergonomic Chair</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="bottom-content">
                    <p className="para">
                    Copyright ©2024. All Rights Reserved.
                    — Designed with love by <Link to={'./'}>Untree.co</Link>  Distributed By ThemeWagon
                    </p>

                    <div>
                        <Link to={'./'}>Terms & Conditions</Link>
                        <Link to={'./'}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
            <img className='sofa-img' src={sofaImg} alt="sofa image" />
        </footer>
    )
}