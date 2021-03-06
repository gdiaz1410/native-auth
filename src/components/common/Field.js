import React from 'react';
import { TextInput, View, Text } from 'react-native';
// passed down props from LoginForm
const Field = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {  // whatever text passed in as label prop will populate the text tag
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry} // will pass in true or false
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1 //flex 2 + 1 = 3. 2/3 of space goes to inputStyle. Only for these two children of the view
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};


export { Field };
