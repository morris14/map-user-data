import userReducer from "../user";
import { SET_CURRENT_USER } from "../../actions/types";

describe("user reducer", () => {
    it("handles actions of type SET_CURRENT_USER", () => {
        const action = {
            type: SET_CURRENT_USER,
            payload: {
                name: "Leanne Graham",
            },
        };

        const newState = userReducer(
            {
                current: null,
            },
            action,
        );

        expect(newState).toEqual({
            current: action.payload,
        });
    });

    it("handles action with unknown type", () => {
        const newState = userReducer(
            {
                current: null,
            },
            { type: "EFUYBEWF" },
        );

        expect(newState).toEqual({
            current: null,
        });
    });
});
