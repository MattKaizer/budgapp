import React from 'react';

const Gasto = ({gasto}) => ( 
    <li className="gastos">
        <p className="has-icons-left">
            { gasto.nombre }
            <span className="gasto">
                <i className="fas fa-euro-sign"></i>
                <span className="pl-3">{ gasto.cantidadGasto }</span>
            </span>
        </p>
    </li>
 );
 
export default Gasto;