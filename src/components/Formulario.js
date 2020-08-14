import React, { Fragment, useState } from "react";
import Error from "./Error";
import shortid from 'shortid';

const Formulario = ({agregarNuevoGasto}) => {
  //defino states
  const [nombre, setNombre] = useState("");
  const [cantidadGasto, setCantidadGasto] = useState(0)
  const [error, setError] = useState(false);

  //agregar gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false)
    //post validar - detalle gasto
    const gasto = {
        nombre,
        cantidadGasto,
        id: shortid.generate()
    }

    //pasar al componente principal
    agregarNuevoGasto(gasto)

    //reset formulario
    setNombre('')
    setCantidadGasto(0)
};

  return (
    <Fragment>
      <form onSubmit={agregarGasto}>
        <h2>Agrega tus Gastos Aquí </h2>
        {error ? <Error mensaje="Ambos campos obligatorios" /> : null}
        <div className="field campo">
          <label className="label">Nombre del Gasto</label>
          <p className="control">
            <input
              type="text"
              className="input is-fullwidth"
              placeholder="Transporte, Alimentos varios..."
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </p>
        </div>
        <div className="field campo">
          <label className="label">Cantidad de Gasto</label>
          <p className="control has-icons-left">
            <input
              type="number"
              className="input is-fullwidth"
              placeholder="200, 100..."
              step="any"
              value={cantidadGasto}
              onChange={e => parseFloat(setCantidadGasto(e.target.value))}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-euro-sign"></i>
            </span>
          </p>
        </div>
        <input
          type="submit"
          className="button is-primary is-fullwidth"
          value="Agregar Gasto"
        />
      </form>
    </Fragment>
  );
};

export default Formulario;
