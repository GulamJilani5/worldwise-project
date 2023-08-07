// import React from 'react'
import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";
export default function AppNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">City</NavLink>
        </li>
        <li>
          <NavLink to="countries">Country</NavLink>
        </li>
      </ul>
    </div>
  );
}
