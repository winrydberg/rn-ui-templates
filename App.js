/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import MainPage from './src/screens/MainPage/MainPage';
import MainPageNavigator from './src/Navigator';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <MainPageNavigator></MainPageNavigator>
    </NavigationContainer>
  );
};

export default App;
