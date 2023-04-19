import React from 'react';
// import React, { useState } from React;
// import SearchBar from './SearchBar';
import './App.css';
import logo from "./assets/logo.png"
import Blackwidow from './assets/img/BlackWidow.png'
import CapitanAmerica from './assets/img/CapitanAmerica.png'
import IronMan from './assets/img/IronMan.png'
import Thanos from './assets/img/Thanos.png'
import Filter from './assets/img/Filter.png'


function App() {
  
  return (
    <div className="AgentsShield">
      <div className="logo">
        <img src={logo} alt="Logo" />

      </div>
      <div className="user-info">
        <div className="user-avatar">
          <img src="https://depor.com/resizer/GWrmmvJyrBzZJ3HjbXQKBDf4e08=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/D3XDQJQK5REKRE6T3IWVZ5TXZ4.jpg" alt="User_Avatar" />
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

            <section>
              <div>
                <img src={CapitanAmerica} alt=" Capitan America" />
              </div>
              <div>
                <p>Regeneration</p>
                <p>Motorcicle</p>
                <p>California</p>
              </div>
              <div></div>
            </section>
            <section>
              <div>
                <img src={IronMan} alt="Iron Man" />
              </div>
              <div>
                <p>Armadura</p>
                <p>Ferrari Aventador</p>
                <p>Miami</p>
              </div>
              <div></div>
            </section>
            <section>
              <div>
                <img src={Thanos} alt="Thanos" />
              </div>
              <div>
                <p>Fuerza, velocidad, durabilidad sobrehumana</p>
                <p>Flota Naval</p>
                <p>Space</p>
              </div>
              <div></div>
            </section>
            <section>
              <div>
                <img src={Blackwidow} alt="Filtro" />
              </div>
              <div>
                <p>Sistema inmunológico mejorado</p>
                <p>Helicopter</p>
                <p>Russia</p>
              </div>
              <div></div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}


export default App;
