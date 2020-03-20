import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';

import Home from './screens/Home'


export default class App extends Component {
  render() {
    return (
      <View>
        <Home/>
      </View>
    );
  }
}
