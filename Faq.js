import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Faq extends React.Component {
    static navigationOptions = {
        title: 'FAQs'
       }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.list}>
                    <Text style={styles.bold}>What is your name?</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, possimus?</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.bold}>What is your name?</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, possimus?</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.bold}>What is your name?</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, possimus?</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.bold}>What is your name?</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, possimus?</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.bold}>What is your name?</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, possimus?</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        padding: 5,
        marginBottom: 5
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 15
    }
});
