import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App";
import store from '../src/store';
import { Provider } from 'react-redux';

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("./index.js");
    expect(ReactDOM.render).toHaveBeenCalledWith(<Provider store={store}>
        <App />
        </Provider>,div);
  });
});
