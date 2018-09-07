import React, { Component } from 'react';
import {View, ScrollView, Text, Button, TouchableOpacity, Header } from 'react-native';
import { Styles } from './Styles.js';

class ShiftDetailed extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      displayModal: false
    }
  }

  hideModal = () => {
    this.setState({displayModal: false});
  }

  render() {
    return(
      <View style={{backgroundColor:'#FF3A2F'}}>
        <ScrollView style={{height:700}}>
          <Text style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 48
          }}>{'\n\n'}CATERING{'\n\n'}</Text>
          {this.state.displayModal && (
            <View style={Styles.modal}>
              <Text style={{
                paddingBottom: 20,
                textAlign: 'center'
              }}>
                Are you sure you want to forfeit your shift?{'\n'}
                You may not be able to get it back.
              </Text>
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',

                }}>
                <Button onPress={this.hideModal} title="Confirm" style={Styles.button}/>
                <Button onPress={this.hideModal} title="Decline" style={Styles.button}/>
              </View>
            </View>
          )}
          <Text style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 24
          }}>
            8:30am to 11:30am{'\n'}
            ( 3 hours ){'\n'}
            520 Bourke St. VIC{'\n'}
            Insert Description Here{'\n'}
          </Text>
          <View style={{
              flex:1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingTop:30,
              marginTop:100,
            }}>
            <TouchableOpacity onPress={this.props.onHomePress}>
              <View >
                <Text style={Styles.closeBanner} >Cancel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({displayModal:true})}>
              <View>
                <Text style={Styles.openShiftBanner}>Cover My Shift</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    );
  }
}

export default ShiftDetailed;
