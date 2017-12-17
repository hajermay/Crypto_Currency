import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text } from 'react-native';
//import { onSignIn, navigateInit } from '../utils';
//import { Button, Container, Input } from '../common';
//import {} from '../actions/authAction';


class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <View />
    );
  }
}
const styles = {
  
};

const mapStateToProps = state => {
	return {
		
	};
};
export default connect(mapStateToProps, {})(HomePage);
