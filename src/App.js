import React, { Fragment, useState } from "react";
import Question from "./components/Question";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  //definimos states
  const [presupuesto, setPresupuesto] = useState(0);
  const [resto, setResto] = useState(0);
  const [mostrarQuestion, setMostrarQuestion] = useState(true);
  const [listaGastos, setListaGastos] = useState([]);

  //lista de gastos
  const agregarNuevoGasto = (gasto) => {
    setListaGastos([...listaGastos, gasto]);
  };

  return (
    <Fragment>
      <div className="container isFullhd">
        <main>
          <h1>BudgAPP</h1>
          <div className="contenido-principal contenido">
            {mostrarQuestion ? (
              <Question
                setPresupuesto={setPresupuesto}
                setResto={setResto}
                setMostrarQuestion={setMostrarQuestion}
              />
            ) : (
              <article className="columns">
                <section className="section column">
                  <Formulario agregarNuevoGasto={agregarNuevoGasto} />
                </section>
                <section className="section column">
                  <Listado listaGastos={listaGastos} />
                  <ControlPresupuesto presupuesto={presupuesto} resto={resto} />
                </section>
              </article>
            )}
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
