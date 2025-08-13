import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <section className="header">
      <div className="navbar">
        <h1 className="logo">Decor Vista</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-icons">
          <NavLink to="/favorite">
            <span className="material-symbols-rounded">favorite</span>
          </NavLink>
          <NavLink to="/cart">
            <span className="material-symbols-rounded">add_shopping_cart</span>
          </NavLink>
          <div className="profile-dropdown">
            <span className="material-symbols-rounded profile-icon">
              account_circle
            </span>
            <div className="dropdown-menu">
              <NavLink to="/profile">View Profile</NavLink>
              <NavLink to="/profile">Logout</NavLink>
            </div>
          </div>
        </div>
      </div>
      {title && (
        <div className="hero">
          <h2>{title}</h2>
        </div>
      )}
    </section>
  );
};

export default Header;
