import React from 'react';

const Error = ({mensaje}) => (
    <div className="message is-danger">         
        <p className="message-body">{mensaje}</p>
    </div>
)
 
export default Error;