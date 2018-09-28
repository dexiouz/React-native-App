import React, { Component } from 'react';
import { StyleSheet, Text, View,} from 'react-native';



export default class LeaderBoard extends React.Component {
  static navigationOptions = {
   title: 'Leaderboard'
  }
  render() {
    return (
      <View style={{flex: 1,}}>
        <View>
          <Text style={styles.leaderBoardText}>LEADERBOARD oo!!!</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  leaderBoard: {
    paddingTop: 10,
    borderWidth: 2,
    borderColor: '#09392e',
    borderStyle: 'solid',
    height: 50,
  },
  leaderBoardHeader: {
    textAlign: 'center',
    fontSize: 20
  },
  leaderBoardText: {
    fontSize: 30,
    textAlign: 'center'
  }


});