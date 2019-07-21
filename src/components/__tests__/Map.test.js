import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Map />);
});

describe("<Map />", () => {
    it("should render", () => {
        expect(wrapper).toBeTruthy();
    });
});
