import chooseUsImg from './../../assets/why-choose-us-img.jpg' ; 
import yellowDotsImg from './../../assets/dots-yellow.svg' ; 
import ChooseUsItems from './ChooseUsItems';
export default function ChooseUs() {
    return (
        <section className="choose-us section-padding">
            <div className="container">
                <div className="content">
                    <div className="head">
                        <h2>Why Choose Us</h2>
                        <p className="para">
                        Donec vitae odio quis nisl dapibus malesuada. 
                        Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                        </p>
                    </div>
                    <ChooseUsItems/>
                </div>
                <div className="image">
                    <img className='main-section-image' src={chooseUsImg} alt="why choose us image" />
                    <img className='sub-img' src={yellowDotsImg} alt="yellow-dots-image" />
                </div>
            </div>
        </section>
    )
}