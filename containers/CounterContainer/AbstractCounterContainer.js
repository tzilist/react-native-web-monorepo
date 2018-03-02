import React, { Component } from 'react';
import CounterView from 'components/CounterView';

export default class AbstractCounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.getPreviousCount();
  }

  getPreviousCount = () => {
    throw Error('getPreviousCount not implemented for AbstractCounter');
  }

  increaseCounter = () => {
    this.setState({ count: this.state.count + 1 }, this.saveLocalStorage);
  }

  decreaseCounter = () => {
    this.setState({ count: this.state.count - 1 }, this.saveLocalStorage);
  }

  saveLocalStorage = () => {
    throw Error('saveLocalStorage not implemented for AbstractCounter');
  }

  render() {
    return (
      <CounterView
        increaseCounter={this.increaseCounter}
        decreaseCounter={this.decreaseCounter}
        count={this.state.count}
      />
    );
  }
}
