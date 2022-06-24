import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import './MapPage.css'

export interface MapPageProps { }

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({  //importação da API
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCkMxctAJIi2YZXs1E95oZZRKpWmCI8a-E"  // chave feita pelo console google(site APi)
  });

  const position ={   // peguei a latitude e longetude pelo google maps e coloquei as coordenas 
    lat: -23.549444061245858,
    lng: -46.649231484850006
  }

  return (
  <div className='map'>
    {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '300px', marginTop: '30px' }} // tamanho do map na tela 
        center={position} // a const 
        zoom={15} // visao do map
      >
        <Marker position={position}  
            options={{
              label: {
                text: "Posição Teste",
                className: "map-marker"
              }
            }}
        />{/*  marcação do mapa  */}
      </GoogleMap>
    ) : (
      <></> // caso n carregue vai returnar uma div vazia 
    )}
  </div>
)}

export default MapPage;