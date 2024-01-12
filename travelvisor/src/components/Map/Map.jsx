import React from "react"
import RadarMap from "../renderMap/radarMap"

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  
  return(
   <div>
     <RadarMap
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={''}
      onChange={(e) =>{
        console.log(e)
        setCoordinates({ lat: e.center.lat, lng: e.center.lng })
        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
      }}
      onChildClick={''}
     >

     </RadarMap>
   </div>
  )
 
}
export default Map