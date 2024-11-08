import {Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Cart from "./pages/Cart/Cart"
import Shop from "./pages/Shop/Shop"
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/home" element = {<Home/>} />
      <Route path = "/shop" element = {<Shop/>} />
      <Route path = "/cart" element = {<Cart/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
