import React from 'react';
import { Text, View } from 'react-native';
import Button from '../Button';

import propTypes from './propTypes';
import styles from './styles';

const CounterView = ({ increaseCounter, decreaseCounter, count }) => (
  <View style={styles.container}>
    <Button
      onClickHandler={decreaseCounter}
      text="-"
    />
    <Text style={styles.text}>{count}</Text>
    <Button
      onClickHandler={increaseCounter}
      text="+"
    />
  </View>
);

CounterView.propTypes = propTypes;

export default CounterView;
