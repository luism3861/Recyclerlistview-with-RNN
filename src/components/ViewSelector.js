import React from 'react';
import {Text, View} from 'react-native';

export const ViewSelector = ({text}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{text}</Text>
    </View>
  );
};
