import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  SectionList,
} from 'react-native';
import {connect} from 'react-redux';

import ContactsList from '../ContactsList'

class ContactScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Contacts',
    headerTintColor: '#fdfebf',
    headerTitleStyle: {
      fontWeight: 'bold',
      },
    headerStyle: {
        backgroundColor: '#2b2826',
      },
    };

  state = {
    showContacts: true,
  }

/* change the state to opposite
  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }
*/

  render() {
    return (
      <View>
          <Button title="Create Contact"
            onPress={() => this.props.navigation.navigate('NewContact')}
            color="#464646"
          />
          {this.state.showContacts &&
          <ContactsList
            contacts={this.props.contacts}
            onSelectContact={contact => {
              this.props.navigation.navigate('ContactDetails')
            }}
          />
          }
      </View>
      );
    }
  }

// get from store concreet component, props to this class
const mapStateToProps = state => ({
  contacts: state.contacts,
})

export default connect(mapStateToProps)(ContactScreen)
