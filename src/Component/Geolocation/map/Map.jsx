import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Map = () => {
    const mapStyles = {
        height: "524px",
        width: "1180px"
      };
    
      const defaultCenter = {
        lat: 51.505,
        lng: -0.09
      };
    
      return (
        <LoadScript googleMapsApiKey="AIzaSyAmDFNg52m_7XvCBSLWUy3GW83vw5-eZXI">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      );
}

export default Map