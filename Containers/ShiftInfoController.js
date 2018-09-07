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

class ShiftInfoController extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      showDetails: false
    }
  }

  getShiftInfo() {
    if (this.props.selectedDay =='2018-09-01') {
      return "Cleaning job \nSpotless \n$20/hr";
    }
    else {
      return "Cleaning job \nNotless \n$24/hr";
    }
  }

  render() {
    return(

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
);
}
}

export default ShiftInfoController;
