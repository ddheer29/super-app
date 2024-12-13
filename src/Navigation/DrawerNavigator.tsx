import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import InstagramLike from '../InstagramLike';
import GestureFirst from '../GestureFirst';
import AnimatedSearchBar from '../AnimatedSearchBar';
import SwipeAnimation from '../SwipeAnimation';
import HomeScreen from '../Screen/HomeScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="InstagramLike" component={InstagramLike} />
      <Drawer.Screen name="GestureFirst" component={GestureFirst} />
      <Drawer.Screen name="AnimatedSearchBar" component={AnimatedSearchBar} />
      {/* <Drawer.Screen name="SliderItem" component={SliderItem} /> */}
      <Drawer.Screen name="SwipeAnimation" component={SwipeAnimation} />

    </Drawer.Navigator>
  )
}

export default DrawerNavigator