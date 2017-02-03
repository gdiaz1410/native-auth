import React, { Component } from 'react';
import { Button, Card, CardSection, Field } from './common';


class LoginForm extends Component {
  state = { email: '' };

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

      <CardSection />

      <CardSection>
        <Button>
          Log In
        </Button>
      </CardSection>
    </Card>
    );
  }
}


export default LoginForm;
