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

export default class AddContactForm extends React.Component {
	static propTypes = {
		addContact: PropTypes.func,
	}

  state = {
  		name: '',
  		phone: '',
			picture: './src/golova.png',
			persRate: '',
			profRate: '',
			conTegs: '',
			conActions: '',

			isFormValid: true,
  	}

  	componentDidUpdate(prevProps, prevState) {
  		if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
  			this.validateForm()
  			}
  		}

  	handleNameChange = name => {
  	this.setState({name})
  	}

  	handlePhoneChange = phone => {
  		if (+phone >= 0  && phone.length <= 10) {
  			 this.setState({phone})
  		}
  	}

		handlePersRateChange = persRate => {
  		if (+persRate >= 0  && persRate.length <= 10) {
  			 this.setState({persRate})
  		}
  	}

		handleProfRateChange = profRate => {
			this.setState({profRate})
		}

		handleConTegsChange = conTegs => {
			if (+conTegs >= 0  && conTegs.length <= 10) {
				 this.setState({conTegs})
			}
		}

		handleConActionsChange = conActions => {
			if (+conActions >= 0  && conActions.length <= 10) {
				 this.setState({conActions})
			}
		}


  	validateForm = () => {
  		if (+this.state.phone >= 0  && this.state.phone.length === 10 && this.state.name.length >=3 ) {
  		    this.setState({isForValid: true})
  		} else {
  		    this.setState({isForValid: true})
  		}
  	}


	sendData = () => {
		this.props.onSubmit({
			name: this.state.name,
			phone: this.state.phone,
			picture: this.state.picture,
			persRate: this.state.persRate,
			profRate: this.state.profRate,
			conTegs: this.state.conTegs,
			conActions: this.state.conActions,
		})
	}

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <Text> New Contact </Text>
              <Button title="Go to Contact" onPress={() => this.props.navigation.navigate('Contacts')} />
              <TextInput
                style={styles.input}
                value={this.state.name}
                onChangeText={this.handleNameChange}
                placeholder="Name"
              />
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={this.state.phone}
                onChangeText={this.handlePhoneChange}
                placeholder="Phone"
              />
							<TextInput
								keyboardType="numeric"
								style={styles.input}
								value={this.state.persRate}
								onChangeText={this.handlePersRateChange}
								placeholder="Personal Rate"
							/>
							<TextInput
								keyboardType="numeric"
								style={styles.input}
								value={this.state.profRate}
								onChangeText={this.handleProfRateChange}
								placeholder="Professional Rate"
							/>
							<TextInput
								keyboardType="numeric"
								style={styles.input}
								value={this.state.conTegs}
								onChangeText={this.handleConTegsChange}
								placeholder="Connected Tegs"
							/>
							<TextInput
								keyboardType="numeric"
								style={styles.input}
								value={this.state.conActions}
								onChangeText={this.handleConActionsChange}
								placeholder="Connected Actions"
							/>
							<Button title="Submit" onPress={this.sendData} />
    	</KeyboardAvoidingView>
    )
  }
  }
