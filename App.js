import React from 'react';
import { StyleSheet, Text, View TextInput } from 'react-native';
import MapView, { Marker} from 'react-native-maps';
import {Home} from './components/Home'



export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
  return (
    <View style={styles.container}>
    <Home/>
    <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
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
     <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
}


const styles = StyleSheet.create({
 container: {
   position: 'absolute',
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
   justifyContent: 'flex-end',
   alignItems: "center"
 },
 map: {
   position: 'absolute',
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
 },
});
