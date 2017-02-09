import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Field, Spinner } from './common';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      // successful sign in
      .then(this.onLoginSuccess.bind(this)) // any function passed will be done if login is successful. References onLoginSuccess function
      // right email but wrong password
      .catch(() => {
        // make new account
        firebase.auth().createUserWithEmailAndPassword(email, password) // create account
          .then(this.onLoginSuccess.bind(this))
          // valid email but wrong password
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication failed', loading: false })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: 'false',
      error: ''
    });
  }

  renderButton() {
    if(this.state.loading) {
      return <Spinner size="small" />;
    }
    return ( // else
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render() {
    return (
    <Card>
      <CardSection>
        <Field
          placeholder="user.gmail.com"
          label="Email"
          value={this.state.email}
          // Callback function. onChangeText is called when user adds text. Called with the text that the user added.
          // Take that text and call setState with it...Value of input is this.state.text
          // take the text and set it on prop of email
          onChangeText={email => this.setState({ email })} // same as {(text: text)}
          // component rerenders whenever we call setState
        />
      </CardSection>

      <CardSection>
        <Field
          secureTextEntry
          placeholder="password"
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
      </CardSection>

      <Text style={styles.errorTextStyle}>
        {this.state.error}
      </Text>

      <CardSection>
        {this.renderButton()}
      </CardSection>
    </Card>
    );
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
