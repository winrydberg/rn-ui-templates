import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function AuthScreens({route, navigation}) {
  //   alert(JSON.stringify(route));
  const {projects} = route.params;
  const renderProject = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
      <View style={[styles.projectContainer]}>
        <View style={[styles.iconContainer, {backgroundColor: item.color}]}>
          <Text>{item.id}</Text>
        </View>
        <Text style={styles.projectName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <View>
        <SafeAreaView>
          <FlatList
            data={projects}
            renderItem={renderProject}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  projectContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  projectName: {
    fontSize: 16,
    marginLeft: 10,
  },
});
