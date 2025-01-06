import Link from "next/link";
import React from "react";
import Sidebar from "./SideNavbar";

const Header = () => {
  return (
    <header className="header-container">
      <div className="nav-wrapper">
        <nav className="main-nav">
          <Sidebar/>
        <div className="nav-div">
          <Link href="#home-sec" className="logo-link">
            <li className="logo-text">LOgo</li>
          </Link>
        </div>
          <ul className="nav-menu">
            <Link href="#home-sec">
              <li className="nav-item">Home</li>
            </Link>
            <Link href="#service-sec">
              <li className="nav-item">Services</li>
            </Link>
            <Link href="#about-sec">
              <li className="nav-item">About me</li>
            </Link>
            <Link href="#contact-container">
              <li className="nav-item">Contact me</li>
            </Link>
            <Link href="#">
              <li className="nav-item">Portfolio</li>
            </Link>
          </ul>
          
          <button className="hire-button">Hire Me</button>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;