import React from "react";
import { shallow } from "enzyme";
import MapMarker from "../MapMarker";

let wrapper;

const user = {
    name: "Leanne Graham",
    address: {
        street: "Kulas Light",
        city: "Gwenborough",
    },
};

describe("<MapMarker />", () => {
    beforeEach(() => {
        wrapper = shallow(<MapMarker user={user} />);
    });

    it("should render", () => {
        expect(wrapper).toBeTruthy();
    });

    it("should show the users name", () => {
        expect(wrapper.contains(user.name)).toBeTruthy();
    });

    it("should show the users street", () => {
        expect(wrapper.contains(user.address.street)).toBeTruthy();
    });

    it("should show the users city", () => {
        expect(wrapper.contains(user.address.city)).toBeTruthy();
    });
});
