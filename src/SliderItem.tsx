import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const SliderItem = ({ image, index, currentIndex }) => {

  const animation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: animation.value === index ? withSpring(1.5) : withSpring(0.6) }
      ]
    }
  })

  useEffect(() => {
    animation.value = currentIndex
  }, [currentIndex])

  return (
    <Animated.View
      style={[{
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center '
      }, animatedStyle]}>
      <Image
        source={{ uri: image }}
        style={[{
          width: '70%',
          height: '70%',
        }]}
      />
    </Animated.View>
  )
}

export default SliderItem

const styles = StyleSheet.create({})