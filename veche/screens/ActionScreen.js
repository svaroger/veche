import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import {connect} from 'react-redux';

import ActionsList from '../ActionsList'

class ActionScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Actions',
  };

  state = {
    showActions: true,
  }

// change the state to opposite
/*  toggleActions = () => {
    this.setState(prevState => ({showActions: !prevState.showActions}))
  }
*/

  render() {
    return (
      <View>
          <Button title="Create Action"
          onPress={() => this.props.navigation.navigate('NewAction')}
          color="#464646"
           />
            {this.state.showActions &&
              <ActionsList
              actions={this.props.actions}
              />
            }
      </View>
    );
  }
  }

  // get from store concreet component, props to this class
  const mapStateToProps = state => ({
  actions: state.actions,
  })

  export default connect(mapStateToProps)(ActionScreen)
