import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Picker, Button } from 'react-native';
//import { onSignIn, navigateInit } from '../utils';
//import { Button, Container, Input } from '../common';
//import {} from '../actions/authAction';


class ConverterPage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <View>
        <View>
          <Text>amount:</Text>
        </View>
        <View>
          <Text>From:</Text>
        </View>
        <View>
           <Text>To:</Text>
        </View>
        <Button title='submit'/>
      </View>
    );
  }
}
const styles = {

};

const mapStateToProps = state => {
	return {

	};
};
export default connect(mapStateToProps, {})(ConverterPage);
