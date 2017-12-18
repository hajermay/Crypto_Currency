import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
//import { onSignIn, navigateInit } from '../utils';
//import { Button, Container, Input } from '../common';
//import {} from '../actions/authAction';


class WelcomePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  NavigateToHomePage() {
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.NavigateToHomePage.bind(this)}>
          <Text>Welcome to My Crypto Currency Application</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const mapStateToProps = state => {
	return {

	};
};
export default connect(mapStateToProps, {})(WelcomePage);
