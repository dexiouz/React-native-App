
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

export default class VerificationCode extends Component {
  static navigationOptions ={
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph1}>
       Please enter the verification code sent to 08093546694
        </Text>
          <TextInput style={styles.TextInput} placeholder="Enter Verification Code" keyboardType='phone-pad'/>
        <Text style={styles.paragraph2}>
       Resend code in 20
        </Text>

         <View style={styles.button}>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('LoginScreen')}>
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
  paragraph1: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
    marginTop:'-50%',
  },
  paragraph2:{
    margin: 24,
    fontSize: 15,
    textAlign: 'center',
    color: '#34495e',
    marginTop:40,
  },
     TextInput: {
    padding:30,
    borderColor: 'white',
    borderWidth: 1,
    width: '90%',
    fontSize:20,
    borderRadius:60,
    backgroundColor:'white',
    textAlign:'center',
    marginTop:'10%'

  },
   button:{
    backgroundColor:'#0a392e',
    padding:30,
    width:'70%',
    borderRadius: 60,
    marginTop:20,
    borderColor: 'white'
    },
    buttonT:{
      textAlign:'center',
      fontSize: 20,
      fontWeight: 'bold',
      color:'white',
      
    }
});