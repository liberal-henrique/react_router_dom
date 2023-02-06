import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul className={classes.navtab}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
