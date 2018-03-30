import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {getMetricMetaInfo} from '../utils/helpers';

export default class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  };

  increment = (metric) => {
    const {max, step} = getMetricMetaInfo(metric);
    this.setState((state) => {
      const count = state[metric] + step;
      return {
        [metric]: Math.min(count, max)
      }
    });
  };

  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step;
      return {
        [metric]: Math.max(count, 0)
      }
    });
  };

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value
    }));
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}
