import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Share,TouchableOpacity, DrawerLayoutAndroid,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Menu from './Menu'



export default class Home extends Component {
  static navigationOptions ={
    header: null
  }
  state={
    gamePlayTime : 'Tomorrow 8pm GMT +01:00',
      gameAmount :'50,000',
      weekRank  :'---',
      currentBalance  : '0'
  }

  openDrawer=()=>{
    this.drawer.openDrawer()
  }

  closeDrawer=()=>{
    this.drawer.closeDrawer()
  }
 
  play

  handleShare=()=>{
    Share.share({
      message:'Answer questions and earn money',
      url:'chikeukaegbu.com',
      title:'Earn money on the go'
    },{
      dialogTitle:'invite your friends'
    })
  }
  render() {
    return (
      <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={()=> <Menu navigation={this.props.navigation} closeDrawer={this.closeDrawer}/>}
      ref={(_drawer) => {
        this.drawer = _drawer;
      }}
    >
      <View style={styles.container}>
       
               {/* header */}
        <View style={styles.headerNav}>
          <TouchableOpacity onPress={this.openDrawer}>
            <Ionicons style={{margin:10}} name='md-menu' size={50} color="white" />
          </TouchableOpacity>
        
            <Text style={styles.c4N} >C4N</Text>
        
        </View>
        <ScrollView>
                 {/* game details */} 
        <View style={styles.gameDetails}> 
          <Text style={styles.textInput} >NEXT GAME</Text>
          <Text style={[styles.textInput,{fontSize:22}]}>{this.state.gamePlayTime}</Text>
                 {/* play button */}
          <View style={styles.playView}>        
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('PlayScreen')}> 
              <Text  style={styles.playText}>Play</Text>
            </TouchableOpacity>
          </View>
        </View>

                  {/* white background */}
        <View  style={styles.whiteBackgroundView}>
                {/* gameAmountView */}
          <View style={styles.gameAmountView} >
            <Text style={styles.gameAmountText} >&#8358;{this.state.gameAmount}</Text>
          </View>
          <View style={styles.leftRightView} >
            <View style={styles.leftView}>
              <Text style={styles.balanceText} >BALANCE</Text>
              <Text style={styles.currentBalance} >&#8358;{this.state.currentBalance}</Text>
            </View>
            <View style={styles.weekRankView}>
              <Text style={styles.weekRankText} >WEEKLY RANK</Text>
              <Text style={styles.weekRankIndicator} >{this.state.weekRank}</Text>
            </View>
            </View>
          </View>


       {/* Extra Lives button */}
       <TouchableOpacity style={styles.extraLivesView} onPress={this.handleShare}>
          <View >
            <Text  style={styles.extraLivesText}>Extra Lives</Text>
          </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
       </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#50d2c2',
    // padding: 30,
    justifyContent: 'flex-start',
  },

  headerNav:{
    alignItems: 'center',
    borderBottomColor:'#ffffff',
    borderBottomWidth:0.5,
    height:80,
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop:0,
  },
  c4N:{
    fontSize: 28,
    fontWeight:'bold',
    color:'white',
    marginLeft: 100
  },
  gameDetails:{
    alignItems:'center',
    marginTop:10
  },
  textInput:{
    fontWeight:'bold',
    fontSize:19,
    color:'white'
  },
  playView:{
    alignItems:'center',
    position:'relative', 
    top:2
  },
  playText:{
    borderRadius:10,
    borderColor:'white',
    // shadowColor:#fff,
    shadowOpacity:0.5,
    borderWidth:0.9, 
    backgroundColor:'#0a392e',
    padding:19,
    fontWeight:'bold',
    fontSize:18,
    color:'white',
    textAlign:'center',  
  },
  whiteBackgroundView:{
    height:300,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#50d2c2', 
    backgroundColor:'white',
    margin:10,
    marginTop:20
  },
  gameAmountView:{
    alignItems:'center',
    height:120,
    padding:20
  },
  gameAmountText:{
    fontSize: 40,
    fontWeight:'bold',
    padding:20
  },
  leftRightView:{
    height:180,
    borderWidth:1,
    borderColor:'#50d2c2',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  leftView:{
    alignItems:'center',
    borderRightWidth:1,
    borderRightColor:'#50d2c2',
    width:170,
    borderRadius:0
  },
  balanceText:{
    fontWeight:'bold',
    padding:30,
    position:'relative', 
    top:30,
    fontSize:14,
  },
  currentBalance:{
    fontSize: 40,
    fontWeight:'bold', 
    position:'relative', 
    top:0,
  },
  weekRankView:{
    borderRadius:10,
    alignItems:'center',
    width:170 ,
    position:'relative', 
    right:6
  },
  weekRankText:{
    fontWeight:'bold',
    padding:30,
    position:'relative', 
    top:30,
    fontSize:14
  },
  weekRankIndicator:{
    fontWeight:'bold', 
    position:'relative', 
    top:0,
    fontSize:27
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
    marginTop:-4
  },
  extraLivesText:{
    fontWeight:'bold',
    fontSize:18,
    padding:10,
    position: 'relative',
    top: 6,
    color:'white'
  }
});



