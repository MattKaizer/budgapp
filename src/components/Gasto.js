import React from "react";
import PropTypes from "prop-types";

const Gasto = ({ gasto }) => (
  <li className="gastos">
    <p className="has-icons-left">
      {gasto.nombre}
      <span className="gasto">
        <i className="fas fa-euro-sign"></i>
        <span className="pl-3">{gasto.cantidadGasto}</span>
      </span>
    </p>
  </li>
);

Gasto.prototype = {
  gasto: PropTypes.object.isRequired,
};

export default Gasto;
