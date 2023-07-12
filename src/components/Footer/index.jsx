import React from "react";
import "./Footer.scss";
const imagePath = process.env.PUBLIC_URL + "/images/netflix-logo.png";

function Footer() {
  return (
    <div className="wrapper-footer">
      <div className="footer">
        <div className="footer__logo">
          <div className="logo">
            <img src={imagePath} alt="" width="200px" />
          </div>
        </div>
        <div className="footer__menus">
          <div className="footer__menu">
            <a href="/watch">Home</a>
            <a href="/watch">Contact us</a>
            <a href="/watch">Term of services</a>
            <a href="/watch">About us</a>
          </div>
          <div className="footer__menu">
            <a href="/watch">Live</a>
            <a href="/watch">FAQ</a>
            <a href="/watch">Premium</a>
            <a href="/watch">Privacy policy</a>
          </div>
          <div className="footer__menu">
            <a href="/watch">Must watch</a>
            <a href="/watch">Recent release</a>
            <a href="/watch">Top IMDB</a>
            <a href="/watch">Copyright</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
