import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface TitleTextProps {
  text: string;
}

const TitleText = (props: TitleTextProps) => {
  return <Text style={styles.titleText}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: '400',
    color: '#000',
    marginVertical: 10,
  },
});

export default TitleText;
