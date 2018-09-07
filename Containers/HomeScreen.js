import React, { Component } from 'react';
import {ScrollView, Text, Button, TouchableOpacity} from 'react-native';
import MyCalendar0 from './MyCalendar0';
import ShiftInfo from './ShiftInfo';


class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDay: "Click on a day to view available shifts"
		};
		this.selectDay = this.selectDay.bind(this);
	}

	selectDay(day) {
		let word;
		if (typeof day == "object") this.setState({selectedDay: day.dateString});
	}

  render() {
    return (
      <ScrollView style={{padding: 20}}>
          <Text style={{fontSize: 30}}>Open Shift</Text>
          <Text>{this.state.selectedDay}</Text>
          <MyCalendar0 selectDay={this.selectDay}/>
          <TouchableOpacity onPress={this.props.showDetails}>
            <ShiftInfo date={this.state.selectedDay}/>
          </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default HomeScreen;
