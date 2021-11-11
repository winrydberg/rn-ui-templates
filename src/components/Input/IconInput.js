import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function IconInput(props) {
  return (
    <View>
      <Ionicons name="user" size={20} />
      <TextInput />
    </View>
  );
}
