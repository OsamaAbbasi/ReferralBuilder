import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface SubtitleTextProps {
  text: string;
}

const SubtitleText = (props: SubtitleTextProps) => {
  return <Text style={styles.subtitleText}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  subtitleText: {
    fontSize: 15,
    color: 'grey',
    marginVertical: 10,
  },
});

export default SubtitleText;
