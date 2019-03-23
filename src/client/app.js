import * as React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/Routes";
import Nav from "./components/Nav";

ReactDOM.render(
    <BrowserRouter>
        <>
            <Nav />
            <Routes />
        </>
    </BrowserRouter>,
    document.querySelector("#app"),
);
