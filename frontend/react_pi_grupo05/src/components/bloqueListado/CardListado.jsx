import React from "react";
import "@fontsource/roboto/700.css";
import "./listado.css";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function CardListado({ item }) {
  return (
    <>
      <div className="containerListado">
        <div className="containerCard">
          <div className="containerImgListado">
            <img src={item.img} alt="img" className="imgListado" />
          </div>
          <div className="containerInfoListado">
            <p className="txtCategoriaListado">{item.category}</p>
            <h3 className="txtTitleListado">{item.title}</h3>
            <div className="containerLocationListado">
              <IoLocationSharp />
              <span key={9}>{item.location}</span>
            </div>
            <p className="txtDescriptionListado">{item.description}</p>
            <div className="containerBtnListado">
              <Link to="/detail" key={13} style={{ textDecoration: "none" }}>
                <button className="btnListado">Ver Detalle</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardListado;
