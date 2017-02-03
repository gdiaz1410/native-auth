import React, { Component } from 'react';
import { Button, Card, CardSection, Field } from './common';


class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
    <Card>
      <CardSection>
        <Field
          label="Email"
          value={this.state.text}
          // Callback function. onChangeText is called when user adds text. Called with the text that the user added.
          // Take that text and call setState with it...Value of input is this.state.text
          onChangeText={text => this.setState({ text })} // same as {(text: text)}
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
