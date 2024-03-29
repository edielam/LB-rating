import React from "react";
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";
import Dashboard from "./components/Dashboard";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'alertifyjs/build/css/alertify.min.css';
import Home from "./components/home/Home";

/*Animation Library Initialization */
AOS.init({
  once: true
});


function App() {

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Dashboard />} />
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
