import React, { Component } from 'react';
import { View, Text} from 'react-native';
import firebase from 'firebase';
// will go to app.js by default
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB--uF7n0rU6UzX8awJNuR3j-n5EOkjXYo',
      authDomain: 'authentication-3c481.firebaseapp.com',
      databaseURL: 'https://authentication-3c481.firebaseio.com',
      storageBucket: 'authentication-3c481.appspot.com',
      messagingSenderId: '202560955173'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication App" />
        <LoginForm />
      </View>
    );
  }
}


export default App;
