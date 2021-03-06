import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner = ({ size }) => {
  return(
    <View style={styles.spinnerStyle}>
      {/* if we pass in size, use that. Otherwise use large */}
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};


const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};



export { Spinner };
