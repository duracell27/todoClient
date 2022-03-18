import React, { useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { isLogin, logout } = useContext(AuthContext);
  return (
    <nav>
      <div className="nav-wrapper navbar green">
        <a href="/" className="brand-logo">
          Mern to do app
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            {isLogin ? (
              <a onClick={logout}>Log Out</a>
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
