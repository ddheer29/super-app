import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gesture, GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const SwipeAnimation = () => {
  const animation = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startX = animation.value;
    },
    onActive: (event, ctx) => {
      animation.value = ctx.startX + event.translationX;
    },
    onEnd: (event, ctx) => {
      animation.value = withSpring(0);
    },
  })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: animation.value }
      ]
    }
  })

  const animatedIconLeftStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: animation.value >= 70 ? withSpring(1.2) : withSpring(1) }
      ]
    }
  })

  const animatedIconRightStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: animation.value <= -70 ? withSpring(1.2) : withSpring(1) }
      ]
    }
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={{
            backgroundColor: 'green',
            width: '100%',
            height: 100,
            elevation: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 10
          }}>
            <Animated.View style={[{ width: 40, marginLeft: 20, height: 14 }, animatedIconLeftStyle]}>
              <Image
                source={require('../assets/inbox.png')}
                style={{ width: '100%', height: 40, tintColor: '#fff' }}
              />
            </Animated.View>
            <Animated.View style={[{ width: '100%', height: '100%', backgroundColor: '#D7D8D8', position: 'absolute', zIndex: 10, borderRadius: 10 }, animatedStyle]}>

            </Animated.View>
            <Animated.View style={[{ width: 40, marginRight: 20, height: 14 }, animatedIconRightStyle]}>
              <Image
                source={require('../assets/inbox.png')}
                style={{ width: '100%', height: 40, tintColor: '#fff' }}
              />
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  )
}

export default SwipeAnimation

const styles = StyleSheet.create({})