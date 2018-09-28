import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  static navigationOptions={
  title: 'Help'
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
       
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('HowToPlayScreen')}>
          <Text>How to play</Text>
          </TouchableOpacity>         

        </View>
        <View>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('FaqScreen')}>
          <Text>FAQs</Text>
          </TouchableOpacity>   
        </View>
      </View>
    )
  }
}

{/* const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 8,
    marginBottom: 10
  }
}); */}
