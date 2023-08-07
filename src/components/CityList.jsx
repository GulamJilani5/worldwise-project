// import React from 'react'
import PropTypes from "prop-types";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
export default function CityList({ cities, isLoading }) {
  console.log("cities", cities);
  console.log("isLoading", isLoading);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;
  return (
    <div className={styles.CityList}>
      {cities.map((city) => (
        //  console.log('CityList  city',city)
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
};
CityList.propTypes = {
  isLoading: PropTypes.arrayOf(PropTypes.string).isRequired,
};
