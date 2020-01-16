import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import {connect} from 'react-redux';

import TegsList from '../components/TegsList'

class TegScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Tegs',
  };

  state = {
    showTegs: true,
  }

// change the state to opposite
/*  toggleTegs = () => {
    this.setState(prevState => ({showTegs: !prevState.showTegs}))
  }
*/

  render() {
    return (
      <View>
          <Button title="Create Teg"
          onPress={() => this.props.navigation.navigate('NewTeg')}
          color="#464646"
           />
            {this.state.showTegs &&
              <TegsList
              tegs={this.props.tegs}
              />
            }
      </View>
    );
  }
  }

  // get from store concreet component, props to this class
  const mapStateToProps = state => ({
  tegs: state.tegs,
  })

  export default connect(mapStateToProps)(TegScreen)
