import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Icon from './Icon';

function FieldCard({text, value}) {
  return (
    <View style={styles.wrapper}>
      <Icon />
      <Text>
        {text}
      </Text>
      <Text>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 150,
    width: "40%",
    padding: 20,
    margin: 20,
    backgroundColor: '#fff'
  }
});

export default FieldCard;
