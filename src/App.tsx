import React, {FC} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateReferralScreen from './screens/CreateReferralScreen';
import ViewReferralsScreen from './screens/ViewReferralsScreen';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App: FC = (): JSX.Element => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Create" component={CreateReferralScreen} />
        <Tab.Screen name="View" component={ViewReferralsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
