import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './src/reducers';
import { AppWithNavigationState } from './src/Router';

export default class App extends Component {
  render() {
    const store = createStore(appReducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
