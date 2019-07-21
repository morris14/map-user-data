import React from "react";
import GoogleMapReact from "google-map-react";

import StyledMap from "./styles/Map";

const MapMarker = ({ user }) => <div>{user.name}</div>;

const Map = ({ data }) => {
    return (
        <StyledMap>
            <GoogleMapReact defaultCenter={{ lat: -37.3159, lng: 81.1496 }} defaultZoom={3}>
                {data.map(user => (
                    <MapMarker
                        key={user.id}
                        lat={user.address.geo.lat}
                        lng={user.address.geo.lng}
                        user={user}
                    />
                ))}
            </GoogleMapReact>
        </StyledMap>
    );
};

export default Map;
