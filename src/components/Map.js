import React from "react";
import GoogleMapReact from "google-map-react";

import { useFetchData } from "../hooks/data";
import MapMarker from "./MapMarker";
import Sidebar from "./Sidebar";
import Container from "./Container";
import StyledMap from "./styles/Map";

const Map = () => {
    const userData = useFetchData("https://jsonplaceholder.typicode.com/users");

    return userData ? (
        <Container>
            <StyledMap>
                <GoogleMapReact defaultCenter={{ lat: -37.3159, lng: 81.1496 }} defaultZoom={3}>
                    {userData.map(user => (
                        <MapMarker
                            key={user.id}
                            lat={user.address.geo.lat}
                            lng={user.address.geo.lng}
                            user={user}
                        />
                    ))}
                </GoogleMapReact>
            </StyledMap>
            <Sidebar />
        </Container>
    ) : (
        "Fetching map data..."
    );
};

export default Map;
