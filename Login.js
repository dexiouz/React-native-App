import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , ScrollView,TextInput, KeyboardAvoidingView } from 'react-native';
export default class HowToPlay extends Component {
state = {
	username: '',
	bColor: "white"
}
static navigationOptions = {
  title: 'Login',
  header: null
}
login = () => {
	let { username } = this.state;
	if (username === "") {
		this.setState({
			bColor: "red"
		})
	} else {
		this.props.navigation.navigate('HomeScreen')
	}
}
	render() {
	let { username, bColor } = this.state;
	return (
		<View style={styles.container}>
				<KeyboardAvoidingView behavior='padding' >
					<ScrollView>
						<View style={{ justifyContent: 'center',marginLeft:10,marginRight:10 }}>
							<Text style={[styles.Text,{fontSize:40}]}>WELCOME</Text>
							<Text  style={styles.Text}>please enter your login details below</Text>
						</View>
						<View>
							<Text style={styles.text}>Username</Text>
							<TextInput
								value={username}
								onChangeText={(username) => { this.setState({ username, bColor: "black" }) }}
								style={[styles.textInput, { borderColor: bColor }]}
								placeholder='Username'
								underlineColorAndroid='transparent'
							/>
							<Text style={styles.text}>Referral Code</Text>
							<TextInput
								style={[styles.textInput, { borderColor: bColor }]}
								placeholder='Referral Code'
								underlineColorAndroid='rgba(0,0,0,0)'
							/>		
							<TouchableOpacity  style={styles.extraLivesView} onPress={this.login}>
								<View>
              		<Text  style={styles.extraLivesText}>Login</Text>
        				</View>  
 							</TouchableOpacity>
						</View>
					</ScrollView>
				</KeyboardAvoidingView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
    paddingTop: 20,
		backgroundColor: '#50d2c2',
    height:'100%',
	},
	Text:{
		fontWeight:'bold',
		textAlign: 'center',
		fontSize: 20, 
	},
	text: {
		marginLeft: 29,
		fontSize: 20
	},
	textInput: {
		backgroundColor:'white',
		borderWidth: 2,
		marginBottom: 30,
		width: '85%',
		marginLeft: 29,
		padding: 5
	},
	extraLivesView:{
		borderRadius:10,
		borderWidth:0.9,
		borderTopWidth: 0.9,
		alignItems:'center', 
		height:60,
		width: '85%',
		margin:10,
		backgroundColor:'#0a392e',
		borderColor:'white', 
		marginTop:4,
		position: 'relative',
		top: -10,
		marginLeft: 29
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




