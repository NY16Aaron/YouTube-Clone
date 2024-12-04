import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import profile from "../../assets/jack.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          src={menu_icon}
          onClick={() => {
            setSidebar((prev) => (prev === false ? true : false));
          }}
          className="menu-icon"
          alt="menu icon"
        />
        <Link to="/">
          <img src={logo} className="logo" alt="logo icon" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search} alt="search image" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload} alt="upload icon" />
        <img src={more} alt="more icon" />
        <img src={notification} alt="notification icon" />
        <img src={profile} className="user-icon" alt="profile icon" />
      </div>
    </nav>
  );
};

export default Navbar;
