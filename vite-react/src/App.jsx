import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Home" Component={Home} />
          <Route path="/About" Component={About} />
        </Routes>
      </div>
    </>
  );
};

export default App;
