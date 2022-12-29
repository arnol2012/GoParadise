import React from "react";
import dataBase from "../../db/dataBase.json";
import CardListado from "./CardListado";

function Listado() {
  return (
    <div className="containerBloqueListado">
      <h2 className="tituloBloqueListado">Recomendaciones</h2>
      {dataBase.map((item) => (
        <CardListado item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Listado;
