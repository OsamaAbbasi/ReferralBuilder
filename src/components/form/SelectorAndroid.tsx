import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

interface Option {
  value: string;
  label: string;
}

interface selectorProps {
  label: string;
  options: Option[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

const SelectorAndroid: React.FC<selectorProps> = ({
  label,
  options,
  selectedValue,
  onValueChange,
}) => {
  const [pickerFocused, setPickerFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={itemValue => {
            onValueChange(itemValue as string);
          }}
          onFocus={() => setPickerFocused(true)}
          onBlur={() => setPickerFocused(false)}
          dropdownIconColor="#000"
          dropdownIconRippleColor="#000">
          {options.map(option => {
            if (option.value === 'Select...') {
              return (
                <Picker.Item
                  key={option.value}
                  label={option.label}
                  value={option.value}
                  style={styles.itemsDisabled}
                  enabled={!pickerFocused}
                />
              );
            }
            return (
              <Picker.Item
                key={option.value}
                label={option.label}
                value={option.value}
                style={styles.items}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#000',
  },
  items: {color: '#000', backgroundColor: '#fff', fontSize: 16},
  itemsDisabled: {color: '#808080', backgroundColor: '#fff', fontSize: 16},
  pickerContainer: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default SelectorAndroid;
