import Header from "../../components/Header";
import Nav from "../../components/Nav";
import ChooseUs from "./ChooseUs";
import CraftsWithE_Materail from "./CraftsWithE_Material";
import RecentBlog from "./RecentBlog";
import Services from "./Services";
import Testimonials from "./Testimonials";

export default function Home() {
    return (
        <>
        <Nav/>
        <CraftsWithE_Materail/>
        <ChooseUs/>
        <Services/>
        <Testimonials/>
        <RecentBlog/>
        </>
    )
}