import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/700.css";
import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Header() {
  const [mobile, setMobile] = useState(true);

  const handleMobile = () => {
    setMobile(!mobile);
  };

  const drawerMenu = (
    <>
      <div className="txtDrawer">
        <p>MENÚ</p>
      </div>
      <div className="containerButtonDrawer">
        <Link to="/register" style={{ textDecoration: "none" }}>
          <button className="btnDrawer">Crear Cuenta</button>
        </Link>
        <div className="barritaDrawer"></div>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button className="btnDrawer">Iniciar Sesión</button>
        </Link>
      </div>
      <div className={mobile ? "iconDrawerNone" : "iconDrawer"}>
        <div className="iconDrawerRedes">
          <FaFacebook size={28} />
        </div>
        <div className="iconDrawerRedes">
          <FaLinkedinIn size={28} />
        </div>
        <div className="iconDrawerRedes">
          <FaTwitter size={28} />
        </div>
        <div className="iconDrawerRedes">
          <FaInstagram size={28} />
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="containerHeader">
        <div className="containerLogo">
          <div>
            {" "}
            <Link to="/">
              <img src="https://i.imgur.com/mDQF2WA.png" alt="logo" />
            </Link>
          </div>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className="textoLogo">Sentite como en tu hogar</p>
            </Link>
          </div>
        </div>

        {mobile ? (
          <div className="iconHamburger">
            <GiHamburgerMenu
              size={28}
              color={"#545776"}
              onClick={handleMobile}
            />
          </div>
        ) : (
          <div className="iconHamburger">
            <ImCross size={24} color={"#545776"} onClick={handleMobile} />
          </div>
        )}

        <div className="containerButton">
          <Link to="/register">
            <button className="buttonUp">Crear cuenta</button>
          </Link>
          <Link to="/login">
            <button className="buttonUp">Iniciar sesión</button>
          </Link>
        </div>
      </div>
      <div className={mobile ? "containerDrawerNone" : "containerDrawer"}>
        {drawerMenu}
      </div>
    </>
  );
}

export default Header;
