import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const menu : any = useRef(null) ; 
    const handleMenu = () => {
        if (menu.current.style.height === '290px') {
            menu.current.style.height = "0px" ; 
        }
        else menu.current.style.height = "290px" ; 
    }
    
    return (
        <header>
            <div className="container">
                <div className="logo">Furni<span>.</span></div>
                <div className="header-content">
                    <ul ref={menu}>
                        <li>
                            <Link to={'Furni/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'Furni/shop'}>Shop</Link>
                        </li>
                        <li>
                            <Link to={'Furni/about-us'}>About Us</Link>
                        </li>
                        <li>
                            <Link to={'Furni/services'}>Services</Link>
                        </li>
                        <li>
                            <Link to={'Furni/blog'}>Blog</Link>
                        </li>
                        <li>
                            <Link to={'Furni/contact-us'}>Contact Us</Link>
                        </li>
                        <li className="icons">
                            <i className="fa-regular fa-user"></i>
                            <Link to = 'Furni/cart'>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                        </li>
                    </ul>
                    <i onClick={handleMenu} className="fa-solid fa-bars menu"></i>
                </div>
            </div>
        </header>
    )
}