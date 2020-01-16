/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  SectionList,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {Provider} from 'react-redux';

import ContactScreen from './screens/ContactScreen';
import ActionScreen from './screens/ActionScreen';
import LoginScreen from './screens/LoginScreen';
import TegScreen from './screens/TegScreen';
import NewContactScreen from './screens/NewContactScreen';
import NewTegScreen from './screens/NewTegScreen';
import NewActionScreen from './screens/NewActionScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import {fetchUsers} from './api';
import contacts, {compareNames} from './contacts';
import store from './redux/store'


const MenuScreen = createMaterialTopTabNavigator(
    {
      Contacts: ContactScreen,
      Tegs: TegScreen,
      Actions: ActionScreen,
    },
    {
      initialRouteName: 'Contacts',
      navigationOptions: {
        headerTitle: 'SMOLA',
        headerTintColor: '#fdfebf',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
	      },
        headerStyle: {
          backgroundColor: '#2b2826',
        },
      },
      tabBarOptions: {
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        style: {
          backgroundColor: '#2b2826',
        },
        activeTintColor: '#fdfebf',
        inactiveTintColor: 'gray',
      },
    }
  );

  const AppNavigator = createStackNavigator(
      {
        NewContact: NewContactScreen,
        NewTeg: NewTegScreen,
        NewAction: NewActionScreen,
        Menu: MenuScreen,
        ContactDetails: ContactDetailsScreen,
      },
      {
        initialRouteName: 'Menu',
      }
    );

  const MainNavigator = createSwitchNavigator(
      {
        Login: LoginScreen,
        Main: AppNavigator,
      },
      {
        initialRouteName: 'Login',
      }
    );

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {

  state = {
    contacts: contacts,
  }

componentDidMount() {
  this.getUsers()
}

getUsers = async () => {
  const results = await fetchUsers()
  this.setState({contacts: results})
}


  render() {
      return   (
              <Provider store={store}>
                <AppContainer/>
              </Provider>

      )
}
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
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
});
