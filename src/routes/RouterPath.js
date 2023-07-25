import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MainSection from "../pages/MainSection";
import Careers from "../pages/Careers";

const RouterPath = () => {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/career" element={<Careers />} />
        </Routes>
    
    </>
  );
};

export default RouterPath;
