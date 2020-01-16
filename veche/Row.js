import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

const Row = props => (
  <TouchableOpacity
  style={styles.row}
  onPress={() => {props.onSelectContact(props)
  }}>
    <View style={styles.contBox1}>
      <View style={styles.upLine}>
        <View style={styles.contData1}>
          <Image
            style={{ width: 50, height: 50}}
            source={require('./src/golova.png')}
          />
        </View>
        <View style={styles.contData2}>
          <View style={styles.contData3}>
            <Text style={styles.nameText}>{props.name}</Text>
          </View>
          <View style={styles.contData4}>
            <Text></Text>
          </View>
        </View>
      </View>
      <View style={styles.downLine}>
        <View style={styles.rate}>
          <Image
            style={{ width: 93, height: 18}}
            source={require('./src/stars.png')}
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
          source={require('./src/teg.png')}
        />
        <Text> {props.conTegs}</Text>
        <View style={styles.separator2} />
      </View>
      <View style={styles.connect2}>
        <Image
          style={{ width: 30, height: 30}}
          source={require('./src/action.png')}
        />
        <Text> {props.conActions}</Text>
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
