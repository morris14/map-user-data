import { setCurrentUser } from "../user";
import { SET_CURRENT_USER } from "../types";

describe("setCurrentUser action", () => {
    it("has the correct type", () => {
        const action = setCurrentUser();

        expect(action.type).toEqual(SET_CURRENT_USER);
    });

    it("has the correct payload", () => {
        const payload = {
            type: SET_CURRENT_USER,
            payload: {
                name: "Leanne Graham",
            },
        };
        const action = setCurrentUser(payload);

        expect(action.payload).toEqual(payload);
    });
});
