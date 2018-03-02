import React from 'react';
import Button from '../Button';
import styles from './styles';
import propTypes from './propTypes';

const CounterView = ({ increaseCounter, decreaseCounter, count }) => (
  <React.Fragment>
    <Button
      onClickHandler={decreaseCounter}
      text="-"
    />
    <div style={styles.text}>{count}</div>
    <Button
      onClickHandler={increaseCounter}
      text="+"
    />
  </React.Fragment>
);

CounterView.propTypes = propTypes;

export default CounterView;
