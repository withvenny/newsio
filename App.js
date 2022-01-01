import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  FirstScreenNavigator,
  SecondScreenNavigator,
  ThirdScreenNavigator
} from '@components/CustomNavigation'

import ProfileScreen from './screens/Profile';
import FeedScreen from './screens/Feed';
import HomeScreen from './screens/Home';

const Tab = createBottomTabNavigator();

function AllTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      labelStyle: {fontSize:18},
      activeTintColor: 'red',
      inactiveTintColor: 'black'
    }}
  >

      <Tab.Screen 
      name="Feed" 
      //component={FeedScreen}
      component={FirstScreenNavigator}
      options={{
        headerShown: false,
        tabBarLabel: 'Feed',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="page-next" color={color} size={size} />
        ) }}
        
       />

      <Tab.Screen 
      name="Home" 
      //component={HomeScreen}
      component={SecondScreenNavigator}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
        ) }}
        
       />

      <Tab.Screen 
      name="Profile" 
      //component={ProfileScreen}
      component={ThirdScreenNavigator}
      options={{
        headerShown: false,
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-edit" color={color} size={size} />
        ) }}
       />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AllTabs />
    </NavigationContainer>
  );
}
