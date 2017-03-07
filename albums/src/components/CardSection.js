import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { containerStyles } = styles;

  return (
    <View style={containerStyles}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyles: {
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    padding: 5,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export default CardSection;
