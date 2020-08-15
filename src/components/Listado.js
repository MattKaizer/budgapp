import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Listado = ({ listaGastos }) => (
  <div className="gastos-realizados">
    <h2>Listado de Gastos</h2>
    {listaGastos.map((gasto) => (
      <Gasto key={gasto.id} gasto={gasto} />
    ))}
  </div>
);

Listado.prototype = {
  gastos: PropTypes.array.isRequired,
};

export default Listado;
