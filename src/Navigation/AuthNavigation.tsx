import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Login from '../Screen/Auth/Login';
import Signup from '../Screen/Auth/Signup';
import TabNavigation from './TabNavigation';


const Stack = createNativeStackNavigator();

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate checking user login status
      const isLoggedIn = false; // Replace with actual login status check
      if (isLoggedIn) {
        navigation.replace('MainApp');
      } else {
        navigation.replace('Login');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading...</Text>
    </View>
  );
};

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="MainApp" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
