import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import AnimatedSearchBar from './src/AnimatedSearchBar';
import SwipeAnimation from './src/SwipeAnimation';
import AnimatedSlider from './src/AnimatedSlider';
import Navigation from './src/Navigation/Navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store/Store';
import { requestUserPermission } from './src/utils/notificationService';


const App = () => {

  useEffect(() => {
    requestUserPermission();
  }, [])

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
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
