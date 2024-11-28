import truckImg from './../../assets/truck.svg' ; 
import bagImg from './../../assets/bag.svg' ; 
import supportImg from './../../assets/support.svg' ; 
import returnImg from './../../assets/return.svg' ; 
export default function ChooseUsItems() {
    return (
        <div className="items">
            <div className="item">
                <img src={truckImg} alt="turck image" />
                <h6>Fast & Free Shipping</h6>
                <p className="para">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
            </div>
            <div className="item">
                <img src={bagImg} alt="bag image" />
                <h6>Easy to Shop</h6>
                <p className="para">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
            </div>
            <div className="item">
                <img src={supportImg} alt="support image" />
                <h6>24/7 Support</h6>
                <p className="para">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
            </div>
            <div className="item">
                <img src={returnImg} alt="return image" />
                <h6>Hassle Free Returns</h6>
                <p className="para">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
            </div>
        </div>
    )
}