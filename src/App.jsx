import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route path="/" element={ <Home /> } />

        
      
      </Routes>
      <Footer />
        
    </BrowserRouter>
      
  );
}

export default App;
