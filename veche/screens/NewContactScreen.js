import React from 'react';
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, Text, View} from  'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AddContactForm from '../components/AddContactForm';
import {addContact} from '../redux/actions';


class NewContactScreen extends React.Component {
	static navigationOptions = {
    headerTitle: 'New Contact',
  };

  	handleSubmit = formState => {
			this.props.addContact({
				name: formState.name,
				phone: formState.phone,
				picture: formState.picture,
				persRate: formState.persRate,
				profRate: formState.profRate,
				conTegs: formState.conTegs,
				conActions: formState.conActions,
			})
			this.props.navigation.navigate('Contacts')
  	}


  render() {
    return <AddContactForm onSubmit={this.handleSubmit} />
  }
  }

	export default connect(null, {addContact: addContact})(NewContactScreen)
	// don care to reciev any props from state, thas why it is null there
	// second parametr connects dispatch function that we import this way
