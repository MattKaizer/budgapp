import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { revisarPresupuesto } from "../helpers";

const ControlPresupuesto = ({ presupuesto, resto }) => {
  return (
    <Fragment>
      <div className="notification is-info is-light mb-3">
        <p className="has-icons-left">
          Presupuesto:
          <span className="gasto ml-3">
            <i className="fas fa-euro-sign"></i>
            <span className="pl-3">{presupuesto}</span>
          </span>
        </p>
        {/* <p>Presupuesto:<span>{presupuesto}</span></p> */}
      </div>
      <div className={revisarPresupuesto(presupuesto, resto)}>
        <p className="has-icons-left">
          Restante:
          <span className="gasto ml-3">
            <i className="fas fa-euro-sign"></i>
            <span className="pl-3">{resto}</span>
          </span>
        </p>
      </div>
    </Fragment>
  );
};

ControlPresupuesto.prototype = {
  presupuesto: PropTypes.number.isRequired,
  resto: PropTypes.number.isRequired,
};

export default ControlPresupuesto;
