import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Map from "./components/Map";

const App = () => {
    return (
        <Provider store={store}>
            <Map />
        </Provider>
    );
};

export default App;
