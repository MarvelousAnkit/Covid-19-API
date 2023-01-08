import React from 'react'
import '../Component/Maps.css'
import { MapContainer , GeoJSON , TileLayer,  } from "react-leaflet";
import { showDataOnMap } from './sort';
import 'leaflet/dist/leaflet.css';

const Maps = ({center,zoom,countries, casesType}) => {
  
  

  
  
  return (
    <div className='map'>
    <MapContainer center={center} zoom={zoom} noWrap={false} 
    
    
>
      
    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    
                />

{showDataOnMap(countries, casesType)}
      
    </MapContainer>


    
    </div>
  )
}

export default Maps