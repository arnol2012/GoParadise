import React from "react";
import "./footer.css";
import "@fontsource/roboto/700.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="containerFooter">
        <div className="txtContainer">
          <p>©2021 Digital Booking</p>
        </div>
        <div className="iconContainer">
          <div>
            <FaFacebook size={28} />
          </div>
          <div>
            <FaLinkedinIn size={28} />
          </div>
          <div>
            <FaTwitter size={28} />
          </div>
          <div>
            <FaInstagram size={28} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
