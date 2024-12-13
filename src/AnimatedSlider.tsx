import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SliderItem from './SliderItem';

const images = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1558981406-aa41be2a6be2',
  },
];

const AnimatedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={images}
        onScroll={e => {
          const X = e.nativeEvent.contentOffset.x;
          setCurrentIndex((X / Dimensions.get('window').width - 40).toFixed(0))
        }}
        renderItem={({ item, index }) => {
          return (
            <SliderItem
              key={item.id}
              image={item.url}
              index={index}
              currentIndex={currentIndex}
            />
          )
        }}
        horizontal
      />
    </View>
  )
}

export default AnimatedSlider

const styles = StyleSheet.create({})