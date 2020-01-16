
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';



const ActionRow = props => (
 <TouchableOpacity
  style={styles.row}
  onPress={() => {props.onSelectAction(props)
  }}>
    <View style={styles.contBox1}>
      <View style={styles.upLine}>
        <View style={styles.contData1}>
          <Image
            style={{ width: 50, height: 50}}
            source={require('../src/action.png')}
          />
        </View>
        <View style={styles.contData2}>
          <View style={styles.contData3}>
            <Text style={styles.nameText}>{props.actionName}</Text>
          </View>
          <View style={styles.contData4}>
            <Text></Text>
          </View>
        </View>
      </View>
      <View style={styles.downLine}>
        <View style={styles.rate}>
        </View>
        <View style={styles.rate}>
          <Text style={styles.rateText}></Text>
        </View>
      </View>
    </View>
    <View style={styles.contBox2}>
      <View style={styles.connect1}>
        <Image
          style={{ width: 30, height: 30}}
          source={require('../src/golova.png')}
        />
        <Text> {props.conTegs}</Text>
      </View>
      <View style={styles.connect2}>
        <Image
          style={{ width: 30, height: 30}}
          source={require('../src/teg.png')}
        />
        <Text> {props.conActions}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

ActionRow.propTypes = {
  actionName: PropTypes.string,
}

const styles = StyleSheet.create({
  row: {
      padding: 5,
      flex: 2,
      flexDirection: 	'row',
      borderWidth: 1,
      borderColor: 'black',
  },
  downLine: {
    flex: 3,
    flexDirection: 	'row',
    justifyContent: 'center',
  },
  upLine: {
    flex: 3,
    flexDirection: 	'row',
    justifyContent: 'space-between',
  },
  contData1: {
    flex: 1,
    flexDirection: 	'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  contData2: {
    flex: 4,
    justifyContent: 'space-between',
  },
  contData3: {
    flex: 1,
    flexDirection: 	'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  contData4: {
    flex: 1,
    flexDirection: 	'row',
    justifyContent: 'center',
  },
  rate: {
    flex: 3,
    flexDirection: 	'row',
    justifyContent: 'space-between',

  },
  contBox1: {
    flex: 6,
    flexDirection: 	'column',
    justifyContent: 'center',
  },
  contBox2: {
    flex: 1,
    justifyContent: 'space-between',
  },
  connect1: {
    flex: 1,
    flexDirection: 	'row',
    padding: 5,
    justifyContent: 'space-between',
    borderWidth: 2,
    borderTopColor: 'white',
    borderLeftColor: 'black',
    borderRightColor: 'white',
    borderBottomColor: 'white',
  },
  connect2: {
    flex: 1,
    flexDirection: 	'row',
    padding: 5,
    justifyContent: 'space-between',
    borderWidth: 2,
    borderTopColor: 'black',
    borderLeftColor: 'black',
    borderRightColor: 'white',
    borderBottomColor: 'white',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  rateText: {
    fontWeight: 'bold',
    fontSize: 18,
  }
})


export default ActionRow
