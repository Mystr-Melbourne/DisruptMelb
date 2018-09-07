import React, { Component } from 'react';
import {View, ScrollView, Text, Button} from 'react-native';
import { Styles } from './Styles.js';
import ShiftDetailed from './ShiftDetailed';

class ShiftInfo0 extends React.Component{
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
      <View>
        <View style={{borderRadius: 2, borderWidth: 1, padding: 5}}>
          <Text>What: Catering{'\n'}
                Where: 520 Bourke St.{'\n'}
                When: 4:00pm - 7:30pm{'\n'}</Text>
        </View>
      </View>
    );
  }
}

export default ShiftInfo0;
