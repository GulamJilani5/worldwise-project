// import React from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";
import style from "./Map.module.css";
export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(setSearchParams);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={style.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <p>
        Position : {lat} , {lng}
      </p>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        change position
      </button>
    </div>
  );
}
