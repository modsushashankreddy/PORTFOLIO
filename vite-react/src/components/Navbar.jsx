import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
// import Project from "../pages/Project";
// import Contact from "../pages/Contact";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/project">Project</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
