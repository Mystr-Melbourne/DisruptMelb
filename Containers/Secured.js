import React, {Component} from "react";
import {ScrollView, Text, View, Button, HeaderBanner} from "react-native";
import HomeScreen from './HomeScreen.js';
import ShiftDetailed from './ShiftDetailed.js';
import UserProfile from './UserProfile.js';
import Header from './Header.js';
import OpenShifts from './OpenShifts.js';

class Secured extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      pageId: 0
    }
		this.viewHomeScreen = this.viewHomeScreen.bind(this);
		this.viewUserProfile = this.viewUserProfile.bind(this);
		this.viewSettings = this.viewSettings.bind(this);
		this.viewShiftDetails = this.viewShiftDetails.bind(this);
    this.viewOpenShifts = this.viewOpenShifts.bind(this);
		this.viewOpenShiftDetails= this.viewOpenShiftDetails.bind(this);
  }

	viewHomeScreen() {
		this.setState({pageId: 0});
	}
	viewUserProfile() {
		this.setState({pageId: 1});
	}
	viewSettings() {
		this.setState({pageId: 2});
	}
	viewShiftDetails() {
		this.setState({pageId: 3});
	}
  viewOpenShifts() {
		this.setState({pageId: 5});
	}
	viewOpenShiftDetails() {
		this.setState({pageId: 6});
	}

	render() {

		switch (this.state.pageId) {
			case 0: {
				return (

					<ScrollView style={{padding: 20}}>
						<Header onOSPress={this.viewOpenShifts} onProfilePress={this.viewUserProfile}/>
						<HomeScreen showDetails={this.viewShiftDetails} />
					</ScrollView>
				);
			}
			case 1: {
				return (

					<ScrollView style={{padding: 20}}>
						<Header onOSPress={this.viewOpenShifts} onProfilePress={this.viewUserProfile}/>
						<Text style={{fontSize: 27}}>User Profile</Text>
						<UserProfile onHomePress={this.viewHomeScreen} onLogoutPress={this.props.onLogoutPress}/>
					</ScrollView>
				);
			}
			case 3: {
				return (
					<View style={{paddingTop: 20}}>
						<Header onOSPress={this.viewOpenShifts} onProfilePress={this.viewUserProfile}/>
						<ScrollView><ShiftDetailed onHomePress={this.viewHomeScreen}/></ScrollView>
					</View>
				)
			}

      case 5: {
				return (
					<View style={{paddingTop: 20}}>
            <Header onOSPress={this.viewOpenShifts} onProfilePress={this.viewUserProfile}/>
						<ScrollView><OpenShifts onOSDPress={this.viewOpenShiftDetails}/></ScrollView>
					</View>
				)
			}
		}
	}
}

export default Secured;
