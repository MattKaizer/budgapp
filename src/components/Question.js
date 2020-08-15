import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Question = ({ setPresupuesto, setResto, setMostrarQuestion }) => {
  //defino los states
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //Submit
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    //post validar
    setError(false);
    setPresupuesto(cantidad);
    setResto(cantidad);
    setMostrarQuestion(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <div className="field">
          <p className="control has-icons-left">
            <input
              type="number"
              className="input is-fullwidth is-primary"
              placeholder="Coloca tu presupuesto"
              step="any"
              autoFocus
              onChange={(e) => {
                setCantidad(parseFloat(e.target.value));
              }}
            />
            <span className="icon is-small is-right">
              <i className="fas fa-euro-sign"></i>
            </span>
          </p>
        </div>

        <input
          type="submit"
          className="button is-primary is-fullwidth"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

Question.prototype = {
  setPresupuesto: PropTypes.func.isRequired,
  setResto: PropTypes.func.isRequired,
  setMostrarQuestion: PropTypes.func.isRequired,
};

export default Question;
