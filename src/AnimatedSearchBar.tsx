import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const AnimatedSearchBar = () => {
  const animation = useSharedValue(0);
  const [value, setValue] = useState(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animation.value === 1 ? withTiming(300, { duration: 500 }) : withTiming(0, { duration: 500 })
    }
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[
        {
          width: 300,
          height: 50,
          backgroundColor: '#E7E7E7',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: value === 1 ? 20 : 0,
          justifyContent: 'space-between'
        }, animatedStyle]}>
        <TextInput style={{ width: '85%' }} placeholder='Search here' />
        <TouchableOpacity onPress={() => {
          if (animation.value === 1) {
            animation.value = 0;
            setValue(0)
          } else {
            animation.value = 1;
            setValue(1)
          }
        }}>
          <Image source={value === 1 ? require('../assets/cross.png') : require('../assets/search.png')} style={{ width: value === 1 ? 15 : 30, height: value === 1 ? 15 : 30 }} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default AnimatedSearchBar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
