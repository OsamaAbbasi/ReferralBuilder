import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {selectorProps} from '../../interfaces/interfaces';

const SelectorIos: React.FC<selectorProps> = ({
  label,
  options,
  selectedValue,
  onValueChange,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>
          {selectedValue ? selectedValue : 'Select...'}
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={itemValue => {
                onValueChange(itemValue as string);
                setModalVisible(false);
              }}>
              {options.map(option => {
                if (option.value === 'Select...') {
                  return;
                }
                return (
                  <Picker.Item
                    key={option.value}
                    label={option.label}
                    value={option.value}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
      </Modal>
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
  buttonText: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    height: 40,
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 40,
    borderRadius: 8,
    color: '#000',
  },
});

export default SelectorIos;
