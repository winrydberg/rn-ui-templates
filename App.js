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
import MainPage from './src/screens/MainPage/MainPage';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <MainPage></MainPage>
    </SafeAreaView>
  );
};

export default App;
