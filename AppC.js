import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, } from 'react-native';
import { Constants } from 'expo';
import Home from './Home'
import Play from './Play'
import Login from './Login'
import Settings from './Settings'
import LeaderBoard from './LeaderBoard'
import Help from './Help'
import HowToPlay from './HowToPlay'
import Faq from './Faq'
import VerificationCode from './VerificationCode'
import GetStarted from './GetStarted'
import { createStackNavigator } from 'react-navigation';

 class App extends Component {
   static navigationOptions={
     header: null
   }
   state={
     phoneNumber:'',
   }

  login=()=>{
    if(this.state.phoneNumber === ''|| this.state.phoneNumber.length !==11){
      alert('Please Input valid phone number, eleven characters.')
    } else{
      this.props.navigation.navigate('VerificationCodeScreen')
    }
  }
  

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          onChangeText={(phone)=>{
            this.setState({
              value:phone
            })
          }}

          // onChangeText={(number)=>{this.setState({
          //   phone:number,
          //   phonebcolor:bcolor
          // })}}

          style={styles.TextInput} 
          value={this.state.phoneNumber}
          onChangeText={(phoneNumber)=>{this.setState({
            phoneNumber,
          })}}
          underlineColorAndroid='transparent'
           placeholder='Your phone number'
            keyboardType='phone-pad'/>
        <Text style={styles.paragraph}></Text>
        <View >
            <TouchableOpacity style={styles.extraLivesView} onPress={this.login}>
            <View>
              <Text  style={styles.extraLivesText}>Next</Text>
              </View>
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
    fontSize:20,
    borderRadius:60,
    backgroundColor:'white',
    textAlign:'center',

  },
  button:{
    backgroundColor:'#0a392e',
    padding:30,
    width:'70%',
    borderRadius:60,
    marginTop:-30
    },
    buttonT:{
      textAlign:'center',
      fontSize:20,
      fontWeight: 'bold',
      color:'white',
      
    },

    extraLivesView:{
      borderRadius:10,
      borderWidth:0.9,
      alignItems:'center', 
      height:60,
      width:340,
      margin:10,
      backgroundColor:'#0a392e',
      borderColor:'white', 
      marginTop:4,
      position: 'relative',
      top: -50
    },
    extraLivesText:{
      fontWeight:'bold',
      fontSize:18,
      position: 'relative',
      top: 6,
      padding:10,
      color:'white'
    }

});


const RootStack = createStackNavigator(
  {
    FaqScreen: Faq,
    PlayScreen: Play,
    HomeScreen: Home,
    HelpScreen: Help,
    SignupScreen: App,
    LoginScreen: Login,
    SettingsScreen: Settings,
    HowToPlayScreen: HowToPlay,
    LeaderBoardScreen: LeaderBoard,
    GetStartedScreen: GetStarted,
    VerificationCodeScreen: VerificationCode
  },
  {
    initialRouteName: 'GetStartedScreen',
  }
);
export default RootStack;