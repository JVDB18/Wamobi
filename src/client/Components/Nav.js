/* eslint-disable react/jsx-no-literals */
import * as React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <NavLink to="" activeClassName="selected">
                    Home
                </NavLink>
                <NavLink to="" activeClassName="selected">
                    Agenda
                </NavLink>
                <NavLink to="" activeClassName="selected">
                    Account
                </NavLink>
                <NavLink to="" activeClassName="selected">
                    Rewards
                </NavLink>
                <NavLink to="" activeClassName="selected">
                    My itineraries
                </NavLink>
                <NavLink to="" activeClassName="selected">
                    Dashboard
                </NavLink>
                <NavLink to="" activeClassName="selected">
                    History
                </NavLink>
            </nav>
        </div>
    );
};

export default Nav;
