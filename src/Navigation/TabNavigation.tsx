import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from '../Screen/SettingsScreen';
import DrawerNavigator from './DrawerNavigator';
import CategoriesScreen from '../Screen/CategoriesScreen';
import CartScreen from '../Screen/CartScreen';

const Tab = createBottomTabNavigator();


const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation