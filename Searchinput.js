
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default class Searchinput extends Component () {
  constructor() {
    super();
    this.state = {text: ''};
  }
  render (){
    return (
      <TextInput
      style={{height: 40}}
      placeholder="Type here to translate!"
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
    />
    )
  }

}
