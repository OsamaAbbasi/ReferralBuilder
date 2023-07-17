import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateReferralScreen from './screens/CreateReferralScreen';
import ViewReferralsScreen from './screens/ViewReferralsScreen';

const Tab = createBottomTabNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Create" component={CreateReferralScreen} />
        <Tab.Screen name="View" component={ViewReferralsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
