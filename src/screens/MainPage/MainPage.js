import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import apps from '../../resources/apps';
import AppItem from '../../components/mainpage/AppItem';

export default function MainPage() {
  const renderAppItem = ({item}) => <AppItem appdata={item} />;

  return (
    <View>
      <ImageBackground
        source={require('../../assets/mainpage/header.jpg')}
        resizeMode="cover"
        imageStyle={styles.imageStyle}
        style={styles.backgroundImage}>
        <Text style={styles.headerTitle}>React Native </Text>
        <Text style={styles.subTitle}>UI Components</Text>
      </ImageBackground>

      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={apps}
          renderItem={renderAppItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}
