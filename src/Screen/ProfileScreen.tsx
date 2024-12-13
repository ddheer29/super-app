import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedCloseBtn = Animated.createAnimatedComponent(TouchableOpacity);
const ProfileScreen = () => {

  const animatedImgWidth = useSharedValue(70);
  const animatedImgHeight = useSharedValue(70);
  const animatedImgY = useSharedValue(0);
  const animateScale = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedImgWidth.value,
      height: animatedImgHeight.value,
      transform: [{ translateY: animatedImgY.value }]
    }
  })

  const animatedCloseBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: animateScale.value }],
    }
  })

  const animationDuration = 500;

  const resetAnimations = () => {
    animateScale.value = withTiming(0, { duration: animationDuration });
    animatedImgWidth.value = withTiming(70, { duration: animationDuration });
    animatedImgHeight.value = withTiming(70, { duration: animationDuration });
    animatedImgY.value = withTiming(0, { duration: animationDuration });
  };

  const expandImage = () => {
    animateScale.value = withTiming(1, { duration: animationDuration });
    animatedImgWidth.value = withTiming(360, { duration: animationDuration });
    animatedImgHeight.value = withTiming(360, { duration: animationDuration });
    animatedImgY.value = withTiming(80, { duration: animationDuration });
  };


  return (
    <View style={{ flex: 1, backgroundColor: '#1c1c1c' }}>
      <AnimatedCloseBtn
        style={[{
          width: 70,
          height: 70,
          justifyContent: 'center',
          alignContent: 'center',
          position: 'absolute',
          top: 20,
          left: 20,
        }, animatedCloseBtnStyle]}
        onPress={() => resetAnimations()}
      >
        <Image source={require('../../assets/sun.png')}
          style={{ width: 54, height: 54 }}
        />
      </AnimatedCloseBtn>
      <TouchableOpacity
        onPress={() => {
          if (animatedImgWidth.value === 70) {
            expandImage()
          }
        }}>
        <AnimatedImage
          source={require('../../assets/myprofile.jpg')}
          style={[{ width: 69, height: 69, marginLeft: 20, marginTop: 20, borderRadius: 200, resizeMode: 'contain', backgroundColor: '#fff' }, animatedStyle]}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})