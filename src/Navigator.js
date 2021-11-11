import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import MainPage from './screens/MainPage/MainPage';
import SignInOne from './screens/AuthPages/AuthOne/SignInOne';
import AuthScreens from './screens/AuthPages/AuthScreens';
import BottomNavigations from './screens/BottomNavigations/BottomNavigations';
import HeaderOne from './components/headers/HeaderOne';

const Stack = createStackNavigator();

function MainPageNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerShown: false,
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        name="Home"
        component={MainPage}
        options={{
          title: 'Home Page',
          header: props => (
            <HeaderOne
              title={getFocusedRouteNameFromRoute(props.route) ?? 'Test'}
              navigation={props.navigation}
              route={props.route}
            />
          ),
        }}
      />
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          headerShown: false,
          title: 'Home Page',
          header: props => (
            <HeaderOne
              title={getFocusedRouteNameFromRoute(props.route) ?? 'Test'}
              navigation={props.navigation}
              route={props.route}
            />
          ),
        }}
      />
      <Stack.Screen
        name="BottomTabs"
        component={BottomNavigations}
        options={{
          header: props => (
            <HeaderOne
              title={getFocusedRouteNameFromRoute(props.route) ?? 'Test'}
              navigation={props.navigation}
              route={props.route}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthScreens"
      screenOptions={{
        headerMode: 'screen',
        headerStyle: {
          backgroundColor: '#e32f45',
          //   color: '#FFFFFF',
        },
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen
        name="AuthScreens"
        component={AuthScreens}
        options={{
          header: props => (
            <HeaderOne
              title={getFocusedRouteNameFromRoute(props.route) ?? 'Test'}
              navigation={props.navigation}
              route={props.route}
            />
          ),
        }}
      />
      <Stack.Screen
        name="SignInOne"
        component={SignInOne}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainPageNavigator;
