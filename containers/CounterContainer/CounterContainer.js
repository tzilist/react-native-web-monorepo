import React from 'react';

import AbstractCounterContainer from './AbstractCounterContainer';

export default class Counter extends AbstractCounterContainer {
  saveLocalStorage = () => Promise.resolve(window.localStorage.setItem('myCount', this.state.count));

  getPreviousCount = () => {
    const foundCount = window.localStorage.getItem('myCount');

    if (foundCount) {
      const count = parseInt(foundCount, 10);
      this.setState({ count });
    }
  }
}
