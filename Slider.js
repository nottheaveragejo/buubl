import React from 'react'
import {View, Text,  Slider} from 'react-native'

export default Slide = () => {
  return(
    <View >
    <Slider
      style={{width: 200, height: 40}}
      maximumValue = {60}
      minimumValue = {0}
    >
    </Slider>
    </View>
  )
}
