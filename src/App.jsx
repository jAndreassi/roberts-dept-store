import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
