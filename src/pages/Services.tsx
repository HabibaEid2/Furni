import { useContext, useEffect } from "react";
import { currentPage } from "../Context";
import ChooseUsItems from "./Home/ChooseUsItems";
import Testimonials from "./Home/Testimonials";
import CraftsWithE_Materail from "./Home/CraftsWithE_Material";

export default function Services() {
    const context = useContext(currentPage) ; 
    useEffect(() => {
        context?.setPage('SERVICES') ; 
    } , [])
    return (
        <div className="services-page section-padding">
            <div className="container">
                <div className="choose-us in-services">
                    <ChooseUsItems/>
                    <ChooseUsItems/>
                </div>
                <CraftsWithE_Materail/>
                <Testimonials/>
            </div>
        </div>
    )
}