import React from "react";
import "./Footer.css";
// import pngs
import Instagram from "../../assets/instagram.png";
import Logo from "../../assets/logo.png";
import Whatsapp from "../../assets/whatsapp.png";
import Facebook from "../../assets/facebook.png";

export default function footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Instagram} alt="" />
          <img src={Facebook} alt="" />
          <img src={Whatsapp} alt="" />
        </div>

        <div className="logo-f">
          <img src={Logo} alt="" className="src" />
        </div>
      </div>
      {/* <div className="blur">
        <div className="f"></div>
      </div> */}
      <div className="blur ff"></div>
      <div className="blur tt"></div>
    </div>
  );
}
