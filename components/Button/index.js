import React from 'react';
import styles from './styles';
import propTypes from './propTypes';

const Button = ({ onClickHandler, text }) => (
  <button
    onClick={onClickHandler}
    style={styles.button}
  >
    {text}
  </button>
);

Button.propTypes = propTypes;

export default Button;
