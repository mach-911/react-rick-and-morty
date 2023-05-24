import { useState, useEffect } from "react";
import './App.css'
import Footer from "./components/Footer";


function App() {
  const [personajes, setPersonajes] = useState([]);

  const obtenerPersonajes = async () => {
    try {
      const endpoint = "https://rickandmortyapi.com/api/character";
      const respuesta = await fetch(endpoint);
      const datos = await respuesta.json();
      setPersonajes(datos.results.map(p => {
        return {
          name: p.name,
          status: p.status,
          img: p.image
        }
      }));
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    obtenerPersonajes();
  }, [])
  return (
    <>{

      !personajes ? <h2>Cargando...</h2>
        : <div className="container">
          {personajes.map(personaje => (
            <div className="card" key={personaje.name}>
              <img src={personaje.img} alt={personaje.name} loading="lazy" height="180" />
              <p>{personaje.name}</p>
              <small>{personaje.status}</small>
            </div>
          ))}
          <Footer />
        </div>
    }
    </>
  )
}

export default App
