
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  TextInput,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';

import {logInUser} from '../redux/actions'


export default class LoginScreen extends React.Component {
  state = {
    login: '',
    password: '',
    isFormValid: false,
  }


/*
 _login = async () => {
   try {
        this.props.logInUser(this.state.username, this.state.password)
        this.props.navigation.navigate('Contact')
      } catch (err) {
        const errMessage = err.message
        this.setState({err: errMessage})
      }
 }
*/

 handleLoginChange = login => {
 this.setState({login})
 }

 handlePasswordChange = password => {
 this.setState({password})
 }

 handleSubmit = () => {
   this.props.onSubmit(this.state)
 }



  render() {
  return (
          < KeyboardAvoidingView behavior="padding" style={styles.container1}>
            <View style={styles.container3}>
              <Text style={styles.container2}> SMOLA </Text>
              <View style={styles.container3}>
                <TextInput
                  style={styles.input}
                  value={this.state.login}
                  onChangeText={this.handleLoginChange}
                  placeholder="Login"
                  autoCapitalize="none"
                />
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  value={this.state.password}
                  onChangeText={this.handlePasswordChange}
                  placeholder="Password"
                />
              </View>
              <Button title="Submit" onPress={() => this.props.navigation.navigate('Contacts')}
              style={styles.button1} color="#464646"/>
            </View>
          </KeyboardAvoidingView>
  );
}
}

const styles = StyleSheet.create({
	container1: {
    flex: 1,
    backgroundColor: '#5c5a59',
		justifyContent: 'center',
	},
  container2: {
    fontSize: 28,
    color: '#fdfebf',
    fontWeight: 'bold',
    backgroundColor: '#2b2826',
    alignItems: 'center',

  },
  container3: {
    backgroundColor: '#2b2826',
    justifyContent: 'center',
    padding: 20,
  },
	input: {
		borderWidth: 1,
		borderColor: 'black',
		minWidth: 100,
		marginTop: 20,
		marginHorizontal: 20,
		paddingHorizontal: 10,
		paddingVertical: 5,
    padding: 10,
		borderRadius: 30,
    backgroundColor: '#fdfebf',
	},
  scrollView: {
    backgroundColor: 'black',
  },
  button1: {              // надо посмотреть как работает style для кнопки
    borderRadius: 30,
    backgroundColor: 'black',
  },
})

// export default connect(null, {logInUser})(LoginScreen)
