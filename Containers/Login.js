import React, {Component} from "react";
import {ScrollView, Text, TextInput, View, Button, Image} from "react-native";
import OpenShifts from './OpenShifts';
import { Styles } from './Styles.js';

class Login extends React.Component {
    render() {
        return (
            <ScrollView style={{padding: 20}}>

                <Image source={require("../res/Logo-100.jpg")}
                style={{height: 100, width: 200, marginLeft: 50, marginTop: 100}}/>

                <Text style={{fontSize: 27}}>Login</Text>
                <TextInput placeholder="Username"/>
                <TextInput placeholder="Password"/>
                <View style={{margin: 7}}/>
                <Button onPress={this.props.onLoginPress} title="User Login"/>

                <View style={{margin: 7}}/>
                <Button onPress={this.props.onAdminPress} title="Admin Login"/>

            </ScrollView>
        );
    }
}

export default Login;
