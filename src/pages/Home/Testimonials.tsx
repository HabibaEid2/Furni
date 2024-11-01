import { Carousel } from "react-bootstrap";
import person1Img from './../../assets/person-1.jpg' ; 
export default function Testimonials () {
    return (
        <section className="testimonials">
            <div className="container">
            <h1>Testimonials</h1>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <p className="para">
                        "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
                        Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. 
                        Pellentesque habitant morbi tristique senectus et netus et
                        malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."
                    </p>
                    <div className="person">
                        <img src={person1Img} alt="person 1 image" />
                        <div className="name">Maria Jones</div>
                        <div className="rule para">CEO, Co-Founder, XYZ Inc.</div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <p className="para">
                        "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
                        Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. 
                        Pellentesque habitant morbi tristique senectus et netus et
                        malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."
                    </p>
                    <div className="person">
                        <img src={person1Img} alt="person 1 image" />
                        <div className="name">Maria Jones</div>
                        <div className="rule para">CEO, Co-Founder, XYZ Inc.</div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <p className="para">
                        "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
                        Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. 
                        Pellentesque habitant morbi tristique senectus et netus et
                        malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."
                    </p>
                    <div className="person">
                        <img src={person1Img} alt="person 1 image" />
                        <div className="name">Maria Jones</div>
                        <div className="rule para">CEO, Co-Founder, XYZ Inc.</div>
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>
        </section>
    )
}