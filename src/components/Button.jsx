// import React from 'react'
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ children, onClick, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};
Button.propTypes = {
  onClick: PropTypes.arrayOf(PropTypes.string).isRequired,
};
Button.propTypes = {
  type: PropTypes.arrayOf(PropTypes.string).isRequired,
};
