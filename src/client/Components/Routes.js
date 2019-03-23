/* eslint-disable prettier/prettier */
import * as React from "react";
import {Switch, Route} from "react-router-dom";
import Connect from "../Pages/Connect";
import Home from "../Pages/Home";
import StoredItinerary from "../Pages/StoredItinerary";
import Results from "../Pages/Results";
import Agenda from "../Pages/Agenda";
import Account from "../Pages/Account";
import DashBoard from "../Pages/DashBoard";
import Map from "../Pages/Map";
import Rewards from "../Pages/Rewards";
import History from "../Pages/History";

const Routes = () => (
    <div>
        <Switch>
            <Route 
                exact 
                path="/" 
                component={Connect} />
            <Route 
                exact 
                path="/home" 
                component={Home} />
            <Route 
                exact 
                path="/user" 
                component={Account} />
            <Route 
                exact 
                path="/user/:id/agenda" 
                component={Agenda} />
            <Route
                exact
                path="/user/:id/myitineraries"
                component={StoredItinerary}
            />
            <Route 
                exact 
                path="/user/:id/dashboard" 
                component={DashBoard} />
            <Route 
                exact 
                path="/user/:id/rewards" 
                component={Rewards} />
            <Route 
                exact 
                path="/user/:id/history" 
                component={History} />
            <Route 
                exact 
                path="/results" 
                component={Results} />
            <Route 
                exact 
                path="/map" 
                component={Map} />
        </Switch>
    </div>
);

export default Routes;