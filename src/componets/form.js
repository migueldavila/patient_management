import React, { Fragment, useState } from "react";

const Form = () => {
  // crear state de citas
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const [error, setError] = useState(false);

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const updateState = e => {
    setError(false);
    const { name, value } = e.target;
    setCita({
      ...cita,
      [name]: value
    });

    console.log("actualizando----", cita);
  };

  const submitCita = e => {
    e.preventDefault();
    //validate
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    // set ID

    // create cita

    // refresh form

    console.log("enviando", cita);
  };

  return (
    <Fragment>
      <h1>Crear cita</h1>
      {error ? <p>Error</p> : null}
      <form onSubmit={submitCita}>
        <label>Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Mascota"
          onChange={updateState}
          value={mascota}
        />
        <label>Nombre dueño mascota</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño mascota"
          onChange={updateState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={updateState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={updateState}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={updateState}
          value={sintomas}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
          onChange={updateState}
        >
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
