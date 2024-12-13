import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import AnimatedSearchBar from './src/AnimatedSearchBar';
import SwipeAnimation from './src/SwipeAnimation';
import AnimatedSlider from './src/AnimatedSlider';


const App = () => {
  return (
    <AnimatedSlider />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
