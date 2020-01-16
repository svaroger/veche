import React from 'react';
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, Text, View} from  'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AddTegForm from '../AddTegForm';
import {addTeg} from '../redux/actions';


class NewTegScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'New Teg',
  };

  handleSubmit = formState => {
    this.props.addTeg({tegName: formState.tegName})
    this.props.navigation.navigate('Tegs')
  }

  render() {
    return <AddTegForm onSubmit={this.handleSubmit} />
  }
  }

  export default connect(null, {addTeg: addTeg})(NewTegScreen)
  // don care to reciev any props from state, thas why it is null there
  // second parametr connects dispatch function that we import this way
