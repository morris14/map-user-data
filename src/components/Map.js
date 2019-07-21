import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";

import StyledMap from "./styles/Map";

const MapMarker = ({ user }) => <div>{user.name}</div>;

const Map = () => {
    const [data, setdata] = useState(null);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => setdata(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <StyledMap>
            {data ? (
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
            ) : (
                "Fetching map data..."
            )}
        </StyledMap>
    );
};

export default Map;
