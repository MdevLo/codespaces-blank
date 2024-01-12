import React from "react"
import GoogleMapReact from 'google-map-react'
import { Paper, Typography} from '@mui/material'


import './styles.css'
const Map = ({ setCoordinates, setBounds, coordinates }) => {
  
  return(
   <div className="mapContainer">
    <GoogleMapReact
    bootstrapURLKeys={{key: 'AIzaSyBE4wLjqbZmWLlzBI5g5w3xslF0abZq1ok'}}
    defaultCenter={coordinates}
    center={coordinates}
    defaultZoom={14}
    margin ={[50, 50, 50, 50]}
    options={''}
    onChange={(e) => {
      console.log(e)
      setCoordinates({ lat: e.center.lat, lng: e.center.lng})
      setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
    }}
   >

    </GoogleMapReact>
   </div>
  )
 
}
export default Map

