import React, {FC} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateReferralScreen from './screens/CreateReferralScreen';
import ViewReferralsScreen from './screens/ViewReferralsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderBackButton from './components/HeaderBackButton';
import {Provider} from 'react-redux';
import store from './store/store';

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
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;

              if (route.name === 'Create') {
                iconName = 'document-text-outline';
              } else if (route.name === 'View') {
                iconName = 'briefcase-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'black',
          })}>
          <Tab.Screen
            name="Create"
            component={CreateReferralScreen}
            options={{
              headerTitle: '',
              headerLeft: () => <HeaderBackButton onPress={() => {}} />,
            }}
          />
          <Tab.Screen
            name="View"
            component={ViewReferralsScreen}
            options={({navigation}) => ({
              headerTitle: '',
              headerLeft: () => (
                <HeaderBackButton onPress={() => navigation.goBack()} />
              ),
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
