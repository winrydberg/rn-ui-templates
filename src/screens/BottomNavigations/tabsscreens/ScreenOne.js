import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
export default function ScreenOne({navigation}) {
  useEffect(() => {
    navigation.setOptions({title: 'Screen One'});
  }, []);
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageName}>Screen One</Text>
    </View>
  );
}
