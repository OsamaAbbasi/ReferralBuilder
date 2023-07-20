import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TitleText from '../components/text/TitleText';
import CustomForm from '../components/form/CustomForm';
import {FormData} from '../interfaces/interfaces';

const CreateReferralScreen: FC = () => {
  const handleFormSubmit = (formData: FormData) => {
    console.log(formData);
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TitleText text="Referral Builder" />
      <CustomForm onSubmit={handleFormSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 15,
    backgroundColor: 'white',
  },
});

export default CreateReferralScreen;
