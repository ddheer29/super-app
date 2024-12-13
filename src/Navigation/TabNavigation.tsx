import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from '../Screen/ProfileScreen';
import SettingsScreen from '../Screen/SettingsScreen';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();


const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation