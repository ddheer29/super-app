import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Login from '../Screen/Auth/Login';
import Signup from '../Screen/Auth/Signup';
import TabNavigation from './TabNavigation';
import OtpScreen from '../Screen/Auth/OtpScreen';
import Animated, { cancelAnimation, useAnimatedStyle, useSharedValue, withRepeat, withSpring } from 'react-native-reanimated';
import ShoppingCartIcon from '../../assets/SVG/ShoppingCartSVG';
import { sizes } from '../utils/Theme';


const Stack = createNativeStackNavigator();

const SplashScreen = ({ navigation }: any) => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    // bouncing animation
    translateY.value = withRepeat(
      withSpring(-20, {
        damping: 2,
        stiffness: 80,
      }),
      -1,
      true
    )

    const timer = setTimeout(() => {
      cancelAnimation(translateY);
      // Simulate checking user login status
      const isLoggedIn = false; // Replace with actual login status check
      if (isLoggedIn) {
        navigation.replace('MainApp');
      } else {
        navigation.replace('Login');
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
      cancelAnimation(translateY);
    }
  }, [navigation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }]
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.innerConatiner}>
        <Text style={styles.appName}>ShopCart</Text>
        <Animated.View style={[styles.iconContainer, animatedStyle]}>
          <ShoppingCartIcon />
        </Animated.View>
      </View>
    </View>
  );
};

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="MainApp" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  innerConatiner: {
    height: sizes.height * 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  iconContainer: {
    marginTop: 20,
  },
});