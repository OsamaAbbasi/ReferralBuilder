import React, {FC} from 'react';
import {Platform} from 'react-native';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface TextFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

const TextField: FC<TextFieldProps> = ({label, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#000',
  },
  input: {
    height: Platform.OS === 'ios' ? 40 : 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: Platform.OS === 'ios' ? 10 : 15,
    fontSize: 16,
    color: '#000',
  },
});

export default TextField;
