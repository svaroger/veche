import React from 'react';
import { View, Text, Button, } from 'react-native';

export default class ContactDetailsScreen extends React.Component {

  render() {
    return (
      <View>
        <Text> Contact Details </Text>
          <Button title="Go to Contact" onPress={() => this.props.navigation.navigate('Contacts')} />
          <Button title="Show Details" onPress={() => this.props.navigation.navigate('Login')} />
      </View>
    )
  }
  }
