import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight,} from 'react-native';
import {Ionicons} from '@expo/vector-icons'


export default class Menu extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    
   
    return (
      <View style={{flex: 1,backgroundColor: 'lightgrey'}}>

        <View style={styles.block}>
          <View style={styles.zindexView}></View>
          <Image style={styles.Backgroundimg} source={require ('./images/chike.jpg')}></Image>
        </View>
          <View >
            <Image style={styles.img} source={require ('./images/playerImage.png')}></Image>
          </View>

          <View style={styles.userNameView}>
            <TouchableHighlight >
              <Text style={styles.userNameText}>Username</Text>
            </TouchableHighlight>
          </View>
        

        <View style={styles.board}>
          <View style={styles.eachIcon}>
          <Ionicons name="ios-clipboard" size={25} color='#09392e' style={styles.icon}/>
          <Text style={styles.boardText} onPress={()=>{this.props.navigation.navigate('LeaderBoardScreen');this.props.closeDrawer()}}>LeaderBoard</Text>
        </View>





        <View style={styles.eachIcon}>
          <Ionicons name="md-settings" size={25} color='#09392e' style={styles.icon} />
          <Text onPress={()=>{this.props.navigation.navigate('SettingsScreen');this.props.closeDrawer()}} style={styles.boardText}>Settings</Text>
        </View>

          <View style={styles.eachIcon}>
          <Ionicons name="ios-help-circle" size={25} color='#09392e' style={styles.icon}/>
          <Text onPress={()=>{this.props.navigation.navigate('HelpScreen');this.props.closeDrawer()}} style={styles.boardText}>Help</Text>
        </View>
        </View>
        

      </View>
    );
  }
}



const styles = StyleSheet.create({
  block: {
    height: 'auto',
    width: 350,
    marginLeft: 'auto',
    marginRight: 'auto',
    // justifyContent: 'center',
   
  },
  zindexView: {
    backgroundColor:'black',
    zIndex: 1,
    height: 200,
    position: 'absolute',
    width: 350,
    borderWidth: 1,
    borderColor: 'black',
    opacity: 0.5,
  },
  Backgroundimg:{
    height: 250,
    width: 350,
    marginTop: 0,
    backgroundColor: 'grey',
  },
  img: {
    height: 100,
    width: 100,
    marginLeft: 'auto',
    marginRight: 30,
    marginTop: -200,
    justifyContent: 'center',
    borderRadius: 100,
    zIndex: 1
   },
  userNameView: {
    marginTop: -80,
    borderStyle: 'solid',
    height: 50,
    width: 100,
    marginLeft: 'auto',
    marginRight: 30,
    zIndex: 1
  },
  userNameText: {
    fontSize: 20, 
    color: 'white', 
    textAlign: 'center',
  },

  board: {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 2,
    borderColor: 'white',
    borderStyle: 'solid',
    height: 450,
    width: 350,
    marginTop: -20,
    backgroundColor: 'white',
  },
  boardText: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: -25,
    marginLeft: 70
  },
  icon: {
    marginTop: 10,
    marginLeft: 20
  },
  eachIcon:{
    borderBottomColor: 'lightgrey',
    borderBottomWidth:  1,
    paddingBottom: 7,

  }
 
});
