import * as React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Components/Routes";
import Nav from "./Components/Nav";

ReactDOM.render(
    <BrowserRouter>
        <>
            <Nav />
            <Routes />
        </>
    </BrowserRouter>,
    document.querySelector("#app"),
);
