import React, {Component} from 'react';
import { View, Text, ScrollView, Button, Image } from 'react-native';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View>
        <Image source={require('../res/duck.jpg')} style={{margin: 60, borderWidth: 20}}/>
        <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>Employee</Text>
        <Text style={{fontSize: 27, fontWeight: 'bold', textAlign: 'center'}}>Example User</Text>
        <View style={{
          flexDirection: 'row'
        }}>
            <Text style={{fontWeight: 'bold', fontSize: 27}}>Email: </Text>
            <Text style={{fontSize: 23}}>example@email.com</Text>
        </View>
        <View style={{
          flexDirection: 'row'
        }}>
            <Text style={{fontWeight: 'bold', fontSize: 27}}>Phone: </Text>
            <Text style={{fontSize: 23}}>0424 123 123</Text>
        </View>
        <View style={{
          flexDirection: 'row'
        }}>
            <Text style={{fontWeight: 'bold', fontSize: 27}}>Position: </Text>
            <Text style={{fontSize: 23}}>Executive Cleaner</Text>
        </View>

        <View style={{padding: 10}}>
          <Button title="Availability" onPress={this.props.onHomePress}/>
        </View>
        <View style={{padding: 10}}>
          <Button title="Log Out" onPress={this.props.onLogoutPress} />
        </View>
        
      </View>
    );
  }
}

export default UserProfile;
