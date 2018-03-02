import React from 'react';
import { AsyncStorage } from 'react-native';

import AbstractCounterContainer from './AbstractCounterContainer';

export default class Counter extends AbstractCounterContainer {
  saveLocalStorage = async () => {
    await AsyncStorage.setItem('@MyApp:MyCount', this.state.count.toString());
  }

  getPreviousCount = async () => {
    const foundCount = await AsyncStorage.getItem('@MyApp:MyCount');

    if (foundCount) {
      const count = parseInt(foundCount, 10);
      this.setState({ count });
    }
  }
}
