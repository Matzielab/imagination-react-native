// @flow
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Start from './components/Start'

export default class Imagination extends Component {
  render() {
    return (
      <Start />
    );
  }
}

AppRegistry.registerComponent('Imagination', () => Imagination);
