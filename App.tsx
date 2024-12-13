import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import AnimatedSearchBar from './src/AnimatedSearchBar';
import SwipeAnimation from './src/SwipeAnimation';
import AnimatedSlider from './src/AnimatedSlider';
import Navigation from './src/Navigation/Navigation';


const App = () => {
  return (
    <Navigation />
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
