import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Footwear from "./pages/Footwear";
import Clothing from "./pages/Clothing";
import Accessories from "./pages/Accessories";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Footwear" element={<Footwear />} />
        <Route path="/Clothing" element={<Clothing />} />
        <Route path="/Accessories" element={<Accessories />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
