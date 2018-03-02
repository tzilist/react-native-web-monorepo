import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import propTypes from './propTypes';

const Button = ({ onClickHandler, text }) => (
  <TouchableHighlight
    onPress={onClickHandler}
    style={styles.button}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableHighlight>
);

Button.propTypes = propTypes;

export default Button;
