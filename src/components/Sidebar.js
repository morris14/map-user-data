import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import StyledSidebar from "./styles/Sidebar";

export const Sidebar = ({ user }) => {
    return (
        <StyledSidebar>
            {user ? (
                <>
                    <h3>{user.name}</h3>
                    <p>
                        <strong>Email</strong>: {user.email}
                    </p>
                    <p>
                        <strong>Phone</strong>: {user.phone}
                    </p>
                    <p>
                        <strong>Street</strong>: {user.address.street}
                    </p>
                    <p>
                        <strong>City</strong>: {user.address.city}
                    </p>
                </>
            ) : (
                <h3>Click a user to show their details</h3>
            )}
        </StyledSidebar>
    );
};

Sidebar.propTypes = {
    user: PropTypes.object,
};

const mapStateToProps = state => ({
    user: state.user.current,
});

export default connect(mapStateToProps)(Sidebar);
