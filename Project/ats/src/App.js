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
import CyberSecurityPage from './components/CyberSecurityPage';

import { ThemeProvider } from './components/ThemeContext.jsx';
function App() {
  return (
    <ThemeProvider>
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
          <Route path="/cybersecurity" element={<CyberSecurityPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </ThemeProvider>
 
  );
}

export default App;
