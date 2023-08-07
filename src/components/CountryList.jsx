// import React from 'react'
import PropTypes from "prop-types";
import CountryItem from "./CityItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
export default function CountryList({ cities, isLoading }) {
  console.log("isLoading", isLoading);
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  console.log("countries", countries);
  if (isLoading) return <Spinner />;
  if (!countries.length) {
    return <Message message="Add your first country by clicking on the map" />;
  }
  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </div>
  );
}

CountryList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
};
CountryList.propTypes = {
  isLoading: PropTypes.arrayOf(PropTypes.string).isRequired,
};
