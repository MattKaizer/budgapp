import React from 'react';
import Gasto from './Gasto';

const Listado = ({listaGastos}) => ( 
        <div className="gastos-realizados">
            <h2>Listado de Gastos</h2>
             {
                 listaGastos.map(gasto => (
                    <Gasto 
                        key={gasto.id}
                        gasto={gasto}
                    />
                 ))
             }
        </div>
     );
 
export default Listado;