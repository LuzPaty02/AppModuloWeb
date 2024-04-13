import logo from "./logo.svg";
import "./App.css";
import DeleteData from "./components/deleteData.js";
import React, { useState, useEffect } from "react";

import axios from "axios";
import UpdateData from "./components/updateData.js";

const llamar = () => {
  axios.delete("http://localhost:8002/eliminar/gato").then((data) => {
    console.log(data);
  });
};

<button onClick={llamar}>Consumir api</button>;


function Insecto(propiedades) {
  const [estacion, setEstacion] = useState('invierno');
  
  const cambiar = () => {
      setEstacion('primavera'); 
  };
    
    
  if (estacion === 'invierno') {
      return <div>
     <p>Ya no hay insectos</p>
      <button type="button" onClick={cambiar}>Cambiar Estacion</button> 
      </div>;
    } else {
      return <p>{propiedades.nombre}</p>;
    }
  }
  
  function DatosComponent() {
    const [datos, setDatos] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error');
          }
          return response.json();
        })
        .then(data => {
          setDatos(data);
      
        });
    }, []);
  
  
  
    return (
      <div>
        <h1>Datos de la Base de Datos</h1>
        <ul>
          {datos.map(item => (
            <li key={item.mensaje}>{item.mensaje} {item.campeon}</li>  
          ))}
        </ul>
      </div>
    );
  }  

  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>Eliminar Datos</h1>
          <DeleteData />
          <h1>Actualizar Datos</h1>
          <UpdateData />
          {/* Render the Insecto component */}
          <Insecto nombre="Nombre del Insecto" />
          {/* Render the DatosComponent component */}
          <DatosComponent />
        </header>
      </div>
    );
  }

  export default App;
