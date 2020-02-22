import React, { Fragment, useState, useEffect } from "react";

import Form from "./components/Form";
import Cita from "./components/Cita";

function App() {
  // listado de citas
  const [citas, setCitas] = useState([]);
  // revisando cambios en state
  useEffect(() => {
    console.log("citas state cambian");
  }, [citas]);

  // funcion agregar citas
  const createCita = cita => {
    setCitas([...citas, cita]);

    //console.log(citas);
  };
  // funcion eliminar cita
  const deleteCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id);
    setCitas(newCitas);
    //console.log(id);
  };

  //titulo
  const titulo =
    citas.length === 0 ? "Agrega una cita" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createCita={createCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
