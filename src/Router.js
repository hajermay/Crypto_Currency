import React, { Component } from 'react';
import { StackNavigator,
         addNavigationHelpers,
         TabNavigator
          } from 'react-navigation';
import { connect } from 'react-redux';
import Home from './components/pages/HomePage';
import Detail from './components/pages/DetailPage';
import Converter from './components/pages/ConverterPage';
import WelcomePage from './components/pages/WelcomePage';



const tabNavigation = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Home',
        headerTitle: 'Home'
      })  
  },
  Converter: {
    screen: Converter,
    navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Converter',
        headerTitle: 'Converter'
      })
  },
}, {   
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
export const AppNavigator = StackNavigator(
    { Welcome: {
        screen: WelcomePage,
        navigationOptions: () => ({
          gesturesEnabled: false,
          header: null
        })
      },
      TabNavigation: {
        screen: tabNavigation
      },
      Detail: {
        screen: Detail,
        navigationOptions: () => ({
          gesturesEnabled: false,
          headerTitle:'Detail'
        })
      }},
      {
        initialRouteName:'Welcome'
      }
     
);
class Root extends Component {

  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav})} />);
  }
}
const mapStateToProps = (state) => ({
  nav: state.nav,
});

export const AppWithNavigationState = connect(mapStateToProps)(Root);
