import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Text>Log in or sign up</Text>
                </View>
                <View>
                    <Text>Please enter the verification code sent to +234...</Text>
                </View>
                <View>
                    <TextInput
                    placeholder='Enter Verification Code'
                    >

                    </TextInput>
                </View>
                <View>
                    <Text>Resend code in 00</Text>
                </View>
                <View>
                    <Text>Next</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroudColor: '#50d2dc2'
    },
    nav: {
        flexDirection: 'row',
        fontSize: 14,
        borderBottomWidth: 1,
        padding: 8,
        marginBottom: 10
    },
    input: {
        borderRadius: 100,
        padding: 10,
        height: 10
    }
});
