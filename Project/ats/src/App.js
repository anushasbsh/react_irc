import React from "react";
import { Route, Routes } from "react-router";
import ResponsiveAppBar from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Page from "./components/Page";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Contact from "./components/Contact";
import ServicesGrid from "./components/ServicesGrid"; // Update the path based on your file structure
import Success from "./components/Success";
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<ServicesGrid />} />
          <Route path="/Page" element={<Page />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
