import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
// import todo from "../images/icon-todo.svg";
const Header = () => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    let navbar = document.querySelector(".header .navbar");

    let menu = document.querySelector("#menu-btn");

    menu.onclick = () => {
      menu.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    };

    window.onscroll = () => {
      menu.classList.remove("fa-times");
      navbar.classList.remove("active");
    };
  };

  useEffect(() => {
    toggleMenu();
    return () => {
      toggleMenu();
    };
  }, []);

  return (
    <header className="header">
      <div className="image">
        <img src={logo} alt="" />
      </div>
      <nav className="navbar">
        <a href="#home" className="drop">
          Features{"  "}
          {/* {active ? (
            <i className="fas fa-angle-down"></i>
          ) : (
            <i className="fas fa-angle-up"></i>
          )} */}
        </a>
        <a href="#Company">
          Company{" "}
          {/* {active ? (
            <i className="fas fa-angle-down"></i>
          ) : (
            <i className="fas fa-angle-up"></i>
          )} */}
        </a>
        <a href="#Careers">Careers</a>
        <a href="#about">About</a>
        <div className="hidden">
          <a href="#login">Login</a>
          <button className="btnn">Register</button>
        </div>
      </nav>
      <div className="hidden2">
        <a href="#login">Login</a>
        <button className="btnn">Register</button>
      </div>

      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  );
};

export default Header;
