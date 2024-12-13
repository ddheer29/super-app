import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const AnimatedSwitch = () => {

  const animation = useSharedValue(0);
  const [isDay, setIsDay] = useState(true);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animation.value }]
    }
  })

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => {
          if (animation.value === 0) {
            animation.value = withTiming(98, { duration: 150 })
            setIsDay(false);
          } else {
            animation.value = withTiming(0, { duration: 150 })
            setIsDay(true);
          }
        }}
        style={{
          width: 150,
          height: 50,
          borderRadius: 30,
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: isDay ? '#AEAEAE' : '#000',
        }}>
        <Animated.View style={[{ width: 40, height: 40, borderRadius: 20 }, animatedStyle]}>
          <Image source={isDay ? require('../../assets/sun.png') : require('../../assets/moon.png')} style={{ width: '100%', height: '100%' }} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}

export default AnimatedSwitch

const styles = StyleSheet.create({})