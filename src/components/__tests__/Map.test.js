import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";

describe("<Map />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Map />);
    });

    it("should render", () => {
        expect(wrapper).toBeTruthy();
    });
});
