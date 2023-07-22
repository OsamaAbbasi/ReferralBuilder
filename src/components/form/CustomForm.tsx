import React, {FC, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Platform} from 'react-native';
import TextField from './TextField';
import SubtitleText from '../text/SubtitleText';
import HorizontalLine from '../HorizontalLine';
import SelectorIos from './SelectorIos';
import SelectorAndroid from './SelectorAndroid';
import {FormData} from '../../interfaces/interfaces';

interface CustomFormProps {
  onSubmit: (data: FormData) => void;
}

const CustomForm: FC<CustomFormProps> = ({onSubmit}) => {
  const initialState: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address1: '',
    address2: '',
    suburb: '',
    state: '',
    postCode: '',
    country: '',
  };
  const [formData, setFormData] = useState<FormData>(initialState);

  const stateOptions = [
    {value: 'Select...', label: 'Select...'},
    {value: 'ACT', label: 'ACT'},
    {value: 'NSW', label: 'NSW'},
    {value: 'NT', label: 'NT'},
    {value: 'QLD', label: 'QLD'},
    {value: 'SA', label: 'SA'},
    {value: 'TAS', label: 'TAS'},
    {value: 'VIC', label: 'VIC'},
    {value: 'WA', label: 'WA'},
  ];

  const countryOptions = [
    {value: 'Select...', label: 'Select...'},
    {value: 'Australia', label: 'Australia'},
    {value: 'Other', label: 'Other'},
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prevData => ({...prevData, [field]: value}));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData(initialState);
  };

  return (
    <View style={styles.container}>
      <SubtitleText text="Personal details" />
      <HorizontalLine />
      <TextField
        label="First name"
        value={formData.firstName}
        onChangeText={text => handleInputChange('firstName', text)}
      />

      <TextField
        label="Last name"
        value={formData.lastName}
        onChangeText={text => handleInputChange('lastName', text)}
      />

      <TextField
        label="Email"
        value={formData.email}
        onChangeText={text => handleInputChange('email', text)}
      />

      <TextField
        label="Mobile"
        value={formData.mobile}
        onChangeText={text => handleInputChange('mobile', text)}
      />

      <SubtitleText text="Address" />
      <HorizontalLine />

      <TextField
        label="Address line 1"
        value={formData.address1}
        onChangeText={text => handleInputChange('address1', text)}
      />

      <TextField
        label="Address line 2"
        value={formData.address2}
        onChangeText={text => handleInputChange('address2', text)}
      />

      <TextField
        label="Suburb"
        value={formData.suburb}
        onChangeText={text => handleInputChange('suburb', text)}
      />

      {Platform.OS === 'ios' ? (
        <SelectorIos
          label="State"
          options={stateOptions}
          selectedValue={formData.state}
          onValueChange={value => handleInputChange('state', value)}
        />
      ) : (
        <SelectorAndroid
          label="State"
          options={stateOptions}
          selectedValue={formData.state}
          onValueChange={value => handleInputChange('state', value)}
        />
      )}

      <TextField
        label="Post code"
        value={formData.postCode}
        onChangeText={text => handleInputChange('postCode', text)}
      />

      {Platform.OS === 'ios' ? (
        <SelectorIos
          label="Country"
          options={countryOptions}
          selectedValue={formData.country}
          onValueChange={value => handleInputChange('country', value)}
        />
      ) : (
        <SelectorAndroid
          label="Country"
          options={countryOptions}
          selectedValue={formData.country}
          onValueChange={value => handleInputChange('country', value)}
        />
      )}

      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Create Referral</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00cc99',
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 12,
  },
});

export default CustomForm;
