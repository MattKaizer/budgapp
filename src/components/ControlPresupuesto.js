import React, { Fragment } from "react";

const ControlPresupuesto = ({ presupuesto, resto }) => {
  return (
    <Fragment>
      <div className="notification is-info is-light">
        <p className="has-icons-left">
            Presupuesto:
          <span className="gasto ml-3">
            <i className="fas fa-euro-sign"></i>
            <span className="pl-3">{presupuesto}</span>
          </span>
        </p>
        {/* <p>Presupuesto:<span>{presupuesto}</span></p> */}
      </div>
      <div className="notification">
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

export default ControlPresupuesto;
