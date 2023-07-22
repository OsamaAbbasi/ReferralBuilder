import React from 'react';
import {StyleSheet, View} from 'react-native';

const HorizontalLine = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'gray',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    opacity: 0.2,
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default HorizontalLine;
