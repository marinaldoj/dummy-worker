import React from "react";

import './styles/App.css'

function App() {

  const mockImages = [
    {
      title: 'Loren',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageLink: 'https://dummyimage.com/600x400/000/fff',
      linkRedirect: 'https://dummyimage.com/600x400/000/fff'
    }
  ]

  return (
    <div className="content-wrapper">
      <div  className="body-content-group">
        <div className="container-menu">
          <div className="container-logo">
            Dummy<span>Worker</span>
          </div>
          <div className="container-options-menu">
            <ul>
              <li>
                <a href="#">Atividade</a>
              </li>
              <li>
                <a href="#">Sectores de Atividade</a>
              </li>
              <li>
                <a href="#">Atividade no Mundo</a>
              </li>
              <li>
                <a href="#">Responsabilidade Social</a>
              </li>
              <li>
                <a href="#">Contactos</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">PT</a>
              </li>
              <li>
                <a href="#">EN</a>
              </li>
              <li>
                <a href="#">ES</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-info">
          <div className="layer-info">
            <h3>Bem-vindo</h3>
            <span className="title-base">Atividade</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="know-more">Saiba mais sobre o grupo</button>
          </div>
          <div className="container-carrousel">
          </div>
        </div>
      </div>
      <div  className="body-content-group"></div>
      <div  className="body-content-group"></div>
      <div  className="body-content-group"></div>
      <div  className="body-content-group"></div>
    </div>
  );
}

export default App;
