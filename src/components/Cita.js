import React from "react";

// prop types
import PropTypes from "prop-types";

const Cita = ({ cita, deleteCita }) => (
  <div className="cita">
    <p>
      Mascota: <span>{cita.mascota}</span>
    </p>
    <p>
      Dueño: <span>{cita.propietario}</span>
    </p>
    <p>
      Fecha: <span>{cita.fecha}</span>
    </p>
    <p>
      Hora: <span>{cita.hora}</span>
    </p>
    <p>
      Sintomas: <span>{cita.sintomas}</span>
    </p>
    <button
      onClick={() => deleteCita(cita.id)}
      className="button eliminar u-full-width"
    >
      Eliminar &times;
    </button>
  </div>
);

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  deleteCita: PropTypes.func.isRequired,
}

export default Cita;
