import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart";
import Nav from "./components/Nav";
import { useContext } from "react";
import { currentPage } from "./Context";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

export default function App () {
    const context = useContext(currentPage) ; 
    return (
        <>
        <Header/>
        <Nav page={context !== null ? context.page : 'home'}/>
        <Routes>
            <Route element = {<Home/>} path="Furni"/>
            <Route element = {<Cart/>} path="Furni/cart"/>
            <Route element = {<Shop/>} path="Furni/shop"/>
            <Route element = {<AboutUs/>} path="Furni/about-us"/>
            <Route element = {<Services/>} path="Furni/services"/>
            <Route element = {<Blog/>} path="Furni/blog"/>
            <Route element = {<ContactUs/>} path="Furni/contact-us"/>
        </Routes>
        <Footer/>
        </>
    )
}