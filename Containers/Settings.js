import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    Button,
    View
} from 'react-native';
import Secured from './Secured';
import HomeScreen from './HomeScreen';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navBack: false,
            pageId: 0
        };

        this.navBack = this.navBack.bind(this);
    }

    navBack() {
        this.setState({navBack: true});
    }
    
    navToSetting() {
        this.setState({pageId: 1});
    }

    render() {

        switch (this.state.navBack) {
            case false: {
                return (
                    <ScrollView>
                        <Text 
                            style={{fontSize: 27}}>
                            Setting
                        </Text>
        
                        <View
                                style={{padding: 20}}>
                            <Text>
                                Change Availability
                            </Text>
        
                        </View>
        
                        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
                            <Button onPress={this.navBack} title="Back" />
                            <Button onPress={this.props.onLogoutPress} title="Logout" />
                        </View>
                    </ScrollView>
                );
                break;
            }
            case true: {
                return (
                    // <ScrollView>
                    //     <Text style={{fontSize: 27}}>Welcome</Text>
                    //     <View style={{margin: 20}}></View>
                    //     <HomeScreen onLogoutPress={this.props.onLogoutPress}/>
                    // </ScrollView>
                    <ScrollView style={{padding: 20}}>
                        <Secured onLogoutPress={this.props.onLogoutPress}/>
                    </ScrollView>
                );
                break;
            }
        }
    }
}