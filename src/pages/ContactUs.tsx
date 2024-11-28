import { useContext, useEffect } from "react";
import { currentPage } from "../Context";

export default function ContactUs() {
    const context = useContext(currentPage) ; 
    useEffect(() => {
        context?.setPage('CONTACT US') ; 
    } , [])
    return (
        <div className="contact-page section-padding">
            <div className="container">
                <ul className="contact-info">
                    <li>
                        <div className="icon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="disc para">
                            43 Raymouth Rd. Baltemoer, London 3910
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="disc para">
                            info@yourdomain.com
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="disc para">
                            +1 294 3925 3939
                        </div>
                    </li>
                </ul>
                <form action="#">
                    <div className="userName">
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" />
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" />
                        </div>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="message">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" autoCapitalize="true"></textarea>
                    </div>

                    <button type="submit">send message</button>
                </form>
            </div>
        </div>
    )
}