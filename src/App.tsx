import {Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/home" element = {<Home/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
