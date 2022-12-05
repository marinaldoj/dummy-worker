import React, {useState, useEffect} from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";

import './styles/App.css'

function App() {

  const mockImages = [
    {
      title: 'Imagem 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageLink: 'https://dummyimage.com/350x500/ff0000/ffffff.png&text=img+1',
    },
    {
      title: 'Imagem 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageLink: 'https://dummyimage.com/350x500/15ff00/ffffff.png&text=img+2',
    },
    {
      title: 'Imagem 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageLink: 'https://dummyimage.com/350x500/007bff/ffffff.png&text=img+3',
    },
    {
      title: 'Imagem 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageLink: 'https://dummyimage.com/350x500/ff00ff/ffffff.png&text=img+4',
    },
    {
      title: 'Imagem 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageLink: 'https://dummyimage.com/350x500/0009ff/ffffff.png&text=img+5',
    },
    {
      title: 'Imagem 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageLink: 'https://dummyimage.com/350x500/ff7300/ffffff.png&text=img+6',
    },
  ]

  const [offset, setOffset] = useState(0);

    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', onScroll, { passive: true });

    const containerStyle = {
      width: '100%',
      height: '80%',
      borderRadius: '4px'
    };

    const center = {
      lat: 40.6393791,
      lng: -8.6621375
    };

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.API_KEY
    })

    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
  
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    const [map, setMap] = React.useState(null)
  return (
    <div className="content-wrapper" id="Top">
      <div className="container-menu-fixed">
          <div className="container-logo">
            Dummy<span>Worker</span>
          </div>
          <div className="container-options-menu">
            <ul>
              <li>
                <a href="#Top">Atividade</a>
              </li>
              <li>
                <a href="#Sectors">Sectores de Atividade</a>
              </li>
              <li>
                <a href="#inWorld">Atividade no Mundo</a>
              </li>
              <li>
                <a href="#Responsibility">Responsabilidade Social</a>
              </li>
              <li>
                <a href="#Contacts">Contactos</a>
              </li>
            </ul>
            <ul id="Language">
              <li>
                <a href="#Language">PT</a>
              </li>
              <li>
                <a href="#Language">EN</a>
              </li>
              <li>
                <a href="#Language">ES</a>
              </li>
            </ul>
          </div>
        </div>
      <div className="body-content-group">
        <div className="container-info" id="Activity">
          <div className="layer-info">
            <h3>Bem-vindo</h3>
            <span className="title-base">Atividade</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="know-more"><MdKeyboardArrowDown size={16} />Saiba mais sobre o grupo</button>
          </div>
          <div className="container-carrousel">
            <div className="container-card">
              <Swiper
                grabCursor={true}
                loop={true}
                effect={"creative"}
                pagination={true}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                modules={[EffectCreative]}
                >
                  {mockImages && mockImages.map((mock, index) => {
                      return(
                        <SwiperSlide>
                          <img className="images-vertical-group" src={mock.imageLink} alt="dummy" key={index}/>
                        </SwiperSlide>
                      )
                  })}
                </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="body-content-group" id="Sectors">
        <div className="container-info">
          <div className="layer-info">
            <span className="title-base">Sectores de Atividade</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="container-sectores-info">
            <div className="drag-image">
                <img src="https://dummyimage.com/440x640/ff7300/ffffff.png" alt="Imagem"/>
                <span>Imagem 1</span>
            </div>
            {/* <div className="drag-image">
                <span>Imagem 1</span>
            </div>
            <div className="drag-image">
                <span>Imagem 1</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="body-content-group" id="inWorld">
        <div className="container-info">
          <div className="layer-info">
            <span className="title-base">Atividade no Mundo</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="container-another-info">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              ></GoogleMap> 
            ) : null }
          </div>
        </div>
      </div>
      <div className="body-content-group" id="Responsibility">
        <div className="container-info">
          <div className="layer-info">
            <span className="title-base">Responsabilidade Social</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="container-dummy-card">
            <div className="container-card">
              <Swiper
                grabCursor={true}
                effect={"creative"}
                pagination={true}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                modules={[EffectCreative]}
              >
                {mockImages && mockImages.map((mock, index) => {
                    return(
                      <SwiperSlide>
                        <img className="images-vertical-group" src={mock.imageLink} alt="dummy" key={index}/>
                      </SwiperSlide>
                    )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div  className="body-content-group" id="Contacts">
        <div className="container-info">
          <div className="layer-info">
            <span className="title-base">Contactos</span>
            <p>Retirando a morada todos os dados são verdadeiros, por isso caso queira me contactar está livre :D <br/>
            todos os contactos verdadeiro são "Clicaveis".
            </p>
          </div>
          <div className="container-another-info">
            <div className="layer-info">
              <p>Cod. 3800-187, Aveiro <br/>
              R. Dr. João de Moura 2 <br/>
              Mail: <a href="mailto:junior_qst@hotmail.com">junior_qst@hotmail.com</a> <br/>
              Phone: <a href="https://api.whatsapp.com/send?1=pt_PT&phone=351924884490" target="_blank" rel="noreferrer">924 884 490</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <span>Developed by:</span>
        <FaLinkedin size={18} color={"#0e76a8"} />
        <a href="https://www.linkedin.com/in/marinaldo-carvalho-0a470a192/" target="_blank" rel="noreferrer"> Marinaldo Carvalho </a>
      </div>

      {offset >= 200 && (
        <div className="to-top">
          <a href="#Top">
            <MdKeyboardArrowUp size={40} />
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
