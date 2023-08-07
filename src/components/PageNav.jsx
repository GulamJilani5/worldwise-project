// import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
// we use NavLink instead of Link. NavLink is good to highlight active link and provide extra attribute 'active' class
export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <Logo />
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
