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
            <a href="#">Contact Me</a>
            <a
              href="https://github.com/Abhishek7891230"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/abhishek-poojary777"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:abhishekpoojar69@gmail.com">Email</a>
          </div>
        )}
      </div>
    </div>
  );
}
