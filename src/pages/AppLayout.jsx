// import React from "react";

// import AppNav from "../components/AppNav";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import style from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={style.app}>
      {/* {Outlet} it is very much like {chikdren} props */}

      <Sidebar />
      <Map />
    </div>
  );
}
