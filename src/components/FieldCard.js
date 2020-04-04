import React  from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';


function FieldCard({ text, value, iconName }) {
  return (
    <View style={styles.wrapper}>
      <Icon name={iconName} size={40}  color="#0c3866"/>
      <Text style={styles.titleText}>
        {text}
      </Text>
      <Text style={styles.fieldValue}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "20%",
    width: "40%",
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10
  },
  titleText: {
    fontWeight: 'bold',
    paddingBottom: 5,
    fontSize: 16,
    color: '#0c3866'
  },
  fieldValue: {
    fontSize: 18,
    letterSpacing: 1.5,
    color: '#0c3866',
    fontWeight: 'bold',
  },
});

export default FieldCard;
