import React, {FC} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateReferralScreen from './screens/CreateReferralScreen';
import ViewReferralsScreen from './screens/ViewReferralsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Create') {
              iconName = 'document-text-outline';
            } else if (route.name === 'View') {
              iconName = 'briefcase-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black',
        })}>
        <Tab.Screen name="Create" component={CreateReferralScreen} />
        <Tab.Screen name="View" component={ViewReferralsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
