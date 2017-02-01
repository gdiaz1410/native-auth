import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
  <View style={styles.containerStyle}>
    {/* will render any components we passed to card because of props. Shows album detail such as props.title.album in view tag */}
    {props.children}
  </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};


export { Card };
