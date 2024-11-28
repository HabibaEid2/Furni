import { useContext, useEffect } from "react";
import Nav from "../../components/Nav";
import ChooseUs from "./ChooseUs";
import CraftsWithE_Materail from "./CraftsWithE_Material";
import RecentBlog from "./RecentBlog";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { currentPage } from "../../Context";

export default function Home() {
    const context = useContext(currentPage) ; 
    useEffect(() => {
        context?.setPage('home') ; 
    } , [])
    return (
        <>
        <Nav page = {'home'}/>
        <CraftsWithE_Materail/>
        <ChooseUs/>
        <Services/>
        <Testimonials/>
        <RecentBlog/>
        </>
    )
}