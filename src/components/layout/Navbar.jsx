import React from "react";
import { Link } from "react-router-dom";
import toogle_light from "../icons/brightness.png";
import toogle_dark from "../icons/night-mode.png";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme; 
  };

  return (
    <nav className="navbar bg-success">
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <ul>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <img 
            onClick={toggleTheme} 
            style={{ width: '28px', height: '28px', cursor: 'pointer' }} 
            src={theme === 'light' ? toogle_light : toogle_dark} 
            alt="Toggle Theme" 
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
