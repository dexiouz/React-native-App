import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, } from 'react-native';
import {Ionicons } from '@expo/vector-icons'
import {SimpleLineIcons} from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{backgroundColor:'white'}}>
				<View style={styles.header} >
					<Image style={styles.img} source={require('./images/playerImage.png')}></Image>
					<Text style={{ fontSize: 24, fontWeight: 'bold' }} > Player Name</Text>
					<Text style={{ fontSize: 20, }} > Joined January 2019</Text>
				</View>

				{/* icons */}
				<View style={{ }} >

					<View style={{ flexDirection: 'column',marginLeft:10 }}>
						<FontAwesome style={{ marginLeft: 10}} name='edit' size={40} color='#0a392e' />
						<Text style={styles.postText} > Post</Text>
					</View>

					<View style={{marginLeft:110, marginTop:-65}}>
						<Ionicons style={{ marginLeft: 50}}  name='ios-eye-outline' size={40} color='#0a392e' />
						<Text style={styles.ViewAsText} > View As</Text>
					</View>

					 <View style={{marginLeft:190, marginTop:-65}} >
						<MaterialCommunityIcons name='account-edit' size={40} color='#0a392e' />
						<Text style={styles.profileText} > Edit Profile</Text>
					</View>

					<View style={{marginLeft:300, marginTop:-65}} >
						<Ionicons name='ios-more' size={40} color='#0a392e' />
						<Text style={styles.moreText} > More</Text>
					</View>

				</View>
				

				<View style={styles.emptyView} ></View>
				</View>
				<View style={styles.aboutView } >
					<Text style={styles.aboutText}>About</Text>
				</View>

				<View style={{paddingTop:20}} >
					<View style= {styles.portFolioView}>
						<SimpleLineIcons name='briefcase' size={40} color='white' />
						<Text style={{ fontSize: 18,padding:3 }} > CEO at LearnFactory Nigeria</Text>
					</View>

					<View style= {styles.livesInView}>
						<Ionicons name='ios-home-outline' size={50} color='white' />
						<Text style={{ fontSize: 18,padding:3 }} > Lives in Aba, Abia State</Text>
					</View>

					<View style= {styles.fromView}>
						<Ionicons name='ios-pin-outline' size={50} color='white' />
						<Text style={{ fontSize: 18,padding:3 }} > From Aba, Abia </Text>
					</View>

				</View>
				<TouchableOpacity style={styles.extraLivesView} onPress={this.handleShare}>
          <View >
            <Text  style={styles.extraLivesText}>Edit Profile</Text>
          </View>
          </TouchableOpacity>
					</View>

			
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	  backgroundColor: '#50d2c2',
	},
	img: {
    height: 100,
		width: 100
	 },
	 header:{
		margin: 20, 
		flexDirection: 'column', 
		alignItems: 'center' 
	 },
	 postText:{
		fontSize: 14,
		color:'#0a392e'
	 },
	 ViewAsText:{
		position:'relative', 
		left:-10, 
		fontSize: 14,
		color:'#0a392e' 
	 },
	 profileText:{
		position:'relative', 
		left:-10, 
		fontSize: 14,
		color:'#0a392e'
	 },
	 moreText:{
		position:'relative', 
		left:-10,
		fontSize: 14, 
		color:'#0a392e'
	 },
	 aboutText:{
		fontSize:20, 
		padding:10, 
		fontWeight:'bold',
		marginLeft:10
	 },
	 emptyView:{
		height: 20, 
		backgroundColor:'#0a392e',
		marginTop: 20
	 },
	 aboutView:{
		height: 40,
		borderBottomWidth:0.7, 
		borderBottomColor:'#0a392e', 
	 },
	 portFolioView:{
		flexDirection:'row', 
		justifyContent:'flex-start', 
		marginLeft:20
	 },
	 livesInView:{
		flexDirection:'row', 
		justifyContent:'flex-start', 
		marginLeft:17, 
		padding:10
	 },
	 fromView:{
		flexDirection:'row', 
		justifyContent:'flex-start', 
		marginLeft:20, 
		padding:10
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
})