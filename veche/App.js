/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

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
import Colors from './constants/Colors';

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
        headerTintColor: Colors.tint,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
	      },
        headerStyle: {
          backgroundColor: Colors.background,
        },
      },
      tabBarOptions: {
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        style: {
          backgroundColor: Colors.background,
        },
        activeTintColor: Colors.tint,
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

/*
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
*/

  render() {
      return   (
              <Provider store={store}>
                <AppContainer/>
              </Provider>

      )
}
}
