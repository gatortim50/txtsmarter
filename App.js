/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

console.disableYellowBox = true;
import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import SignupNavigator from './app/navigators/SignUpNavigator';
import stores from './app/stores';
import { ThemeProvider } from 'react-native-elements';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider stores={stores}>
        <SignupNavigator/>
      </Provider>
    );
  }
}
