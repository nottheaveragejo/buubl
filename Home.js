import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker} from 'react-native-maps';
import {test} from './style'
import Test from './Test'

const Home = () => {
  return(
    <View style = {test}>
    <Text >
      Buubl Maps
    </Text>
    <Text>
      Find Your Boba Balls
    </Text>
    <Test></Test>
    </View>
  )
}

export default Home
