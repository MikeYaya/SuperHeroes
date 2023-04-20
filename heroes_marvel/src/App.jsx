import React, { useState, useEffect } from 'react';
import './App.css';
import logo from "./assets/logo.png"
import Filter from './assets/img/Filter.png'
import Coulson from './assets/img/Coulson.jpg'

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://8e544b85-8b00-4c56-b151-17da2d92d545.mock.pstmn.io/marvel');
      const data = await response.json();
      setCharacters(data);
    }
    fetchData();
  }, []);

  return (
    <div className="AgentsShield">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="user-info">
        <div className="user-avatar">
          <img 
              src={Coulson}
              alt="User_Avatar" />
          <p>Agent Coulson</p>
          <nav>
            <div>Registrar</div>
            <div>Asignar</div>
            <div>Undefind</div>
          </nav>
        </div>
        <div className="content">
          <header>
            <input type={"search"} name="" id="" placeholder='Buscar'/>
            <button>
              <img src={Filter} alt="Black Widow" />
            </button>
          </header>
          <article className='Buscador1'>
            {characters.map((character) => (
              <section key={character.id}>
                <div>
                  <img className='logs' src={character.image} alt={character.name} />
                </div>
                <div>
                  <p>{character.alias}</p>
                  <p>{character.poderes}</p>
                  <p>{character.vehicle}</p>
                  <p>{character.location}</p>
                </div>
              </section>
            ))}
          </article>
          </div>
        </div>
      </div>
     );
}

export default App;
