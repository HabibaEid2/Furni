import { Link } from "react-router-dom";
import ChooseUs from "./Home/ChooseUs";
import employee1Img from './../assets/person_1.jpg' 
import employee2Img from './../assets/person_2.jpg' 
import employee3Img from './../assets/person_3.jpg' 
import employee4Img from './../assets/person_4.jpg' 
import Testimonials from "./Home/Testimonials";
import { useContext, useEffect } from "react";
import { currentPage } from "../Context";

export default function AboutUs() {
    const context = useContext(currentPage) ; 
    useEffect(() => {
        context?.setPage('ABOUT US') ; 
    } , [])
    return (
        <div className="about-us-page section-padding">
            <div className="container">
                <ChooseUs/>
                <div className="our-team">
                    <h1>OUR TEAM</h1>
                    <ul>
                        <li>
                            <div className="image">
                                <img src={employee1Img} alt="Lawson Arnold" />
                            </div>
                            <Link to={'#'}><h4>Lawson Arnold</h4></Link>
                            <div className="jop para">CEO, Founder, Atty.</div>
                            <p className="para">
                                Separated they live in. Separated they live in 
                                Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            </p>
                            <Link to='#' className="learn-more">Learn More</Link>
                        </li>
                        <li>
                            <div className="image">
                                <img src={employee2Img} alt="Jeremy Walker" />
                            </div>
                            <Link to={'#'}><h4>Jeremy Walker</h4></Link>
                            <div className="jop para">CEO, Founder, Atty.</div>
                            <p className="para">
                                Separated they live in. Separated they live in 
                                Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            </p>
                            <Link to='#' className="learn-more">Learn More</Link>
                        </li>
                        <li>
                            <div className="image">
                                <img src={employee3Img} alt="Patrik White" />
                            </div>
                            <Link to={'#'}><h4>Patrik White</h4></Link>
                            <div className="jop para">CEO, Founder, Atty.</div>
                            <p className="para">
                                Separated they live in. Separated they live in 
                                Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            </p>
                            <Link to='#' className="learn-more">Learn More</Link>
                        </li>
                        <li>
                            <div className="image">
                                <img src={employee4Img} alt="Kathryn Ryan" />
                            </div>
                            <Link to={'#'}><h4>Kathryn Ryan</h4></Link>
                            <div className="jop para">CEO, Founder, Atty.</div>
                            <p className="para">
                                Separated they live in. Separated they live in 
                                Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            </p>
                            <Link to='#' className="learn-more">Learn More</Link>
                        </li>
                    </ul>
                </div>
                <Testimonials/>
            </div>
        </div>
    )
}