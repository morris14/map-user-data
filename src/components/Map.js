import React from "react";
import GoogleMapReact from "google-map-react";

import StyledMap from "./styles/Map";

const Map = () => {
    return (
        <StyledMap>
            <GoogleMapReact defaultCenter={{ lat: -37.3159, lng: 81.1496 }} defaultZoom={3} />
        </StyledMap>
    );
};

export default Map;
