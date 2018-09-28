import React, { Component } from 'react';
import { StyleSheet, Text, View,ScrollView, TouchableOpacity,KeyboardAvoidingView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Play extends React.Component {
  static navigationOptions={
    header: null,
    title: null
     }
  firstOption = () => {
    alert('Oops!! Wrong Answer. ')
  }

  secondOption = () => {
    alert('Correct!! you got the right answer')
  }

  thirdOption = () => {
    alert('Oops!! Wrong Answer. ')
  }
  render() {
    let
     questions = ['Who is the president of Nigeria']
     optionA = 'Rochas Okorocha';
     optionB = 'Mohamadu Buhari';
     optionC = 'Dele Amadu';
    return (

      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView>

            <View>
              <Text style={styles.counter}>10</Text>
            </View>

            <View style={styles.borderContainer}>
              <Text style={styles.questions}>{questions}</Text>

              <View style={styles.optionsView}>
                <TouchableOpacity onPress={this.firstOption}>
                  <Text style={styles.textAnswers}>{optionA}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.optionsView}>
                <TouchableOpacity onPress={this.secondOption}>
                  <Text style={styles.textAnswers}>{optionB}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.optionsView}>
                <TouchableOpacity onPress={this.thirdOption}>
                  <Text style={styles.textAnswers}>{optionC}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.borderComment}>

              <View style={styles.commentView}>
                <Ionicons name='ios-contact' size={35} color='black' style={{}} />
                <Text style={styles.commentText}>lol this question hard small</Text>
              </View>

              <View style={styles.commentView}>
                <Ionicons name='ios-contact' size={35} color='black' style={{}} />
                <Text style={styles.commentText}>i love this question</Text>
              </View>

              <View style={styles.commentView}>
                <Ionicons name='ios-contact' size={35} color='black' style={{}} />
                <Text style={styles.commentText}>Who won the money?</Text>
              </View>
            </View>



            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={styles.textInput}
                placeholder='Comment here'
                placeholderTextColor='white'
                fontSize={15}
                multiline={true}
                numberOfLines={2}
                underlineColorAndroid='transparent'

              />

              <TouchableOpacity>
                <Text style={styles.send}>Send</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>


    );
  }
}
export default Play;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#50d2c2',

  },
  counter: {
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
    borderColor: 'black',
    borderRadius: 100,
    borderWidth: 2,
    width: 50,
    height: 50,
    marginLeft: 150,
    backgroundColor: 'black',
    marginTop: 15
  },

  borderContainer: {
    borderColor: 'black',
    borderWidth: 2,
    width: 300,
    height: 260,
    marginLeft: 30,
    borderRadius: 10
  },
  questions: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  optionsView: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textAnswers: {
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 2,
    width: 255,
    height: 35,
    borderRadius: 100,
    margin: 5,
    marginLeft: 20,
    paddingLeft: 20,
    paddingTop: 5
  },

  borderComment: {
    marginLeft: 28,
  },

  commentView: {
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'flex-start',
    marginRight: 50
  },
  commentText: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10
  },

  textInput: {
    borderWidth: 2,
    marginBottom: 29,
    width: '63%',
    marginLeft: 30,
    padding: 3,
    marginTop: 20,
    borderRadius: 15
  },

  send: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    width: 75,
    height: 53,
    textAlign: 'center',
    backgroundColor: '#0a3a2e',
    fontSize: 25,
    padding: 5,
    marginTop: 21,
    color: 'white',
    marginRight: 30
  }
});

