import React from "react";
import "./Navbar.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="navbar-logo">Monika Verma</span>
            </div>
            <ul className="navbar-right">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#feedback">Share Feedback</a></li>
                <a href="#contact">
                    <button class="connect-btn"><span>Connect</span></button>
                </a>


            </ul>
        </nav>
    );
};

export default Navbar;
