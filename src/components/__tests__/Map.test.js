import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";

let wrapper;

describe("<Map />", () => {
    beforeEach(() => {
        wrapper = shallow(<Map />);
    });

    it("should render", () => {
        expect(wrapper).toBeTruthy();
    });
});
