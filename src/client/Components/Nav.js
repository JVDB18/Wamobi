/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-literals */
import * as React from "react";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const Nav = () => {
    return (
        <div>
            <nav>
                <NavLink 
                    to="/home" activeClassName="selected">
                    Home
                </NavLink>
                <NavLink 
                    to="/user/:id/agenda" activeClassName="selected">
                    Agenda
                </NavLink>
                <NavLink 
                    to="/user/:id/account" activeClassName="selected">
                    Account
                </NavLink>
                <NavLink 
                    to="/user/:id/rewards" activeClassName="selected">
                    Rewards
                </NavLink>
                <NavLink
                    to="/user/:id/myitineraries"
                    activeClassName="selected">
                    My itineraries
                </NavLink>
                <NavLink 
                    to="/user/:id/dashboard" activeClassName="selected">
                    Dashboard
                </NavLink>
                <NavLink 
                    to="/user/:id/history" activeClassName="selected">
                    History
                </NavLink>
            </nav>
        </div>
    );
};

export default Nav;
