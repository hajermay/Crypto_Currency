import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const ElementBlock = (props) => {
	let element=props.ElementList
	return (
        <TouchableOpacity style={styles.ElementContainer} onPress={props.onPress}>
            <View style={styles.TextElementContainer}><Text style={styles.textStyle}>{element.name}</Text></View>
            <View style={styles.TextElementContainer}><Text style={styles.textStyle}>{element.price_usd}</Text></View>
            <View style={styles.TextElementContainer}><Text style={styles.textStyle}>{element.percent_change_24h}</Text></View>
        </TouchableOpacity>
    );
};

const styles = {
  ElementContainer: {
     alignSelf: 'stretch',
     height:60,
     flexDirection: 'row',
     backgroundColor: '#fff',
     marginTop: 10,
     borderBottomWidth: 0.5,
     borderBottomColor: '#000'
  },
  TextElementContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth:1,
    borderLeftColor: '#ddd',

  },
  textStyle: {
    textAlign: 'center'
  }
};
export { ElementBlock };
