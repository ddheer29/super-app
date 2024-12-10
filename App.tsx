import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import AnimatedSearchBar from './src/AnimatedSearchBar';


const App = () => {
  return (
    <AnimatedSearchBar />
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
