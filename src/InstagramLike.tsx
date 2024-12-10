import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring } from 'react-native-reanimated';
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';


const InstagramLike = () => {
  const scale = useSharedValue(0);
  const ImageComponent = Animated.createAnimatedComponent(Image)

  const doubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(100, withSpring(0))
      }
    });
  }, [])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: Math.max(scale.value, 0) }]
    }
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TapGestureHandler maxDelayMs={250} numberOfTaps={2} onActivated={doubleTap}>
          <Animated.View>
            <ImageBackground
              source={require('../assets/image.jpg')}
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').width,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ImageComponent
                source={require('../assets/redlike.png')}
                style={[{
                  width: '40%',
                  height: 148
                }, animatedStyle]}
              />
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default InstagramLike;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
