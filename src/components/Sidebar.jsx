// import React from 'react'
import { Outlet } from "react-router-dom";

import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      {/* We can create separate footer component */}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}
