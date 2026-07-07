import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import Product from "./pages/Product";
import Courses from "./pages/Courses";
import Men from "./pages/Men";
import Women from "./pages/Women";
import CourseId from "./pages/CourseId";

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="/courses" element={<Courses />} />

      {/* Nested Routes */}
      <Route path="/product/men" element={<Men/>} />
      <Route path="/product/women" element={<Women/>} />

      {/* Dynamic Routing */}
      <Route path="courses/:Id" element={<CourseId/>} />

      

    </Routes>
    </>
  );
};

export default App;
