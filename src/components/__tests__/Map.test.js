import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";

let wrapper;

const data = [
    {
        id: 1,
        name: "Leanne Graham",
        address: {
            street: "Kulas Light",
            city: "Gwenborough",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        address: {
            street: "Victor Plains",
            city: "Wisokyburgh",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
    },
];

beforeEach(() => {
    wrapper = shallow(<Map data={data} />);
});

describe("<Map />", () => {
    it("should render", () => {
        expect(wrapper).toBeTruthy();
    });
});
