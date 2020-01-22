import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {ListItem, Text, Rating} from 'react-native-elements';

const { rating } = 3;       // this.props. create data

const Row = props => (
  <TouchableOpacity
  onPress={() => {props.onSelectContact(props)
  }}>
    <View  style={styles.row}>
    <View style={styles.contBox1}>
      <View style={styles.upLine}>
        <View style={styles.contData2}>
        <ListItem
          title={props.name}
          subtitle={props.phone}
          leftAvatar={{ source: require('../src/golova.png')}}
          bottomDivider
          chevron
        />
        </View>
      </View>
      <View style={styles.downLine}>
        <View style={styles.rate}>
          <Rating
            imageSize={20}
            readonly
            startingValue={rating}
            style={styles.rating}
          />
        </View>
        <View sty le={styles.rate}>
          <Text style={styles.rateText}>{props.profRate}</Text>
        </View>
      </View>
    </View>
    <View style={styles.separator1} />
    <View style={styles.contBox2}>
      <View style={styles.connect1}>
        <Image
          style={{ width: 30, height: 30}}
          source={require('../src/teg.png')}
        />
        <Text> {props.conTegs}</Text>
        <View style={styles.separator2} />
      </View>
      <View style={styles.connect2}>
        <Image
          style={{ width: 30, height: 30}}
          source={require('../src/action.png')}
        />
        <Text> {props.conActions}</Text>
      </View>
    </View>
    </View>
  </TouchableOpacity>
)

Row.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
}

const styles = StyleSheet.create({
  row: {
      flex: 1,
      flexDirection: 	'row',
  },
  downLine: {
    flex: 3,
    flexDirection: 	'row',
  },
  upLine: {
    flex: 3,
    flexDirection: 	'row',
  },
  contData1: {
    flex: 1,
    flexDirection: 	'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  contData2: {
    flex: 4,
  },
  contData3: {
    flex: 1,
    flexDirection: 	'row',
    marginLeft: 10,
    marginTop: 5,
  },
  contData4: {
    flex: 1,
    flexDirection: 	'row',
  },
  rate: {
    flex: 3,
    flexDirection: 	'row',
  },
  contBox1: {
    flex: 240,
    flexDirection: 	'column',
  },
  contBox2: {
    flex: 40,
  },
  connect1: {
    flex: 1,
    flexDirection: 	'row',
    padding: 5,

  },
  connect2: {
    flex: 1,
    flexDirection: 	'row',
    padding: 5,
    justifyContent: 'space-between',

  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  rateText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  separator1: {
    flex: 1,
    flexDirection: 	'column',
    height: 100,  
    width: 1,  
    backgroundColor: "#CED0CE",
  },
})

export default Row
