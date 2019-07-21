import React from "react";
import { shallow } from "enzyme";
import { Sidebar } from "../Sidebar";

const user = {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        city: "Gwenborough",
    },
    phone: "1-770-736-8031 x56442",
};

describe("<Sidebar />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Sidebar user={user} />);
    });

    it("should render", () => {
        expect(wrapper).toBeTruthy();
    });

    it("should load intro copy if user is null", () => {
        wrapper.setProps({ user: null });
        expect(wrapper.find("Click a user to show their details")).toBeTruthy();
    });

    it("should load users information if a user is passed to it", () => {
        expect(wrapper.contains(user.name)).toBeTruthy();
        expect(wrapper.contains(user.email)).toBeTruthy();
        expect(wrapper.contains(user.address.street)).toBeTruthy();
        expect(wrapper.contains(user.address.city)).toBeTruthy();
        expect(wrapper.contains(user.phone)).toBeTruthy();
    });
});
