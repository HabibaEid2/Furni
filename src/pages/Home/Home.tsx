import { useContext, useEffect } from "react";
import ChooseUs from "./ChooseUs";
import CraftsWithE_Materail from "./CraftsWithE_Material";
import BlogContent from "./BlogContent";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { currentPage } from "../../Context";
import { Link } from "react-router-dom";

export default function Home() {
    const context = useContext(currentPage) ; 
    useEffect(() => {
        context?.setPage('home') ; 
    } , [])
    return (
        <>
        <CraftsWithE_Materail/>
        <ChooseUs/>
        <Services/>
        <Testimonials/>
        <section className="recent-blog section-padding">
            <div className="container">
                <div className="head">
                    <h2>Recent Blog</h2>
                    <Link to = "/">View All Posts</Link>
                </div>
                <BlogContent/>
            </div>
        </section>
        </>
    )
}