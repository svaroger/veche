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

export default class AddTegForm extends React.Component {
	static propTypes = {
		addTeg: PropTypes.func,
	}

  state = {
  		tegName: '',
			isFormValid: true,
  	}

  	componentDidUpdate(prevProps, prevState) {
  		if (this.state.tegName !== prevState.tegName) {
  			this.validateForm()
  			}
  		}

  	handleTegNameChange = tegName => {
  	this.setState({tegName})
  	}



  	validateForm = () => {
  		if (this.state.tegName.length >=3 ) {
  		    this.setState({isForValid: true})
  		} else {
  		    this.setState({isForValid: true})
  		}
  	}


	sendData = () => {
		this.props.onSubmit({tegName: this.state.tegName})
	}

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <Text> New Teg</Text>
              <Button title="Go to Contact" onPress={() => this.props.navigation.navigate('Tegs')} />
              <TextInput
                style={styles.input}
                value={this.state.tegName}
                onChangeText={this.handleTegNameChange}
                placeholder="Name"
              />
							<Button title="Submit" onPress={this.sendData} />
    	</KeyboardAvoidingView>
    )
  }
  }
