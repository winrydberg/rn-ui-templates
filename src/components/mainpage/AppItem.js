import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AppItem = props => {
  return (
    <View
      style={[
        styles.itemContainer,
        {
          backgroundColor: props.appdata.colors[0],
        },
      ]}>
      <View style={styles.innerContainer}>
        <View
          style={[
            styles.iconStyle,
            {backgroundColor: props.appdata.colors[1]},
          ]}>
          <Text style={styles.iconText}>{props.appdata.id}</Text>
        </View>
        <View style={styles.appTitleContainer}>
          <Text style={{color: '#FFF'}}>{props.appdata.title}</Text>
        </View>
      </View>
      <View style={styles.arrowRight}>
        <Text>0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    border: 2,
    // borderWidth: 2,
    margin: 5,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appTitleContainer: {
    marginLeft: 10,
  },
  iconStyle: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  iconText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrowRight: {
    // alignSelf: 'flex-end',
  },
});

export default AppItem;
