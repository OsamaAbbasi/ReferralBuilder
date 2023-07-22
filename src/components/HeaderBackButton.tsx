import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface HeaderBackButtonProps {
  onPress: () => void;
}
const HeaderBackButton: FC<HeaderBackButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Ionicons name="chevron-back" size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {marginLeft: 10},
});

export default HeaderBackButton;
