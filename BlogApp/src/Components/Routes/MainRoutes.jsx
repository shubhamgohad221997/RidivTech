import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Blog from "../BlogDetails/Blog";
import Home from "../HomePage/Home";
import About from "../About/About";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutPage" element={<About />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
