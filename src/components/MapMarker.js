import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setCurrentUser } from "../actions/user";
import StyledMapMarker from "./styles/MapMarker";

export const MapMarker = ({ user, setCurrentUser }) => (
    <StyledMapMarker>
        <div className='pin' onClick={() => setCurrentUser(user)} />
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
    setCurrentUser: PropTypes.func.isRequired,
};

export default connect(
    null,
    { setCurrentUser },
)(MapMarker);
