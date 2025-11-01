import { useState } from "react";
import "../styles/navbar.css";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-right-section">
        <a href="/">
          <img
            className="main-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHqPYTUM0LQDtZizUBROZLxlJtNVq0RUatg&s"
            alt="App logo"
          />
          <span className="logo-text">Resume Analyzer</span>
        </a>
      </div>
      <div className="navbar-left-section">
        <button className="login-btn">Sign in/Login</button>
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          &#9776;
        </div>

        {open && (
          <div className="menu">
            <a href="#">Contact Us</a>
            <a href="#">Other Services</a>
            <a href="#">About</a>
          </div>
        )}
      </div>
    </div>
  );
}
