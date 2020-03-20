import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import FieldCard from '../components/FieldCard';


function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>March, 2020</Text>
      <View style={styles.cardWrapper}>
        <FieldCard text="Hour" value="40"/>
        <FieldCard text="Return Visits" value="34"/>
        <FieldCard text="Return Visits" value="34"/>
        <FieldCard text="Return Visits" value="34"/>
      </View>
      <Text style={styles.button} onPress={() => alert('you pressed me!')}>
        <Text style={styles.plusText}>
          +
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'grey'
  },
  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  date: {
    margin: 20
  },
  plusText: {
    // backgroundColor: 'red',
    fontSize: 30,
    color: '#fff'

  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  }
});

export default Home;
