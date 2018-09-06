import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    Button,
    View
} from 'react-native';
import Secured from './Secured';
import HomeScreen from './HomeScreen';
import MyCalendar from './MyCalendar';

export default class Settings extends React.Component {
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>Setting</Text>
                <Text style={{padding: 20}}>
                    Change Availability
                </Text>
                <Text>Please select the date that you are available!</Text>
                <MyCalendar />
                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
                    <Button onPress={this.props.onHomePress} title="Back"/>
                    <Button onPress={this.props.onLogoutPress} title="Logout"/>
                </View>
            </ScrollView>
        );
    }
}