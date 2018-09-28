
import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TextInput style={styles.TextInput} value="Your phone Number" keyboardType='phone-pad'/>
        <Text style={styles.paragraph}>
 
        </Text>
      
        <View style={styles.button}>
        <TouchableOpacity disabled={true}>
        <Text style={styles.buttonT}>
        Next
        </Text>
        </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#50d2c2',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
    TextInput: {
    padding:30,
    borderColor: 'white',
    borderWidth: 1,
    width: '90%',
    marginTop:'-20%',
    fontSize:'20%',
    borderRadius:'60%',
    backgroundColor:'white',
    textAlign:'center',

  },
  button:{
    backgroundColor:'#0a392e',
    padding:30,
    width:'70%',
    borderRadius:'60%',
    marginTop:-30
    },
    buttonT:{
      textAlign:'center',
      fontSize:'20%',
      fontWeight: 'bold',
      color:'white',
      
    }
});