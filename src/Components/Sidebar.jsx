import React from "react";
import { Link } from "react-router-dom";

import MainPageIcon from "../assets/main-page.png";
import MostLikedIcon from "../assets/most-liked.png";
import AllMoviesIcon from "../assets/all-movies.png";
import ContactUsIcon from "../assets/contact-us.png";

const Sidebar = () => {
  return (
    <div className="sidebar_list">
      <h2>
        <Link to="/">MovieHub</Link>
      </h2>      
      <h3 className="sidebar_hidden_logo">
        <Link to="/">MH</Link>
      </h3>
      <ul>
        <li>
          <Link to="/" className="side-link">
            <img src={MainPageIcon} alt="" />
            <p>Main page</p>
          </Link>
        </li>
        <li>
          <Link to="/most-liked" className="side-link">
            <img src={MostLikedIcon} alt="" />

            <p>Most liked</p>
          </Link>
        </li>
        <li>
          <Link to="/all-movies" className="side-link">
            <img src={AllMoviesIcon} alt="" />

            <p>All Movies</p>
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="side-link">
            <img src={ContactUsIcon} alt="" />

            <p>Contact us</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
