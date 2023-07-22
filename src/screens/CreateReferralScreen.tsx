import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import TitleText from '../components/text/TitleText';
import CustomForm from '../components/form/CustomForm';
import {FormData} from '../interfaces/interfaces';
import useApi from '../hooks/useApi';
import {RootTabParamList} from '../interfaces/interfaces';

type CreateReferralScreenProps = BottomTabNavigationProp<
  RootTabParamList,
  'Create'
>;

const CreateReferralScreen: FC<{navigation: CreateReferralScreenProps}> = ({
  navigation,
}) => {
  const {postData} = useApi();
  const handleFormSubmit = (formData: FormData) => {
    postData(formData);
    navigation.reset({
      index: 0,
      routes: [{name: 'View'}],
    });
    navigation.navigate('View');
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
