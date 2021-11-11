import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenOne from './tabsscreens/ScreenOne';
import ScreenTwo from './tabsscreens/ScreenTwo';
import ScreenThree from './tabsscreens/ScreenThree';
import ScreenFive from './tabsscreens/ScreenFive';
import ScreenFour from './tabsscreens/ScreenFour';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
      backgroundColor: '#e32f45',
      width: 70,
      height: 70,
      borderRadius: 35,
    }}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#FFF',
          borderRadius: 15,
          height: 70,
          border: 0,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                name="home"
                size={30}
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
        component={ScreenOne}
      />
      <Tab.Screen
        name="Find"
        component={ScreenTwo}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                name="search-circle"
                size={30}
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                FIND
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Post"
        component={ScreenThree}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="add-circle"
              //   style={{height: 30, width: 30}}
              color="#FFF"
              size={30}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={ScreenFour}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                name="settings"
                size={30}
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                SETTINGS
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ScreenFive}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                name="chatbubbles-sharp"
                size={30}
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                CHAT
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
