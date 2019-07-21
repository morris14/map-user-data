import React from "react";
import PropTypes from "prop-types";

import StyledMapMarker from "./styles/MapMarker";

const MapMarker = ({ user }) => (
    <StyledMapMarker>
        <div className='pin' />
        <div className='details'>
            <span>
                <strong>{user.name}</strong>
            </span>
            <span>{user.address.street}</span>
            <span>{user.address.city}</span>
        </div>
    </StyledMapMarker>
);

MapMarker.propTypes = {
    user: PropTypes.object.isRequired,
};

export default MapMarker;
