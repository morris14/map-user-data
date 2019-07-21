import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
    current: null,
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_CURRENT_USER:
            return {
                current: payload,
            };
        default:
            return state;
    }
}
