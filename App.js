import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView,  Image,  Slider} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { NativeRouter, Route, Link } from "react-router-native";
import MapContainer from './MapContainer'
import Home from './Home'
import Slide from './Slider'
import { colors } from 'react-native-elements';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
  return (
    <NativeRouter>
       <ScrollView>
       <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
         <Text>Container</Text>
                  </Link>
       <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
           <Text>homer</Text>
        </Link>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
         <Text>Container</Text>
                  </Link>
       <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
           <Text>homer</Text>
        </Link>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
         <Text>Container</Text>
                  </Link>
       <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
           <Text>homer</Text>
        </Link>
        <Slide></Slide>
        <Route exact path="/" component={MapContainer} />
   <Route exact path="/home" component={Home} />
        </ScrollView>
    </NativeRouter>
  //   <NativeRouter>
  //       <View style={styles.container}>
  //       <ScrollView>
  //       </ScrollView>
  //       <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
  //         <Text>Container</Text>
  //         </Link>
  //       <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
  //         <Text>homer</Text>
  //       </Link>
  //  </View>

  //   <Route exact path="/" component={MapContainer} />
  //     <Route exact path="/home" component={Home} />
  //   </NativeRouter>
  );
}
}


const styles = StyleSheet.create({
 container: {
  flexDirection: 'column',
   position: 'absolute',
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
 },
 map: {
   position: 'absolute',
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
 },
});
