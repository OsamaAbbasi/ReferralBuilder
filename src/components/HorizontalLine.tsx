import React from 'react';
import {StyleSheet, View} from 'react-native';

const HorizontalLine = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#c0c0c0',
    borderWidth: 0.5,
    borderColor: 'transparent',
    marginTop: 10,
  },
});

export default HorizontalLine;
