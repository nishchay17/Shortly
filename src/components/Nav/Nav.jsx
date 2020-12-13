import React from "react";
import logo from "../../assets/logo.svg";
import "./nav.css";

function Nav() {
  return (
    <nav className="container">
      <div className="nav-mobile">
        <img className="logo" alt={logo} src={logo} />
        <label for="toggle" className="label">
          &#9776;
        </label>
      </div>
      <input type="checkbox" id="toggle" />
      <div className="mobile-menu">
        <a href="#">Features</a>

        <a href="#">Pricing</a>

        <a href="#">Resources</a>
        <div className="while-line"></div>
        <a href="#">Login</a>
        <button className="btn btn-nav-block" id="signup">
          Sign Up
        </button>
      </div>
      <div className="nav flex-space-between">
        <div className="first-half flex-space-around ">
          <img alt={logo} src={logo} />
          <ul className="flex-space-around">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
        <div className="log-btn-gp">
          <ul className="flex-space-around">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <button className="btn btn-nav">Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
