import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component { 
  static navigationOptions = {
   header: null
   }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("./images/c4n.png")}/>
          <Text style={styles.text} >Live C4N Game Show</Text>
          <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('SignupScreen')} >
      <View >
      <Text style={styles.buttonT} >Get Started</Text>
      </View>
      </TouchableOpacity>

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
  button:{
    backgroundColor:'#0a392e',
    // color:'white',
    padding:20,
    width:300,
    borderWidth:1,
    borderRadius:40,
    borderColor: '#0a392e',
    marginTop:110,
    borderColor: 'white'
    
  },
  buttonT:{
    color: 'white',
    fontSize:25,
    textAlign:'center', 
  },
  text:{
    fontSize:30,
    marginTop:20,

   
  },
   logo: {
   marginTop:40,
    height: 200,
    width: 208,
    marginBottom:20,
  },
 

});

