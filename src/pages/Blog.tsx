import { useContext, useEffect } from "react";
import { currentPage } from "../Context";
import RecentBlog from "./Home/BlogContent";

export default function Blog () {
    const context = useContext(currentPage) ; 
    useEffect(() => {
        context?.setPage('BLOG') ; 
    } , [])
    return (
        <div className="blog-page section-padding">
            <div className="container">
                <RecentBlog/>
                <RecentBlog/>
                <RecentBlog/>
            </div>
        </div>
    )
}