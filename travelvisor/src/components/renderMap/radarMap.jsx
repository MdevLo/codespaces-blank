import React, { useEffect } from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

const RadarMap = () => {
 useEffect(() => {
    Radar.initialize('prj_live_pk_dde11192f0aee4af731a81bb87007150022afc9c');

    // create a map
    const map = new Radar.ui.map({
      container: 'map',
      style: 'radar-default-v1',
      
      
    });

    // add a marker to the map
    // Radar.ui.marker({ text: 'Radar HQ' })
    //   .setLngLat([-73.9910078, 40.7342465])
    //   .addTo(map);
 }, []);

 return (
    <div>
      <div id="map" style={{ height: '85vh', width: '212%' }}  />
    </div>
 );
};

export default RadarMap;