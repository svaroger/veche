import React from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, Text, View} from  'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
	input: {
		borderWidth: 1,
		borderColor: 'black',
		minWidth: 100,
		marginTop: 20,
		marginHorizontal: 20,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 3,
	},
})

export default class AddActionForm extends React.Component {
	static propTypes = {
		addAction: PropTypes.func,
	}

  state = {
  		actionName: '',
			isFormValid: true,
		}

  	componentDidUpdate(prevProps, prevState) {
  		if (this.state.actionName !== prevState.actionName) {
  			this.validateForm()
  			}
  		}

		handleActionNameChange = actionName => {
  	this.setState({actionName})
  	}

  	validateForm = () => {
  		if (this.state.actionName.length >=3 ) {
  		    this.setState({isForValid: true})
  		} else {
  		    this.setState({isForValid: true})
  		}
  	}


	sendData = () => {
		this.props.onSubmit({actionName: this.state.actionName})
	}

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <Text>New Action</Text>
              <Button title="Go to Contact" onPress={() => this.props.navigation.navigate('Actions')} />
              <TextInput
                style={styles.input}
                value={this.state.actionName}
                onChangeText={this.handleActionNameChange}
                placeholder="Action Name"
              />
							<Button title="Submit" onPress={this.sendData} />
    	</KeyboardAvoidingView>
    )
  }
  }
