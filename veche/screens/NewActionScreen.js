import React from 'react';
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, Text, View} from  'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AddActionForm from '../components/AddActionForm';
import {addAction} from '../redux/actions';


class NewActionScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'New Action',
  };

  handleSubmit = formState => {
    this.props.addAction({actionName: formState.actionName})
    this.props.navigation.navigate('Actions')
  }

  render() {
    return <AddActionForm onSubmit={this.handleSubmit} />
  }
  }

  export default connect(null, {addAction: addAction})(NewActionScreen)
  // don care to reciev any props from state, thas why it is null there
  // second parametr connects dispatch function that we import this way
