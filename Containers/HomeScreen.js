import React, { Component } from 'react';
import {ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';
import MyCalendar0 from './MyCalendar0';
import ShiftInfo from './ShiftInfo';
import ShiftInfo0 from './ShiftInfo0';
import ShiftInfo1 from './ShiftInfo1';
import ShiftInfo2 from './ShiftInfo2';
import ShiftInfo3 from './ShiftInfo3';
import ShiftInfo4 from './ShiftInfo4';
import ShiftInfo5 from './ShiftInfo5';
import ShiftInfo6 from './ShiftInfo6';


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
				<Text>Monthly Shifts</Text>
          <View style={{marginBottom:40, borderRadius:2, borderWidth:1, padding: 10}}>
          <MyCalendar0 selectDay={this.selectDay}/></View>
					<ScrollView>

						<Text style={{
							fontSize: 20
						}}>Thursday 13th</Text>
          <TouchableOpacity onPress={this.props.showDetails}>
            <ShiftInfo date={this.state.selectedDay}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.props.showDetails}>
						<ShiftInfo0 date={this.state.selectedDay}/>
					</TouchableOpacity>
				<Text style={{fontSize: 20}}>Friday 14th</Text>
					<TouchableOpacity onPress={this.props.showDetails}>
						<ShiftInfo1 date={this.state.selectedDay}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.props.showDetails}>
						<ShiftInfo2 date={this.state.selectedDay}/>
					</TouchableOpacity>
					<Text style={{fontSize: 20}}>Monday 17th</Text>
					<TouchableOpacity onPress={this.props.showDetails}>
						<ShiftInfo3 date={this.state.selectedDay}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.props.showDetails}>
						<ShiftInfo4 date={this.state.selectedDay}/>
					</TouchableOpacity>
					<Text style={{fontSize: 20}}>Wenesday 19th</Text>
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
