import React, { Component } from 'react';
import {ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';
import MyCalendar0 from './MyCalendar0';
import ShiftInfo from './ShiftInfo';
import ShiftInfo0 from './ShiftInfo0';
import ShiftInfo1 from './ShiftInfo1';
import ShiftInfo2 from './ShiftInfo2';
import ShiftInfo3 from './ShiftInfo';
import ShiftInfo4 from './ShiftInfo0';
import ShiftInfo5 from './ShiftInfo1';
import ShiftInfo6 from './ShiftInfo2';


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
      <View style={{padding: 20}}>
          <Text style={{fontSize: 30}}>Open Shift</Text>
          <Text>{this.state.selectedDay}</Text>
          <MyCalendar0 selectDay={this.selectDay}/>
					<ScrollView>
          <TouchableOpacity onPress={this.props.showDetails}>
            <ShiftInfo date={this.state.selectedDay}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.props.showDetails}>
						<ShiftInfo0 date={this.state.selectedDay}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.props.showDetails}>
						<ShiftInfo1 date={this.state.selectedDay}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.props.showDetails}>
						<ShiftInfo2 date={this.state.selectedDay}/>
					</TouchableOpacity>

					<TouchableOpacity onPress={this.props.showDetails}>
						<ShiftInfo3 date={this.state.selectedDay}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.props.showDetails}>
						<ShiftInfo4 date={this.state.selectedDay}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.props.showDetails}>
						<ShiftInfo5 date={this.state.selectedDay}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.props.showDetails}>
						<ShiftInfo6 date={this.state.selectedDay}/>
					</TouchableOpacity>
					</ScrollView>

      </View>
    );
  }
}

export default HomeScreen;
