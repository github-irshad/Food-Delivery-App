import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { assets } from "./assets/assets";
import { Routes, Route } from "react-router-dom";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopUp/LoginPopup";

const App = () => {
  const[showLogin,setShowLogin] = useState(false);
  useEffect(()=>{
    if(showLogin){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow ='auto';
    }
  },[showLogin])
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
