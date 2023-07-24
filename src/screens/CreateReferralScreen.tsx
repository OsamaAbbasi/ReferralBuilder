import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import TitleText from '../components/text/TitleText';
import CustomForm from '../components/form/CustomForm';
import {FormData} from '../interfaces/interfaces';
import useApi from '../hooks/useApi';
import {RootTabParamList} from '../interfaces/interfaces';
import {useDispatch} from 'react-redux';
import {addReferral} from '../store/referralsSlice';

type CreateReferralScreenProps = BottomTabNavigationProp<
  RootTabParamList,
  'Create'
>;

const CreateReferralScreen: FC<{navigation: CreateReferralScreenProps}> = ({
  navigation,
}) => {
  const {postData} = useApi();
  const dispatch = useDispatch();

  const handleFormSubmit = (formData: FormData) => {
    postData(formData);
    dispatch(addReferral(formData));
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
