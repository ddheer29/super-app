import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './TabNavigation'
import AuthNavigation from './AuthNavigation'


const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  )
}

export default Navigation