import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker} from 'react-native-maps';


export default function MapContainer() {
  return (
      <MapView style={styles.map}
    initialRegion={{
      latitude:  40.728,
      longitude: -73.986,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
  <Marker
  coordinate={{
    latitude:  40.728,
    longitude: -73.986}}
    title={"home"}
    description={'testing123'}/>
  </MapView>
  );
}


const styles = StyleSheet.create({
 map: {
   position: 'absolute',
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
 }
});
