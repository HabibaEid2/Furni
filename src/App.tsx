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
            <Route element = {<Home/>} path="/"/>
            <Route element = {<Home/>} path="/home"/>
            <Route element = {<Cart/>} path="/cart"/>
            <Route element = {<Shop/>} path="/shop"/>
            <Route element = {<AboutUs/>} path="/about-us"/>
            <Route element = {<Services/>} path="/services"/>
            <Route element = {<Blog/>} path="/blog"/>
            <Route element = {<ContactUs/>} path="/contact-us"/>
        </Routes>
        <Footer/>
        </>
    )
}