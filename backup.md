import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, Button, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, ActivityIndicator, DrawerLayoutAndroid, onDrawerOpen} from 'react-native';
import HowToPlay from './HowToPlay';
import Add from './Add';
import Help from './Help'
import { createStackNavigator } from 'react-navigation';


class App extends Component {
  static navigationOptions ={
    header: null
  }
  whatever=()=>{
    console.log('hi')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerNav}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('AddScreen')}>
              <Text style={{ fontSize: 20,fontWeight:'bold',color:'white' }} > Add</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('ContactScreen')}>
              <Text style={{ fontSize: 28,fontWeight:'bold',color:'white'}} > HQ</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('HelpScreen')}>
              <Text style={{ fontSize: 20,fontWeight:'bold', margin:10,color:'white' }} > Help</Text>
            </TouchableHighlight>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{fontWeight:'bold', fontSize:19,color:'white'}} >NEXT GAME</Text>
          <Text style={{fontWeight:'bold', fontSize:22,color:'white'}}>8pm GMT +1:00</Text>
          <Text style={{fontWeight:'bold', fontSize:22,color:'white'}}>$5,000</Text>
        </View>

        <View  style={{ height:300,borderRadius:10,borderWidth:2,borderColor:'white', backgroundColor:'white',margin:10,marginTop:37}}>
        {/* image view */}
          <View style={{alignItems:'center'}} >
            <Image source={require('./images/playerImage.png')} style= {{width:50,height:50,marginTop:10}} />
            <Text style={{ fontSize: 20,fontWeight:'bold'}} >Player Name</Text>
          </View>



{/* borderColor:'grey' */}
          <View style={{height:130,borderWidth:1,borderColor:'grey'}} >
            <View style={{ height:126.5,backgroundColor:'white', width:160,alignItems:'center',}}>
              <Text style={{fontWeight:'bold',padding:30,fontSize:14}} >BALANCE</Text>
              <Text style={{fontWeight:'bold', position:'relative', top:-30,fontSize:27}} >$0</Text>
            </View>
            <View style={{borderWidth:1, height:129,backgroundColor:'white',borderLeftColor:'gray', width:176,marginLeft:160,position:'relative', top:-127,alignItems:'center'}}>
              <Text style={{fontWeight:'bold',padding:30,fontSize:14}} >WEEKLY RANK</Text>
              <Text style={{fontWeight:'bold', position:'relative', top:-30,fontSize:27}} >---</Text>
            </View>
          </View>


            <View>
              <Text  style={{fontWeight:'bold',fontSize:14,position:'relative',top:30,left:20,alignItems:'center'}}>EXTRA LIVES</Text>
              <View style={{borderRadius:30,borderWidth:0.9,alignItems:'center', height:36,width:100,marginLeft:225}}>
              <Text  style={{fontWeight:'bold',fontSize:14,padding:5}}>Get More</Text>
              </View>
            </View>
        </View>

        <View >
          <View  style={{borderRadius:30,borderWidth:0.9,alignItems:'center', height:50,width:80,marginTop:20,width:170,margin:10,backgroundColor:'skyblue'}}>
          <Text  style={{fontWeight:'bold',fontSize:18,padding:10,color:'white'}}>Leaderboard</Text>
           </View>
           <View  style={{borderRadius:30,borderWidth:0.9,alignItems:'center', height:50,width:160,marginLeft:185,marginTop:-58,backgroundColor:'skyblue'}}>        
           <Text  style={{fontWeight:'bold',fontSize:18,padding:10,color:'white',}}>Invite</Text>
           </View>   
        </View>
        
        {/* <Text>The Home Screen is here</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    // padding: 30,
    justifyContent: 'flex-start',
  },

  headerNav:{
    alignItems: 'center',
    
    height:80,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:30,
  },
});




















































const RootStack = createStackNavigator(
  {
    HomeScreen: App,
    AddScreen: Add,
    HelpScreen: Help,
    HowToPlay: HowToPlay,
  },
  {
    initialRouteName: 'HomeScreen',
  }
);
export default RootStack;

