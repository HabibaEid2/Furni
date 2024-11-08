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
                            <Link to={'/home'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/shop'}>Shop</Link>
                        </li>
                        <li>
                            <Link to={'/about-us'}>About Us</Link>
                        </li>
                        <li>
                            <Link to={'/services'}>Services</Link>
                        </li>
                        <li>
                            <Link to={'/blog'}>Blog</Link>
                        </li>
                        <li>
                            <Link to={'/contact-us'}>Contact Us</Link>
                        </li>
                        <li className="icons">
                            <i className="fa-regular fa-user"></i>
                            <Link to = '/cart'>
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