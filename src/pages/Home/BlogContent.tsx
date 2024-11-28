import { Link } from "react-router-dom";
import post1Img from './../../assets/post-1.jpg' ; 
import post2Img from './../../assets/post-2.jpg' ; 
import post3Img from './../../assets/post-3.jpg' ; 
export default function BlogContent() {
    return (
        <div className="blog-content">
            <Link to={'./'} className="post">
                <img src={post1Img} alt="post 1 image" />
                <h6>First Time Home Owner Ideas</h6>
                <p className="disc para">
                by <span>Kristin Watson</span> on <span>Dec 19, 2021</span>
                </p>
            </Link>
            <Link to={'./'} className="post">
                <img src={post2Img} alt="post 2 image" />
                <h6>How To Keep Your Furniture Clean</h6>
                <p className="disc para">
                by <span>Robert Fox</span> on <span>Dec 15, 2021</span>
                </p>
            </Link>
            <Link to={'#'} className="post">
                <img src={post3Img} alt="post 3 image" />
                <h6>Small Space Furniture Apartment Ideas</h6>
                <p className="disc para">
                by <span>Kristin Watson</span> on <span>Dec 12, 2021</span>
                </p>
            </Link>
        </div>
    )
}