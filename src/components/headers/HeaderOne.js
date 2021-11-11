import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
export default function HeaderOne(props) {
  //   alert(props.route.name);
  //   alert(props.title);
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.route.name}</Text>
    </View>
  );
}
