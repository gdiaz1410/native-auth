import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
// will go to app.js by default
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB--uF7n0rU6UzX8awJNuR3j-n5EOkjXYo',
      authDomain: 'authentication-3c481.firebaseapp.com',
      databaseURL: 'https://authentication-3c481.firebaseio.com',
      storageBucket: 'authentication-3c481.appspot.com',
      messagingSenderId: '202560955173'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication App" />
        {this.renderContent()}
      </View>
    );
  }
}


export default App;
