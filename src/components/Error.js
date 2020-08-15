import React from "react";
import PropTypes from "prop-types";

const Error = ({ mensaje }) => (
  <div className="message is-danger">
    <p className="message-body">{mensaje}</p>
  </div>
);

Error.prototype = {
  mensaje: PropTypes.string.isRequired,
};

export default Error;
