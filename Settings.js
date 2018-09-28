
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView,KeyboardAvoidingView
} from 'react-native';
import { Constants } from 'expo';

export default class Settings extends React.Component {
 static navigationOptions={
   title: 'Settings'
    }
  render() {
    return (
    

      <View style={styles.container}>
      
        <Image style={styles.logo} source={require('./images/playerImage.png')} />
        <Text style={styles.paragraph}>Shalom Mathew</Text>
        
        <TextInput 
          style={styles.TextInput}  
          placeholder="Referal Code" 
          placeholderTextColor='white' 
          underlineColorAndroid= 'transparent' />
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
    color: 'black',
  },
  logo: {
    height: 128,
    width: 128,
    borderRadius: 65,
    marginTop: '-40%',
  },
  TextInput: {
    height: 50,
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '70%',
    marginTop:'5%',
    fontSize: 20,
    textAlign:'center',

  },
});